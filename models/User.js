import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
      select: false,
    },

    profilePic: {
<<<<<<< HEAD
      url: {
        type: String,
        default: "",
      },
      public_id: {
        type: String,
        default: "",
      },
=======
      type: String, // Cloudinary URL
      default: "",
    },

    isVerified: {
      type: Boolean,
      default: false,
>>>>>>> 908465d (mmm)
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);
