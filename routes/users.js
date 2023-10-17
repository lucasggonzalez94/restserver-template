const { Router } = require("express");

const {
  getUsers,
  postUser,
  updateUser,
  deleteUser,
} = require("../controllers/users");

const router = Router();

router.get("/", getUsers);

router.post("/", postUser);

router.put("/", updateUser);

router.delete("/", deleteUser);

module.exports = router;
