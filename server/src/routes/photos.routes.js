import { Router } from "express";
import { savePhotos } from "../controllers/photos.controller.js";

const router = Router();

router.get("/", (req, res) => res.send("Welcome to server"));

router.post("/upload", savePhotos)

export default router;
