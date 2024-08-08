"use server";
// import { revalidatePath } from "next/cache";
import { connectToDB } from "../mongoose";
import GithubAccount from "../models/github-account.model";
// import { currentUser } from '@clerk/nextjs/server';
import { auth } from '@clerk/nextjs/server';

export async function createGithubAccount({
  pat, username
}) {
  try {
    connectToDB();

    const {userId} = auth();
    if(!userId) return;

    const newGithubAccount = new GithubAccount({
        pat,
        username,
        clerkId: userId, // Use the mongoose ID of the user
      });
  
      const createdGithubAccount = await newGithubAccount.save();

      return createdGithubAccount.toObject();

  } catch (error) {
    throw new Error(`Error creating new Github account: ${error.message}`);
  }
}


export async function getAllGithubAccountByClerkId() {
  try {
    connectToDB();

    const {userId} = auth();
    if(!userId) return;

    const allGithubAccounts = await GithubAccount.find({clerkId: userId})

    return allGithubAccounts;

  } catch (error) {
    throw new Error(`Error getting all Github accounts by clerkID: ${error.message}`);
  }
}