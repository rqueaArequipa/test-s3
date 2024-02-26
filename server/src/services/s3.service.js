import {
  PutObjectCommand,
  GetObjectCommand,
  ListObjectsCommand,
} from "@aws-sdk/client-s3";
import { clientS3 } from "../config/aws.config.js";
import { AWS_BUCKET_NAME } from "../config/env.config.js";
import fs from "fs-extra";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

async function uploadFile(photo) {
  const file = fs.readFileSync(photo.tempFilePath);
  const uploadParams = {
    Body: file,
    Bucket: AWS_BUCKET_NAME,
    Expires: new Date("TIMESTAMP"),
    Key: photo.name, // required
    Metadata: {
      contentType: photo.mimetype,
    },
  };
  const command = new PutObjectCommand(uploadParams);
  fs.unlink(photo.tempFilePath);
  return await clientS3.send(command);
}

async function readFile() {
  const command = new GetObjectCommand({
    Bucket: AWS_BUCKET_NAME,
    Key: "R.jpeg",
  });
  //const result = await clientS3.send(command);

  //result.Body.pipe(fs.createWriteStream("./images/img.webp"));
  //   const newFile = fs.createWriteStream("./images/img.jpg");
  //   fs.createReadStream(result.Body).pipe(newFile)
  return await clientS3.send(command);
}

async function readFiles() {
  const command = new ListObjectsCommand({
    Bucket: AWS_BUCKET_NAME,
  });
  return await clientS3.send(command);
}

async function downloadFileAWS() {
  const command = new GetObjectCommand({
    Bucket: AWS_BUCKET_NAME,
    Key: "R.jpeg",
  });
  const result = await clientS3.send(command);
  result.Body.pipe(fs.createWriteStream("./images/img.jpeg"));
}

async function getFileURLAWS() {
  const command = new GetObjectCommand({
    Bucket: AWS_BUCKET_NAME,
    Key: "R.jpeg",
  });
  return await getSignedUrl(clientS3, command, {
    expiresIn: 3600,
  });
}

export { uploadFile, readFile, readFiles, downloadFileAWS, getFileURLAWS };
