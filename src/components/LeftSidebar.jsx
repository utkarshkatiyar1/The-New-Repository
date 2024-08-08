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

export default function LeftSidebar() {
  // const dispatch = useDispatch();
  const [allGithubAccounts, setAllGithubAccounts] = useState([])
  // console.log(allGithubAccounts)
  const data = useSelector((state) => state.githubAccountsData.githubAccounts);

  // useEffect(() => {
  //   const getGithubAccounts = async () => {
  //     const allGithubAccountsData = await getAllGithubAccountByClerkId();
  //     // const parsedObject = JSON.parse(JSON.stringify(allGithubAccountsData));
  //     dispatch(addGithubAccounts(allGithubAccountsData))

  //     // console.log(data)
  //     // setAllGithubAccounts(loginStatus)
  //   }
  //   getGithubAccounts();
  // }, [])


  useEffect(() => {
    setAllGithubAccounts(data);
  }, [data]);
    
    
  return (
    <div className="bg-green-500 w-[20%]">left side bar

      <div className="flex flex-col">{allGithubAccounts.map((account) => <div>{account.username}</div>)}</div>
    
    
    </div>

  );
}
