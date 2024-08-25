"use server";
// import { revalidatePath } from "next/cache";
import { connectToDB } from "../mongoose";
// import { currentUser } from '@clerk/nextjs/server';
import { auth } from '@clerk/nextjs/server';
import RepoGroup from "../models/repo-group.model";
import Repo from "../models/repo.model";

export async function createRepoGroupAccount({
  groupName, githubUsername
}) {
  try {
    await connectToDB();

    const {userId} = auth();
    if(!userId) return;

    const newRepoGroup = new RepoGroup({
        groupName,
        githubUsername,
        clerkId: userId, // Use the mongoose ID of the user
      });
  
      const createdRepoGroup = await newRepoGroup.save();

      return createdRepoGroup.toObject();

  } catch (error) {
    throw new Error(`Error creating new Repo Group: ${error.message}`);
  }
}


export async function getAllRepoGroupByGithubUsername(githubUsername) {
  try {
    await connectToDB();

    const {userId} = auth();
    if(!userId) return;

    const allRepoGroup = await RepoGroup.find({githubUsername: githubUsername})

    return allRepoGroup;

  } catch (error) {
    throw new Error(`Error getting all Github accounts by clerkID: ${error.message}`);
  }
}

export const deleteRepoGroupAndAssociatedRepos = async (groupName, githubUsername) => {
  try {
    // Ensure database is connected
    connectToDB();

    // Find and delete the RepoGroup document
    const deletedRepoGroup = await RepoGroup.findOneAndDelete({ githubUsername, groupName });

    if (!deletedRepoGroup) {
      return { success: false, message: 'RepoGroup not found' };
    }

    // Delete all Repo documents associated with this RepoGroup
    await Repo.deleteMany({ githubUsername, groupName });

    return { success: true, message: 'RepoGroup and associated Repos deleted successfully' };
  } catch (error) {
    console.error('Error deleting RepoGroup and associated Repos:', error);
    return { success: false, message: 'An error occurred while deleting' };
  }
};