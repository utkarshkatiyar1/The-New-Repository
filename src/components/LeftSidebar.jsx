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
import RepoDialogBox from "./dialogbox/RepoDialogBox";

export default function LeftSidebar({groupName}) {
  // const dispatch = useDispatch();
  const [group_data, setGroup_data] = useState({})
  const [repos_data, setRepos_data] = useState([]);
  // console.log(allGithubAccounts)
  const data = useSelector((state) => state.groupData.group);
  const allRepos = useSelector((state) => state.reposData.repos);
  // console.log(repos_data)

  useEffect(() => {
    setGroup_data(data);
  }, [data]);

  useEffect(() => {
    setRepos_data(allRepos);
  }, [allRepos]);
    
    
  return (
    <div className="bg-[#111111] text-white w-[20%] border-t-[2px] border-[#212121]">
      <div className="flex justify-between border-b-2 p-3 border-[#212121] mb-4 font-semibold">
        <div>{`${group_data.username}/${group_data.name}`}</div>
        <RepoDialogBox/>
      </div>

      <div className="m-2 flex flex-col gap-2">
        {repos_data && repos_data.map((field) => <div className="cursor-pointer border-2 border-[#212121] bg-[#191919] rounded-md p-2 text-sm text-[#D4D4D8] hover:bg-[#111111] transition-colors duration-300 ease-in-out">{field.repoName}</div>)}

      </div>
    </div>

  );
}
