const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Tenant = require("../models/Tenant");
const Owner = require("../models/Owner");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

const JWT_SECRET = "b955oy34jyo26882";

// User Signup
exports.signup = async (req, res) => {
  try {
    const { username, name, email, password, role } = req.body;

    if (!username || !name || !email || !password || !role) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Check if user exists in the respective collection
    const existingUser =
      role === "tenant"
        ? await Tenant.findOne({ email })
        : await Owner.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists." });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user in the correct collection
    let newUser;
    if (role === "tenant") {
      newUser = new Tenant({
        username,
        name,
        email,
        password: hashedPassword,
        role,
      });
    } else if (role === "owner") {
      newUser = new Owner({
        username,
        name,
        email,
        password: hashedPassword,
        role,
      });
    } else {
      return res.status(400).json({ message: "Invalid role selected." });
    }

    await newUser.save();
    console.log("User registered successfully:", newUser);

    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    console.error("Registration Error:", error);
    res.status(500).json({ message: "Server error. Please try again." });
  }
};

// User Login
exports.login = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    if (!email || !password || !role) {
      return res
        .status(400)
        .json({ message: "Email, password, and role are required." });
    }

    console.log("Login Request Data:", req.body); // Debugging

    // Find user based on role
    const user =
      role === "tenant"
        ? await Tenant.findOne({ email })
        : await Owner.findOne({ email });

    console.log("User found:", user); // Debugging

    if (!user || !user.password) {
      return res.status(400).json({ message: "Invalid Email or Password" });
    }

    // Verify password
    const isMatch = await bcrypt.compare(password, user.password);
    console.log("Password Match:", isMatch); // Debugging

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Email or Password" });
    }

    // Generate JWT Token
    const token = jwt.sign({ userId: user._id, role: user.role }, JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ message: "Login Successful!", token, user });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Forgot Password
exports.forgotPassword = async (req, res) => {
  const { email, role } = req.body;

  try {
    // Find user based on role
    const user =
      role === "tenant"
        ? await Tenant.findOne({ email })
        : await Owner.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Generate reset token
    const resetToken = crypto.randomBytes(20).toString("hex");
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
    await user.save();

    // Send email with reset link
    const resetLink = `http://localhost:3000/reset-password/${resetToken}`;
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      to: user.email,
      from: process.env.EMAIL_USER,
      subject: "Password Reset",
      text: `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n
      Please click on the following link, or paste it into your browser to complete the process:\n\n
      ${resetLink}\n\n
      If you did not request this, please ignore this email and your password will remain unchanged.\n`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Reset link sent to your email" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Reset Password
exports.resetPassword = async (req, res) => {
  const { token } = req.params;
  const { password, role } = req.body;

  try {
    // Find user based on role
    const user =
      role === "tenant"
        ? await Tenant.findOne({
            resetPasswordToken: token,
            resetPasswordExpires: { $gt: Date.now() },
          })
        : await Owner.findOne({
            resetPasswordToken: token,
            resetPasswordExpires: { $gt: Date.now() },
          });

    if (!user) {
      return res.status(400).json({ message: "Invalid or expired token" });
    }

    // Update password
    user.password = await bcrypt.hash(password, 10);
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

    res.status(200).json({ message: "Password reset successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};