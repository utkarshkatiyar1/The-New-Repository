"use server";
// import { revalidatePath } from "next/cache";
import { connectToDB } from "../mongoose";
import GithubAccount from "../models/github-account.model";
// import { currentUser } from '@clerk/nextjs/server';
import { auth } from '@clerk/nextjs/server';
import { decrypt, encrypt } from "../utils/encryption.util";
import Shoo from "../models/shoo.model";
import OneShoo from "../models/oneShoo.model";

export async function putOneShooData(
  shoodata
) {
  try {
    connectToDB();

   

    const createdData = new OneShoo({
        shooData: shoodata
      });
  
      const savedData = await createdData.save();

      return savedData.toObject();

  } catch (error) {
    throw new Error(`Error creating oneshoo data: ${error.message}`);
  }
}


