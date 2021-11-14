const path = require('path')

const envPath = {
  path: path.join(__dirname, '../.env')
}

const configObj = require('dotenv').config(envPath)


if (configObj.error) throw configObj.error

const aws = require('aws-sdk')

aws.config.update({
  accessKeyId: configObj.parsed.AWS_ACCESS_KEY_ID,
  secretAccessKey: configObj.parsed.AWS_SECRET_ACCESS_KEY,
  region: configObj.parsed.AWS_REGION
})

const s3 = new aws.S3();

module.exports={
  aws,
  s3,
  s3bucket: configObj.parsed.S3_BUCKET
}