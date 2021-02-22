const aws = require('aws-sdk');
const path = require("path");
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

module.exports = { upload }