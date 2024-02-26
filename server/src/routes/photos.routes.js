import { Router } from "express";
import { downloadFile, getFileURL, getFiles, getPhotos, savePhotos } from "../controllers/photos.controller.js";

const router = Router();

router.get("/", (req, res) => res.send("Welcome to server"));

router.post("/upload", savePhotos);
router.get("/file", getPhotos)
router.get("/files", getFiles);
router.get("/download", downloadFile)
router.get("/file-url", getFileURL)

export default router;
