"use client"

import Link from "next/link";
import { useEffect, useState } from "react";
import DialogBox from "./DialogBox";
import { GithubAccountForm } from "./form/GithubAccountForm";
import { getAllGithubAccountByClerkId, getPatByUsername } from "@/lib/actions/github-account.action";
import { RepoGroupForm } from "./form/RepoGroupForm";
import RepoGroupDialogBox from "./dialogbox/RepoGroupDialogBox";
import RepoGroup from "./RepoGroup";
import { useDispatch, useSelector } from "react-redux";
// import { useRouter } from "next/router";
// import { Router } from "next/router";
import { addGithubAccounts, clearGithubAccountsFromStore } from "@/app/GlobalRedux/githubAccounts/githubAccountSlice";
import { addRepoPrs, clearRepoPrsFromStore } from "@/app/GlobalRedux/githubAccounts/prRepoSlice";
import { addPrs, clearPrsFromStore } from "@/app/GlobalRedux/githubAccounts/prSlice";
import RepoDialogBox from "./dialogbox/RepoDialogBox";
import getPullsbySha, { getPullRequests, getWorkflowRuns, getWorkflowRunsForPR } from "@/lib/actions/pull-request.action";
import { GoRepo } from "react-icons/go";
import { gettingPrsRepoLoading, clearPrsRepoLoadingFromStore } from "@/app/GlobalRedux/githubAccounts/prRepoLoadingSlice";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { deleteRepoById } from "@/lib/actions/repo.action";
import { deleteRepo } from "@/app/GlobalRedux/githubAccounts/repoSlice";

export default function LeftSidebar({groupName}) {
  const dispatch = useDispatch();


  const [group_data, setGroup_data] = useState({})
  const [repos_data, setRepos_data] = useState([]);

  const [pullRequest_data, setPullRequest_data] = useState([]);
  const [pullRequestWithTestCase_data, setPullRequestWithTestCase_data] = useState([]);
  // console.log(pullRequest_data)
  // console.log(pullRequestWithTestCase_data)
  const data = useSelector((state) => state.groupData.group);
  const allRepos = useSelector((state) => state.reposData.repos);
  // console.log(repos_data)

  useEffect(() => {
    setGroup_data(data);
  }, [data]);

  useEffect(() => {
    setRepos_data(allRepos);
  }, [allRepos]);

  


  const fetchPullRequests = async (repoName) => {

    const pat = await getPatByUsername(group_data.username);
    // console.log(group_data.username)
    // console.log(repoName)
    // console.log(pat)

    const usernameData = group_data.username;
    const repoNameData = repoName;
    const patData = pat

    // console.log("4444444444444444444")

    const pullRequests = await getPullRequests(usernameData, repoNameData, patData);
    setPullRequest_data(pullRequests);
    // console.log("55555555555555")

    return pullRequests;

  }
  const fetchPullBySha = async (repoName) => {


    // console.log("223432323432343")

    dispatch(gettingPrsRepoLoading("start"))

    const pat = await getPatByUsername(group_data.username);
    // console.log(group_data.username)
    // console.log(repoName)
    // console.log(pat)

    const usernameData = group_data.username;
    const repoNameData = repoName;
    const patData = pat
    // console.log("11111111111111")

    //get all the pull requests =>
      const allPrs = await fetchPullRequests(repoName); //(obj) => obj.number == pull number
    dispatch(addPrs(allPrs))
    // console.log("22222222222222222222")

    const fetchPromises = allPrs.map(pr => fetchTestCases(usernameData, repoNameData, patData, pr.number, pr.created_at, pr.title));
    
    let results = await Promise.all(fetchPromises);
    // console.log(allPrs[0].head.repo.full_name)
    results.repoFullName = allPrs[0].head.repo.full_name
    dispatch(addRepoPrs(results))

    // console.log("33333333333333333333333")

    setPullRequestWithTestCase_data(results)

    dispatch(gettingPrsRepoLoading("finish"))

    

  }

  async function fetchTestCases(usernameData, repoNameData, patData, prNumber, created_at, prTitle) {
    const pullRequests = await getPullsbySha(usernameData, repoNameData, patData, prNumber);
    // setPullRequest_data(pullRequests);
    // const data = await response.json();
    pullRequests.created_at_time = created_at;
    pullRequests.prTitle = prTitle;
    // pullRequests.repoFullName = repoFullName;
    return pullRequests;
  }

  const handleRepoDelete = async (repoId) => {


    const deletedRepo = await deleteRepoById(repoId); //"Repo has been deleted"
    dispatch(deleteRepo(repoId));
    console.log(deleteRepo)

  }
    
    
  return (
    <div className="flex pl-2 py-2 md:py-0 md:pl-0 border-b-[0.06rem] md:block md:bg-white md:text-black md:w-[20%] md:border-r-[0.06rem] border-[#D0D7DE] ">
      <div className="md:flex md:justify-between md:items-center md:border-b-[0.06rem] md:p-3 md:border-[#D0D7DE] md:mb-4 md:font-semibold">
        <div className="hidden md:block">{`${group_data.username} / ${group_data.name}`}</div>

        <div className="mr-2 md:mr-0">
          <RepoDialogBox/>

        </div>
      </div>

      <div className="overflow-x-auto whitespace-nowrap mr-11 md:m-2 flex md:flex-col gap-3 md:gap-2 scrollbar-hide">
        {repos_data && repos_data.map((field) => <div key={field.repoName} className="flex items-center gap-1 bg-[#EEF1F4] py-1 px-2 rounded-lg md:gap-3 cursor-pointer transition hover:bg-[#d8dbdd] md:border-[0.06rem] md:border-[#D0D7DE] md:bg-white md:rounded-md md:p-2 md:text-sm md:text-black md:hover:bg-[#F6F7F8] md:transition-colors md:duration-200 md:ease-in-out justify-between" >

        <div onClick={() => fetchPullBySha(field.repoName)} className="flex gap-1 items-center">
          <GoRepo/>
  
          <div>{field.repoName}</div>

        </div>
       
          <MdOutlineDeleteOutline onClick={() => handleRepoDelete(field._id)} className="text-red-600"/>
          
          </div>)}

      </div>
    </div>

  );
}
