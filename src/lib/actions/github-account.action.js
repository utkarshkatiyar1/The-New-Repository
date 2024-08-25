"use server";
// import { revalidatePath } from "next/cache";
import { connectToDB } from "../mongoose";
import GithubAccount from "../models/github-account.model";
// import { currentUser } from '@clerk/nextjs/server';
import { auth } from '@clerk/nextjs/server';
import { decrypt, encrypt } from "../utils/encryption.util";

import Repo from "../models/repo.model";
import RepoGroup from "../models/repo-group.model";

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

export const deleteGithubAccount = async (account) => {
  try {
    // Ensure database is connected
    connectToDB();

    // Find and delete the RepoGroup document
    console.log(account)
    const deletedAccount = await GithubAccount.findOneAndDelete({ username: account });
    console.log("deleted: ", deletedAccount)

    if (!deletedAccount) {
      return { success: false, message: 'GithubAccount not found' };
    }

    // Delete all Repo documents associated with this RepoGroup
    await RepoGroup.deleteMany({ githubUsername: account });

    await Repo.deleteMany({ githubUsername: account });

    return { success: true, message: 'GithubAccount deleted successfully' };
  } catch (error) {
    console.error('Error deleting GithubAccount:', error);
    return { success: false, message: 'An error occurred while deleting GithubAccount' };
  }
};