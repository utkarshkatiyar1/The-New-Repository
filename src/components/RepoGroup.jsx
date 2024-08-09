"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import DialogBox from "./DialogBox";
import { GithubAccountForm } from "./form/GithubAccountForm";
import { getAllGithubAccountByClerkId } from "@/lib/actions/github-account.action";
import { RepoGroupForm } from "./form/RepoGroupForm";
import RepoGroupDialogBox from "./dialogbox/RepoGroupDialogBox";
import { getAllRepoGroupByGithubUsername } from "@/lib/actions/repo-group.action";
import { getAllRepoByGithubUsername_GroupName } from "@/lib/actions/repo.action";
import { useDispatch, useSelector } from "react-redux";
import { addRepos } from "@/app/GlobalRedux/githubAccounts/repoSlice";
import { addGroup } from "@/app/GlobalRedux/githubAccounts/groupSlice";
// import { useRouter } from "next/router";
// import { Router } from "next/router";

export default function RepoGroup({account}) {
    const [allRepoGroup, setAllRepoGroup] = useState([])
    const [showGroups, setShowGroups] = useState(false);
    const [allRepo, setAllRepo] = useState([]);
    const dispatch = useDispatch();

    // console.log(allRepoGroup)

    const getAllRepoGroupByUsername = async () => {
      
            const allRepoGroupData = await getAllRepoGroupByGithubUsername(account.username);
          // const parsedObject = JSON.parse(JSON.stringify(allGithubAccountsData));
          setAllRepoGroup(allRepoGroupData)

        
      setShowGroups(!showGroups)
    }

    const getAllRepo = async (groupName) => {
      
      const repoData = await getAllRepoByGithubUsername_GroupName(groupName, account.username);

      dispatch(addGroup({name: groupName, username: account.username}))
      if(repoData) {
        dispatch(addRepos(repoData))
        setAllRepo(repoData);
      }
    }

  return (
    <div>

        <div className="group relative text-white hover:bg-[#212121] flex justify-between p-2 rounded-md ml-2 mr-2">
        
            <div className="cursor-pointer text-md" onClick={getAllRepoGroupByUsername}>{account.username}</div>
            <div className="inner opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white"><RepoGroupDialogBox githubUsername={account.username}/></div>
        </div>

        {showGroups && <div className="flex ml-6 text-white flex-col gap-1 mt-1">{allRepoGroup.map((group, index) => <div onClick={() => getAllRepo(group.groupName)} className="cursor-pointer pl-1 text-sm p-1 text-[#a3a4a7] hover:text-white" key={index}>{group.groupName}</div>)}</div>}

    </div>

  );
}
