import { Router } from "express";
import { getPhotos, savePhotos } from "../controllers/photos.controller.js";

const router = Router();

router.get("/", (req, res) => res.send("Welcome to server"));

router.post("/upload", savePhotos);
router.get("/files", getPhotos);

export default router;
