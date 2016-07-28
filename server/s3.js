var AWS = require('aws-sdk'); 
require('dotenv').config();
  
// var vids = require('../client/components/VideoChat.jsx');

var s3 = new AWS.S3(); //{apiVersion: '2006-03-01'}
AWS.config.update({accessKeyId: process.env.app_id, secretAccessKey: process.env.app_key});
AWS.config.update({region:'us-west-2'});



const postTheVideo = (file) => {
  console.log('you made it to your s3call')
 s3.createBucket({Bucket: process.env.bucket}, function() {
 	//THE BODY IS WHAT YOUR ARE INPUTTING, the KEY IS THE TITLE!
  var params = {
  	Bucket: process.env.bucket,
    Key: 'I uploaded a file!!!',
    Body: file
  };

  s3.putObject(params, function(err, data) {
      if (err)       
          console.log(err)     
      else       console.log("Successfully uploaded data to myBucket/myKey" + data);   
   });
});
}

module.exports.postTheVideo = postTheVideo;





// var params = {Bucket: process.env.bucket, Key: 'key'};
// var url = s3.getSignedUrl('getObject', params);
//presigned
// console.log('The URL is', url);

///'https://console.aws.amazon.com/s3/home?region=us-west-2&bucket=labitapp&prefix='