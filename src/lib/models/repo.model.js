import mongoose from "mongoose";

const RepoSchema = new mongoose.Schema({
  repoName: {
    type: String,
    required: true,
  },
  
  repoGroupName: {
    type: String,
    required: true,
  },

  githubUsername: {
    type: String,
    required: true,
  },
  clerkId: {
    type: String,
    required: true,
  }
});

const Repo = mongoose.models.Repo || mongoose.model("Repo", RepoSchema);

export default Repo;