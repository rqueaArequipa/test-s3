import { PutObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3";
import { clientS3 } from "../config/aws.config.js";
import { AWS_BUCKET_NAME } from "../config/env.config.js";
import fs from "fs-extra";

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
    Key: "udipsnLKjsbTdJruLgW5t2wrzkv9RMBdE8Mi2+Rm53E=.thumb.webp",
  });
  const result = await clientS3.send(command);

  result.Body.pipe(fs.createWriteStream("./images/img.webp"));

  //   const newFile = fs.createWriteStream("./images/img.jpg");
  //   fs.createReadStream(result.Body).pipe(newFile)

  return await clientS3.send(command);
}

export { uploadFile, readFile };
