import { readFile, uploadFile } from "../services/s3.service.js";

const savePhotos = async (req, res) => {
  const photo = req.files?.photo;
  console.log(req.files?.photo);
  const result = await uploadFile(photo);
  console.log(result);
  res.send("archivo subido");
};

const getPhotos = async (req, res) => {
  const result = await readFile();
  console.log(result);
  res.send("tu archivo");
};

export { savePhotos, getPhotos };
