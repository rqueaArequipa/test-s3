import {
  downloadFileAWS,
  getFileURLAWS,
  readFile,
  readFiles,
  uploadFile,
} from "../services/s3.service.js";

const savePhotos = async (req, res) => {
  const photo = req.files?.photo;
  console.log(req.files?.photo);
  const result = await uploadFile(photo);
  console.log(result);
  res.send("archivo subido");
};

const getPhotos = async (req, res) => {
  const result = await readFile();
  // console.log(result);
  res.json(result.$metadata);
};

const getFiles = async (req, res) => {
  const result = await readFiles();
  res.json(result.Contents);
};

const downloadFile = async (req, res) => {
  await downloadFileAWS();
  res.json({
    message: "Archivo descargado",
  });
};

const getFileURL = async (req, res) => {
  const result = await getFileURLAWS();
  return res.json({
    url: result,
  });
};

export { savePhotos, getPhotos, getFiles, downloadFile, getFileURL };
