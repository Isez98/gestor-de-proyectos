
const { S3Client, ListBucketsCommand } = require('@aws-sdk/client-s3');
const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
   destination: "./public/uploads/",
   filename: function(req, file, cb){
      cb(null,"IMAGE-" + Date.now() + path.extname(file.originalname));
   }
});

const upload = multer({
   storage: storage
});

// const s3 = new S3Client({ 
//   region: 'us-west-1'
// });

// const run = async () => {
//   try {
//     const data = await s3.send(new ListBucketsCommand({}));
//     console.log("Success! ", data.Buckets)
//   }catch(error) {
//     console.log("Error: ", error);
//   }
// };

//run();

// seeValue = (req, res) => {
//   try{
//   //  res.send(req.body, req.file) 
//     res.status(200).send(req.file);
//   //res.status(req.body).send()
//   }catch(error){
//     console.log(error)
//   } 
// }

module.exports = {
  upload
}