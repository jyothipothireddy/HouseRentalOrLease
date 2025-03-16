const Message = require("../models/Message");

// Get all messages
exports.getMessages = async (req, res) => {
  try {
    const messages = await Message.find();
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: "Error fetching messages", error });
  }
};

// Send a new message
exports.sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const newMessage = new Message({ message });
    await newMessage.save();
    res.json(newMessage);
  } catch (error) {
    res.status(500).json({ message: "Error sending message", error });
  }
};