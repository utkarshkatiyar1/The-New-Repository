"use server";
// import { revalidatePath } from "next/cache";
import { connectToDB } from "../mongoose";
// import { currentUser } from '@clerk/nextjs/server';
import { auth } from '@clerk/nextjs/server';
import Repo from "../models/repo.model";

export async function createRepo({
  repoName, repoGroupName, githubUsername
}) {
  try {
    connectToDB();

    const {userId} = auth();
    if(!userId) return;

    const newRepo = new Repo({
        repoName,
        repoGroupName,
        githubUsername,
        clerkId: userId, // Use the mongoose ID of the user
      });
  
      const createdRepo = await newRepo.save();

      return createdRepo.toObject();

  } catch (error) {
    throw new Error(`Error creating new Repo: ${error.message}`);
  }
}


export async function getAllRepoByGithubUsername_GroupName(repoGroupName, githubUsername) {
  try {
    connectToDB();

    const {userId} = auth();
    if(!userId) return;

    const allRepo = await Repo.find({repoGroupName: repoGroupName, githubUsername: githubUsername})

    return allRepo;

  } catch (error) {
    throw new Error(`Error getting all Github repo by github username and group name: ${error.message}`);
  }
}