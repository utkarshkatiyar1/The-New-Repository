import mongoose from "mongoose";

const RepoGroupSchema = new mongoose.Schema({
    groupName: {
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

const RepoGroup = mongoose.models.RepoGroup || mongoose.model("RepoGroup", RepoGroupSchema);

export default RepoGroup;