import mongoose from "mongoose";

const AnswerScema = new mongoose.Schema({
  answer: String,
  
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  questionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Answers",
  },
  user: Object,
});

const Answers = mongoose.model("Answers", AnswerScema);

export default Answers;