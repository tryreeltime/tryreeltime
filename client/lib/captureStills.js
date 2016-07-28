import _ from 'underscore';


// the base URL for the Kairos API
  var baseUrl = 'https://api.kairos.com/'

// The width and height of the captured photo. We will set the
// width to the value defined here, but the height will be
// calculated based on the aspect ratio of the input stream.

  var width = 320;    // We will scale the photo width to this
  var height = 0;     // This will be computed based on the input stream

  // |streaming| indicates whether or not we're currently streaming
  // video from the camera. Obviously, we start at false.

  var streaming = false;

  // The various HTML elements we need to configure or control. These
  // will be set by the startup() function.

  var video = null;
  var canvas = null;

  function startup(username, socket) { // socket is passed down.
    video = document.getElementById('video');
    canvas = document.getElementById('canvas');

    navigator.getMedia = ( navigator.getUserMedia ||
                           navigator.webkitGetUserMedia ||
                           navigator.mozGetUserMedia ||
                           navigator.msGetUserMedia);

    navigator.getMedia(
      {
        video: true,
        audio: false
      },
      function(stream) {
        if (navigator.mozGetUserMedia) {
          video.mozSrcObject = stream;
        } else {
          var vendorURL = window.URL || window.webkitURL;
          video.src = vendorURL.createObjectURL(stream);
        }
        video.play();
      },
      function(err) {
        console.log("An error occured! " + err);
      }
    );

    video.addEventListener('canplay', function(ev){
      if (!streaming) {
        height = video.videoHeight / (video.videoWidth/width);

        // Firefox currently has a bug where the height can't be read from
        // the video, so we will make assumptions if this happens.

        if (isNaN(height)) {
          height = width / (4/3);
        }

        video.setAttribute('width', width);
        video.setAttribute('height', height);
        canvas.setAttribute('width', width);
        canvas.setAttribute('height', height);
        streaming = true;
      }
    }, false);

    window.setTimeout( () => {
      takepicture(username);
    }, 5000); // TODO: change.

    clearphoto();
  }

  // Fill the photo with an indication that none has been
  // captured.

  function clearphoto() {
    var context = canvas.getContext('2d');
    context.fillRect(0, 0, canvas.width, canvas.height);

    var data = canvas.toDataURL('image/png');
    // TODO: send data to Kairos?
  }

  // Capture a photo by fetching the current contents of the video
  // and drawing it into a canvas, then converting that to a PNG
  // format data URL. By drawing it on an offscreen canvas and then
  // drawing that to the screen, we can change its size and/or apply
  // other changes before drawing it.

  function takepicture(username) {
    var context = canvas.getContext('2d');
    if (width && height) {
      canvas.width = width;
      canvas.height = height;
      context.drawImage(video, 0, 0, width, height);
      var data = canvas.toDataURL('image/png'); // base64 encoded.
      console.log('takepicture!');

      // TODO: somewhere either here or in doAuth we need to send the image `data` to AWS S3 and return the URL for sending to Kairos.

      doAuth(data, username);
    } else {
      clearphoto();
    }
  }

 // for use in doAuth
  function takemorepictures() {
    var context = canvas.getContext('2d');
    if (width && height) {
      canvas.width = width;
      canvas.height = height;
      context.drawImage(video, 0, 0, width, height);
      var data = canvas.toDataURL('image/png'); // base64 encoded.
      return data;
    } else {
      clearphoto();
    }
  }

  function doAuth(image, username) {
    var url = baseUrl + 'gallery/list_all';

    fetch(url, {
      method: 'POST',
      headers: {
        app_id: 'cd1b9d6a',
        app_key: 'c72a50a9f99308c9eb7ac0f531b9cf75'
      }
    }).then( (res) => {
      return res.json();
    }).then( (data) => {
      console.log('response /gallery/list_all', data);

      if (_.indexOf(data.gallery_ids, username) > -1) {
        postKairos('recognize', image, username);
      } else {
        postKairos('enroll', image, username);

        // '/recognize' works best with 6-8 images for a person.
        // so we upload several images on '/enroll'
        for (var i = 0; i < 6; i++) {
          var image = takemorepictures();
          postKairos('enroll', image, username);
        } // NOTE: need to also post those to AWS.
      }
    }).catch( (err) => {
      console.error('err in post gallery/list_all', err);
    });
  }

  function postKairos(endpoint, image, username) {
    console.log('firing of a request to', endpoint, 'for user', username);
    var body;
    var url = baseUrl + endpoint;

    // test with a person img - WORKS! - NOTE: remove for production
    image = 'http://www.rodamarketing.com/wp-content/uploads/2014/07/Smiling-Man.jpg';

    if (endpoint === 'recognize') {
      body = {
        image: image,
        gallery_name: username
      }
    } else { // '/enroll'
      body = {
       image: image,
       subject_id: username,
       "minHeadScale":".125",
       "multiple_faces":"false", // we don't want multiple people for auth
       'selector': 'EYES', // options: FACE , EYES , FULL , SETPOSE
       'symmetricFill': 'true',
       gallery_name: username
     };
    }

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        app_id: 'cd1b9d6a',
        app_key: 'c72a50a9f99308c9eb7ac0f531b9cf75'
      },
      body: JSON.stringify(body)
    }).then( (res) => {
      return res.json();
    }).then( (data) => {
      console.log('response on postKairos', endpoint, 'with', data);
      // TODO: something after successful enrollment or auth.
      return; // resolves promise.
    }).catch( (err) => {
      console.log('error Kairos Facial Rec. POST', err);
    })
  }

  export default startup
