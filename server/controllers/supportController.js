const Feedback = require("../models/Feedback");

// Submit feedback
exports.submitFeedback = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newFeedback = new Feedback({ name, email, message });
    await newFeedback.save();
    res.status(201).json({ message: "Feedback submitted successfully", feedback: newFeedback });
  } catch (error) {
    res.status(500).json({ message: "Error submitting feedback", error });
  }
};

// Get FAQs (static data for now)
exports.getFAQs = async (req, res) => {
  try {
    const faqs = [
      {
        question: "How do I add a new property?",
        answer: "Go to the Property Management page and click on 'Add Property'.",
      },
      {
        question: "How do I contact support?",
        answer: "You can contact support by clicking the 'Contact Support' link in the Support and Help section.",
      },
      {
        question: "How do I update my profile?",
        answer: "Go to the Profile page and click on 'Edit Profile'.",
      },
    ];
    res.json(faqs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching FAQs", error });
  }
};