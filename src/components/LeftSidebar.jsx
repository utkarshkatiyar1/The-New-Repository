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
import { addGithubAccounts } from "@/app/GlobalRedux/githubAccounts/githubAccountSlice";
import { addRepoPrs } from "@/app/GlobalRedux/githubAccounts/prRepoSlice";
import { addPrs } from "@/app/GlobalRedux/githubAccounts/prSlice";
import RepoDialogBox from "./dialogbox/RepoDialogBox";
import getPullsbySha, { getPullRequests, getWorkflowRuns, getWorkflowRunsForPR } from "@/lib/actions/pull-request.action";
import { GoRepo } from "react-icons/go";
import { gettingPrsRepoLoading } from "@/app/GlobalRedux/githubAccounts/prRepoLoadingSlice";

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

    const fetchPromises = allPrs.map(pr => fetchTestCases(usernameData, repoNameData, patData, pr.number, pr.created_at));
    
    let results = await Promise.all(fetchPromises);
    // console.log(allPrs[0].head.repo.full_name)
    results.repoFullName = allPrs[0].head.repo.full_name
    dispatch(addRepoPrs(results))

    // console.log("33333333333333333333333")

    setPullRequestWithTestCase_data(results)

    dispatch(gettingPrsRepoLoading("finish"))

    

  }

  async function fetchTestCases(usernameData, repoNameData, patData, prNumber, created_at) {
    const pullRequests = await getPullsbySha(usernameData, repoNameData, patData, prNumber);
    // setPullRequest_data(pullRequests);
    // const data = await response.json();
    pullRequests.created_at_time = created_at;
    // pullRequests.repoFullName = repoFullName;
    return pullRequests;
  }
    
    
  return (
    <div className="bg-white text-balack w-[20%] border-t-[0.09rem] border-[#D0D7DE]">
      <div className="flex justify-between items-center border-b-[0.09rem] p-3 border-[#D0D7DE] mb-4 font-semibold">
        <div>{`${group_data.username} / ${group_data.name}`}</div>
        <RepoDialogBox/>
      </div>

      <div className="m-2 flex flex-col gap-2">
        {repos_data && repos_data.map((field) => <div key={field.repoName} className="flex items-center gap-3 cursor-pointer border-[0.06rem] border-[#D0D7DE] bg-white rounded-md p-2 text-sm text-black hover:bg-[#F6F7F8] transition-colors duration-200 ease-in-out" onClick={() => fetchPullBySha(field.repoName)}>


          <GoRepo/>
          <div>{field.repoName}</div>
          
          </div>)}

      </div>
    </div>

  );
}
