"use server";
// import { revalidatePath } from "next/cache";
import { connectToDB } from "../mongoose";
import GithubAccount from "../models/github-account.model";
// import { currentUser } from '@clerk/nextjs/server';
import { auth } from '@clerk/nextjs/server';
import { decrypt, encrypt } from "../utils/encryption.util";
import Shoo from "../models/shoo.model";

export async function putShooData(
  shoodata
) {
  try {
    connectToDB();

   

    const createdData = new Shoo({
        shooData: shoodata
      });
  
      const savedData = await createdData.save();

      return savedData.toObject();

  } catch (error) {
    throw new Error(`Error creating shoo data: ${error.message}`);
  }
}


