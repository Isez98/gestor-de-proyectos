const aws = require('aws-sdk');
const multer = require("multer");
const multers3 = require("multer-s3");
const s3 = new aws.S3({region: 'us-west-1'})
const upload = multer({
   storage: multers3({
     s3: s3,
     bucket: 'gpi-images',
     acl: 'public-read',
     contentType: multers3.AUTO_CONTENT_TYPE,
     metadata: function (req, file, cb) {
       cb(null, { fieldName: file.fieldname });
     },
     key: function (req, res, cb) {
       cb(null, req.body.imageName)
     }
   })
});

const getFile = (req, res) => {
  try{
    const params = { Bucket: "gpi-images", Key: req.params.fileName, Expires: 60*5 };
    const url = s3.getSignedUrl('getObject',params)
    res.status(200).json({success:true, data: url})
  }catch(error) {console.log(error)}  
} 

module.exports = { upload, getFile }