import User from "../models/User.js";

export const dashboard = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    res.status(200).json({
      message: "Welcome to dashboard",
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
};
