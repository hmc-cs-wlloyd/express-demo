const express = require("express");
const {
  putUserProvider,
  getUserProvider,
  postUserProvider,
  deleteUserProvider,
} = require("../controllers/user");

const router = express.Router();

router.put("/", putUserProvider);

router.get("/:userID", getUserProvider);

router.post("/:userID", postUserProvider);

router.delete("/:userID", deleteUserProvider);

module.exports = router;
