import express from "express";
import cors from "cors";
import fileUpload from "express-fileupload";

//import routes
import photosRoutes from "./routes/photos.routes.js";

const app = express();
app.use(
  cors({
    origin: "https://bd3d561v-5173.brs.devtunnels.ms",
  })
);

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./uploads",
  })
);

app.use(photosRoutes);

export default app;
