const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// auth test controller
exports.test = async (req, res) => {
  try {
    res.status(200).send("Auth route test is working fine");
  } catch (error) {
    res.status(500).send(`Error in auth test controller: ${error.message}`);
  }
};

// register controller
exports.register = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    const normalizedEmail = (email || "").toLowerCase().trim();
    const existingEmail = await User.findOne({ email: normalizedEmail });

    if (existingEmail) {
      return res
        .status(400)
        .send({ errors: [{ msg: "Email already exists" }] });
    }

    const allowedRoles = ["user", "admin", "vendor"];
    const safeRole = allowedRoles.includes(role) ? role : "user";
    const newUser = new User({ ...req.body, role: safeRole, email: normalizedEmail });

    const salt = 10;

    const hashedPassword = await bcrypt.hash(password, salt);

    newUser.password = hashedPassword;

    await newUser.save();

    // Generate JWT token
          const token = jwt.sign(
            {
              id: newUser._id,
              Name: newUser.name,
              email: newUser.email,
            },
            process.env.SECRET_KEY,
            { expiresIn: "7d" }
          );

    const safeUser = newUser.toObject();
    delete safeUser.password;

    res.status(201).send({
      success: [{ msg: "User registered successfully" }],
      user: safeUser,
      token,
    });
  } catch (error) {
    res
      .status(500)
      .send({
        errors: [{ msg: `Error in register controller: ${error.message}` }],
      });
  }
};

// login controller
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const foundUser = await User.findOne({ email: (email || "").toLowerCase().trim() });

    if (!foundUser) {
      return res
        .status(400)
        .send({ errors: [{ msg: "User not found with this email" }] });
    }

    // Check password
    const hashedPassword = await bcrypt.compare(password, foundUser.password);

    if (!hashedPassword) {
      return res.status(400).send({ errors: [{ msg: "Password incorrect" }] });
    }

    const token = jwt.sign({ id: foundUser._id, role: foundUser.role }, process.env.SECRET_KEY, { expiresIn: "7d" });

    const safeUser = foundUser.toObject();
    delete safeUser.password;

    res.status(200).send({
      success: [{ msg: `Hello ${safeUser.name || "User"} Welcome Back !` }],
      user: safeUser,
      token,
    });
  } catch (error) {
    res.status(500).send({ errors: [{ msg: `Error in login controller: ${error.message}` }] });
  }
};

// current user
exports.current = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");
    res.status(200).send({ user });
  } catch (error) {
    res.status(500).send({ errors: [{ msg: `Error fetching current user: ${error.message}` }] });
  }
};

// return user (for NavBar)
exports.me = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");
    res.status(200).send({ user });
  } catch (error) {
    res.status(500).send({ errors: [{ msg: `Error fetching user: ${error.message}` }] });
  }
};

// logout
exports.logout = async (req, res) => {
  try {
    res.status(200).send({ success: [{ msg: "Logged out" }] });
  } catch (error) {
    res.status(500).send({ errors: [{ msg: `Error in logout: ${error.message}` }] });
  }
};
