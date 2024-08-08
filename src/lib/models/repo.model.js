import mongoose from "mongoose";

const RepoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  
  repoGroupName: {
    type: String,
    unique: true,
    required: true,
  },

  githubUsername: {
    type: String,
    unique: true,
    required: true,
  }
});

const Repo = mongoose.models.Repo || mongoose.model("Repo", RepoSchema);

export default Repo;