import mongoose from "mongoose";

const githubAccountSchema = new mongoose.Schema({
  pat: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    unique: true,
    required: true,
  },
  clerkId: {
    type: String,
    required: true,
  }
});

const GithubAccount = mongoose.models.GithubAccount || mongoose.model("GithubAccount", githubAccountSchema);

export default GithubAccount;