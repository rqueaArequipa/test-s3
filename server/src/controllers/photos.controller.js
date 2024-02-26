export const savePhotos = (req, res) => {
  console.log(req.files);
  res.send("archivo subido");
};
