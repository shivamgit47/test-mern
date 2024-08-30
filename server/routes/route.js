import express from "express";
import {
  addUser,
  allUsers,
  deleteUserone,
  editUser,
  getUser,
} from "../controller/user-controller.js";

const router = express.Router();

router.post("/add", addUser);

router.get("/all", allUsers);

router.get("/:id", getUser);

router.put("/:id", editUser);

router.delete("/:id", deleteUserone);

export default router;
