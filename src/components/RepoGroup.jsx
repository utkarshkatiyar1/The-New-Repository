"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import DialogBox from "./DialogBox";
import { GithubAccountForm } from "./form/GithubAccountForm";
import { getAllGithubAccountByClerkId } from "@/lib/actions/github-account.action";
import { RepoGroupForm } from "./form/RepoGroupForm";
import RepoGroupDialogBox from "./dialogbox/RepoGroupDialogBox";
import { getAllRepoGroupByGithubUsername } from "@/lib/actions/repo-group.action";
// import { useRouter } from "next/router";
// import { Router } from "next/router";

export default function RepoGroup({account}) {
    const [allRepoGroup, setAllRepoGroup] = useState([])
    const [showGroups, setShowGroups] = useState(false);
    // console.log(allRepoGroup)

    const getAllRepoGroupByUsername = async () => {
      
            const allRepoGroupData = await getAllRepoGroupByGithubUsername(account.username);
          // const parsedObject = JSON.parse(JSON.stringify(allGithubAccountsData));
          setAllRepoGroup(allRepoGroupData)

        
      setShowGroups(!showGroups)
    }

  return (
    <div>

        <div className="group relative border-t-2 border-l-2 border-b-2 border-[#def2f1] p-1 rounded-tl-sm rounded-bl-sm text-white text-sm flex justify-between mb-1">
        
            <div className="cursor-pointer opacity-100 hover:opacity-80 hover:underline" onClick={getAllRepoGroupByUsername}>{account.username}</div>
            <div className="inner opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white"><RepoGroupDialogBox githubUsername={account.username}/></div>
        </div>

        {showGroups && <div className="flex ml-3 text-white flex-col  gap-1">{allRepoGroup.map((group, index) => <div className="cursor-pointer opacity-100 hover:opacity-80 hover:underline border-l-2 border-b-2 border-[#def2f1] pl-1 text-xs" key={index}>{group.groupName}</div>)}</div>}

    </div>

  );
}
