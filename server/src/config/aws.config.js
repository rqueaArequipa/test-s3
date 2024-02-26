import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import {
  AWS_BUCKET_NAME,
  AWS_BUCKET_REGION,
  AWS_PUBLIC_KEY,
  AWS_SECRET_KEY,
} from "./env.config.js";

export const clientS3 = new S3Client({
  region: AWS_BUCKET_REGION,
  credentials: {
    accessKeyId: AWS_PUBLIC_KEY,
    secretAccessKey: AWS_SECRET_KEY,
  },
});
