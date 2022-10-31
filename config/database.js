// const aws = require('aws-sdk');

// let s3 = new aws.S3({
//   accessKeyId: process.env.S3_KEY,
//   secretAccessKey: process.env.S3_SECRET
// });

// module.exports = {
//   database: process.env.MONGO_URI,
//   secret: process.env.SECRET,
//   s3: s3
// }  
module.exports = {
  database: "mongodb+srv://javicl00:javicl00@fullstackcluster.jvg2mlo.mongodb.net/?retryWrites=true&w=majority", //"http://localhost:27017/",
  secret: "yoursecret"
}

