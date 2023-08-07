import express from "express";
import { getmyprofile, login, logout, register } from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/me").get(isAuthenticated, getmyprofile);
router.route("/logout").get(isAuthenticated, logout);

export default router;
