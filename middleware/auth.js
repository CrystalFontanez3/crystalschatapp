auth.js
routes/users.js
routes/rooms.js 
const Room = require("../models/Room");
const express = require("express");
const User = require("../models/User");
const auth = require("../middleware/auth");
const router = express.Router();
const jwt = require("jsonwebtoken");
const authMiddleware = (req, res, next) => {
  const header = req.headers.authorization;
  if (!header) return res.status(401).json({ message: "No token provided" });
// Create a new chat room
router.post("/", auth, async (req, res) => {
  try {
    const room = new Room({
      name: req.body.name,
      owner: req.userId
        await room.save();
    res.json(room);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// Get all rooms
router.get("/", auth, async (req, res) => {
  try {
    const rooms = await Room.find();
    res.json(rooms);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});    });  const token = header.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch {
    return res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = authMiddleware;
