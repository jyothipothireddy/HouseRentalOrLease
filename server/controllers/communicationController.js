const Message = require("../models/Message");

// Get all messages between tenant and owner
const getMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({ timestamp: 1 }); // Sort by oldest first
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch messages" });
  }
};

// Send a new message
const sendMessage = async (req, res) => {
  const { sender, message } = req.body;

  if (!sender || !message) {
    return res.status(400).json({ error: "Sender and message are required" });
  }

  try {
    const newMessage = new Message({ sender, message });
    await newMessage.save();
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ error: "Failed to send message" });
  }
};

module.exports = { getMessages, sendMessage };