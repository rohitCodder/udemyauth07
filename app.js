import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import { errorMiddlewares } from "./middlewares/errorMiddlewares.js";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// using routes
import userRoutes from "./routes/user.js";
app.use("/api/v1", userRoutes);

app.get("/", (req, res) => {
  res.send(`<h1>Server is working </h1>`);
});

export default app;

app.use(errorMiddlewares);
