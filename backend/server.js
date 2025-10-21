require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());
app.use(cors());

// --- Connect to MongoDB ---
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected successfully."))
.catch(err => console.error("MongoDB connection error:", err));

// --- User Schema and Model ---
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // Password will be stored as plain text
});

const User = mongoose.model("User", userSchema);

// --- Registration Route (Plain Text Password) ---
app.post("/api/auth/register", async (req, res) => {
  try {
    const { email, password } = req.body;

    // IMPORTANT: Storing the password directly without hashing.
    const newUser = new User({ email, password }); 
    
    await newUser.save();
    res.status(201).json({ message: "User registered successfully with plain password" });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(400).json({ message: "Error registering user. The email may already be in use." });
  }
});

// --- Login Route (Plain Text Password) ---
app.post("/api/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // IMPORTANT: Comparing the plain text password directly.
    if (password !== user.password) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Create and send token if password is correct
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    
    res.status(200).json({ token });

  } catch (error) {
    console.error("Login server error:", error);
    res.status(500).json({ message: "Server error during login" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});