import cloudinary from "../config/cloudinaryConfig.js";

export const uploadToCloudinary = async (file, folder = "profiles") => {
  return await cloudinary.uploader.upload(file, {
    folder,
    resource_type: "image",
  });
};
