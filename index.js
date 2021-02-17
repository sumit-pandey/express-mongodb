import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import LikesModel, { CommentsModel } from "./schmea.js";
const app = express();

app.use(bodyParser.json());

app.get("/:postId", async (req, res) => {
  try {
    const post = await LikesModel.findById(req.params.postId);
    res.send(post);
  } catch (error) {
    res.json({ message: error });
  }
});

app.get("/:commentId", async (req, res) => {
  try {
    const comment = await CommentsModel.findById(req.params.postId);
    res.send(comment);
  } catch (error) {
    res.json({ message: error });
  }
});

app.post("/like", async (req, res) => {
  const like = new LikesModel({
    title: req.body.title,
    likeCount: req.body.likeCount,
  });
  try {
    const data = await like.save();
    res.json(data);
  } catch {
    res.send(err);
  }
});

app.post("/comment", async (req, res) => {
  const comment = new CommentsModel({
    title: req.body.title,
    description: req.body.description,
  });
  try {
    const data = await comment.save();
    res.json(data);
  } catch {
    res.send(err);
  }
});

const CONNECTION_URL =
  "mongodb+srv://javascript:123@cluster0.3aiph.mongodb.net/<dbname>?retryWrites=true&w=majority";

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
  })
  .then(() => console.log("connected"))
  .catch((err) => console.log(err));

app.listen(3000);
