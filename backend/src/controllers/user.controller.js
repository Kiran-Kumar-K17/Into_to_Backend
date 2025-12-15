import { User } from "../models/users.model";

const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    //basic validation
    if (!username || !email || !password) {
      return res.status(400).json({ message: "All Field are Required" });
    }

    //check exist
    const existing = await User.findOne({ email: email.toLowwerCase() });
    if (existing) {
      return res.status(400).json({ message: "User Already Exist" });
    }
  } catch (error) {}
};
