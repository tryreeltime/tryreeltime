
{/*TODO: Add calls to media recorder from remote streams as well*/}
import { getPeer, getMyId, establishPeerCall, establishPeerConnection} from '../lib/webrtc';


function recorddd (localStream, socket) {
        window.mediaRecorder = new MediaRecorder(localStream);

        var recordedChunks = [];
        var handleDataAvailable = (event) => {
          if (event.data.size > 0) {
            recordedChunks.push(event.data);
          } else {
            console.log('no stream? error in mediaRecoreder -- handleDataAvailable');
          }
        };
        

        mediaRecorder.ondataavailable = handleDataAvailable;
        mediaRecorder.onstop = () => {

          //send off the video as a file through server socket (then to s3 then to Kairos)
          var file = new File(recordedChunks, `userid.webm`, {
            type: 'video/webm'
          });
          socket.emit('videoFile', file);
        };

        mediaRecorder.start();

        window.setTimeout( () => {
          mediaRecorder.stop();
        }, 5000)
       return localStream;
};


export default recorddd;