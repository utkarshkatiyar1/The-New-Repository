"use server";
// import { revalidatePath } from "next/cache";
import { connectToDB } from "../mongoose";
import GithubAccount from "../models/github-account.model";
// import { currentUser } from '@clerk/nextjs/server';
import { auth } from '@clerk/nextjs/server';
import { decrypt, encrypt } from "../utils/encryption.util";

export async function createGithubAccount({
  pat, username
}) {
  try {
    connectToDB();

    const {userId} = auth();
    if(!userId) return;

    const encryptedPat = encrypt(pat);

    const newGithubAccount = new GithubAccount({
        pat: encryptedPat,
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

export async function getPatByUsername(username) {
  try {

    connectToDB();

    const {userId} = auth();
    if(!userId) return;

    const res = await GithubAccount.find({username: username})

    const decryptedPat = decrypt(res[0].pat);
    return decryptedPat;

  } catch (error) {
    throw new Error(`Error getting pat by username: ${error.message}`);
  }
}