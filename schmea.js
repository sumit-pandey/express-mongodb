import mongoose from "mongoose";

const Likes = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  likeCount: {
    type: Number,
    required: true,
  },
});

const Comments = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const LikesModel = mongoose.model("Likes", Likes);

export const CommentsModel = mongoose.model("Comments", Comments);

export default LikesModel;
