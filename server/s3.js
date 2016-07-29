var AWS = require('aws-sdk'); 
require('dotenv').config();
  
// var vids = require('../client/components/VideoChat.jsx');

var s3 = new AWS.S3(); //{apiVersion: '2006-03-01'}
AWS.config.update({accessKeyId: process.env.app_id, secretAccessKey: process.env.app_key});
AWS.config.update({region:'us-west-2'});

/////////////////////////
///////VIDEO POST////////
/////////////////////////

const postTheVideo = (videoFile) => {
  console.log('Posting videoFile to your AWS s3 bucket');
  //set the parameters for your video posts
  var params = {
  	Bucket: process.env.bucket,
    Key: 'videoFile_kairos',
    Body: videoFile,
    ContentType: 'video/webm'
  };

  //CONNECT WITH THE BUCKET --once things work, experiment to make sure it is necessary
  s3.createBucket({Bucket: process.env.bucket}, function() {
    //put an object in the bucket -- change to post if works! 
    s3.putObject(params, function(err, data) {
        if (err)       
            console.log(err)     
        else       console.log("Successfully uploaded data to myBucket" + data);   
     });
  });


  //set public and authenticated urls to return to the client! 
    var publicUrl = 'https://s3.amazonaws.com/' + params.Bucket + '/' + params.Key;
    var presignedUrl = s3.getSignedUrl('putObject', params);

    //send them off
    return {publicUrl:publicUrl, presignedUrl: presignedUrl};
};

/////////////////////////
///////VIDEO POST////////
/////////////////////////

// const postThePhoto = (photo) => {
//   console.log('Attempting post of videoFile to s3')
//  s3.createBucket({Bucket: process.env.bucket}, function() {
//   //THE BODY IS WHAT YOUR ARE INPUTTING, the KEY IS THE TITLE!
//   var params = {
//     Bucket: process.env.bucket,
//     Key: 'Photo for Kairos',
//     Body: photo,
//     ContentType: 'image/jpeg',
//     'Content-Transfer-Encoding': base64
//   };

//   s3.putObject(params, function(err, data) {
//       if (err) {    
//           console.log(err) 
//       }    
//       else {
//         console.log("Successfully uploaded data to myBucket" + data);
//         data; 
//       }
//   });

// });
// };

module.exports.postTheVideo = postTheVideo;




//Content-Type: application/pdf
//Content-Transfer-Encoding: base64
// var params = {Bucket: process.env.bucket, Key: 'key'};
// var url = s3.getSignedUrl('getObject', params);
//presigned
// console.log('The URL is', url);

///'https://console.aws.amazon.com/s3/home?region=us-west-2&bucket=labitapp&prefix='