import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema(
  {
    user: { type: String, required: true },
    date: { type: String, required: true },
    content: { type: String, required: true },
    likes: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.models.Comment || mongoose.model("Comment", CommentSchema);
