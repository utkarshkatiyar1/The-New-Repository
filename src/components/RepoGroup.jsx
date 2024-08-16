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
import { RiGitRepositoryLine } from "react-icons/ri";
import { AiOutlineGithub } from "react-icons/ai";
import { FaLayerGroup } from "react-icons/fa6";
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

        <div className="group relative text-[#474B4F] border-[0.06rem] border-white hover:border-[0.06rem] hover:border-[#D0D7DE] flex justify-between p-2 rounded-md ml-2 mr-2">

          <div className="flex items-center gap-2 hover:text-[#0969DA] text-[#636C76] ">
            <AiOutlineGithub className=""/>
        
            <div className="cursor-pointer text-sm hover:underline" onClick={getAllRepoGroupByUsername}>{account.username}</div>

          </div>
            <div className="inner opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white"><RepoGroupDialogBox githubUsername={account.username}/></div>
        </div>

        {showGroups && <div className="flex ml-8 text-white flex-col gap-1 mt-1">{allRepoGroup.map((group, index) => <div onClick={() => getAllRepo(group.groupName)} className="flex items-center gap-2 cursor-pointer pl-1 text-[12.16px] p-1 text-[#a3a4a7] hover:text-[#656568]" key={index}>
          <FaLayerGroup/>
          <div>{group.groupName}</div>
          </div>)}</div>}

    </div>

  );
}
