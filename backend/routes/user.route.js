import express from "express";
import { getUserProfileAndRepos } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/profile/:username", getUserProfileAndRepos);
// todo =>get likes(who liked your profile)
// todo =>post like aprofile

export default router;
