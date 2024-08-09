"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import DialogBox from "./DialogBox";
import { GithubAccountForm } from "./form/GithubAccountForm";
import { getAllGithubAccountByClerkId } from "@/lib/actions/github-account.action";
import { RepoGroupForm } from "./form/RepoGroupForm";
import RepoGroupDialogBox from "./dialogbox/RepoGroupDialogBox";
import RepoGroup from "./RepoGroup";
import { useDispatch, useSelector } from "react-redux";
// import { useRouter } from "next/router";
// import { Router } from "next/router";
import { addGithubAccounts } from "@/app/GlobalRedux/githubAccounts/githubAccountSlice";

export default function RightSidebar() {
  const dispatch = useDispatch();
  const [allGithubAccounts, setAllGithubAccounts] = useState([])
  // console.log(allGithubAccounts)
  const data = useSelector((state) => state.githubAccountsData.githubAccounts);

   

  useEffect(() => {
    const getGithubAccounts = async () => {
      const allGithubAccountsData = await getAllGithubAccountByClerkId();
      // const parsedObject = JSON.parse(JSON.stringify(allGithubAccountsData));
      dispatch(addGithubAccounts(allGithubAccountsData))

      // console.log(data)
      // setAllGithubAccounts(loginStatus)
    }
    getGithubAccounts();
  }, [])


  useEffect(() => {
    setAllGithubAccounts(data);
  }, [data]);

 
    
  return (
    <div className="bg-[#111111] w-[20%] gap-1 border-t-[2px] border-[#212121]">
      <div className="flex justify-between items-center p-3 border-b-2 border-[#212121] mb-2">
        <div className="text-white font-bold text-xl">Github Accounts</div>
        <div className="text-white"><DialogBox/></div>
      </div>

      <div className="flex flex-col">
        {allGithubAccounts.map((account, index) => <RepoGroup key={index} account={account}/>)}
      </div>

    
    
    </div>

  );
}
