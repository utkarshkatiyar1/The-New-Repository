"use server";
// import { revalidatePath } from "next/cache";
import { connectToDB } from "../mongoose";
// import { currentUser } from '@clerk/nextjs/server';
import { auth } from '@clerk/nextjs/server';
import RepoGroup from "../models/repo-group.model";

export async function createRepoGroupAccount({
  groupName, githubUsername
}) {
  try {
    connectToDB();

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
    connectToDB();

    const {userId} = auth();
    if(!userId) return;

    const allRepoGroup = await RepoGroup.find({githubUsername: githubUsername})

    return allRepoGroup;

  } catch (error) {
    throw new Error(`Error getting all Github accounts by clerkID: ${error.message}`);
  }
}