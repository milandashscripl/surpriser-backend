import User from "../models/User.js";
import { uploadToCloudinary } from "../utils/cloudinarUpload.js";

/**
 * GET PROFILE mmmmmmmmmm
 */
export const getProfile = async (req, res) => {
  try {
    res.json(req.user);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

/**
 * UPDATE PROFILE
 */
export const updateProfile = async (req, res) => {
  try {
    const { name } = req.body;
    let profilePic = req.user.profilePic;

    if (req.file) {
  const uploadRes = await uploadToCloudinary(req.file.path);
  profilePic = uploadRes.secure_url;
}


    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      { name, profilePic },
      { new: true }
    ).select("-password");

    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: "Profile update failed" });
  }
};