"use client"
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import DialogBox from "./DialogBox";
import { GithubAccountForm } from "./form/GithubAccountForm";
import { deleteGithubAccount, getAllGithubAccountByClerkId } from "@/lib/actions/github-account.action";
import { RepoGroupForm } from "./form/RepoGroupForm";
import RepoGroupDialogBox from "./dialogbox/RepoGroupDialogBox";
import { getAllRepoGroupByGithubUsername } from "@/lib/actions/repo-group.action";
import { getAllRepoByGithubUsername_GroupName } from "@/lib/actions/repo.action";
import { useDispatch, useSelector } from "react-redux";
import { addRepos, deleteReposByGroupAndUsername } from "@/app/GlobalRedux/githubAccounts/repoSlice";
import { addGroup, deleteGroupAndRepos } from "@/app/GlobalRedux/githubAccounts/groupSlice";
import { RiGitRepositoryLine } from "react-icons/ri";
import { AiOutlineGithub } from "react-icons/ai";
import { FaLayerGroup } from "react-icons/fa6";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { FiEdit3 } from "react-icons/fi";
import { IoIosAddCircleOutline } from "react-icons/io";
import Grp from "./others/Grp";
import { removeGithubAccount } from "@/app/GlobalRedux/githubAccounts/githubAccountSlice";
import { clearRepoPrsFromStore } from "@/app/GlobalRedux/githubAccounts/prRepoSlice";
// import { useRouter } from "next/router";
// import { Router } from "next/router";

export default function RepoGroup({account}) {
    const [allRepoGroup, setAllRepoGroup] = useState([])
    const [showGroups, setShowGroups] = useState(false);
    const [showOptions, setShowOptions] = useState(false);
    const [showGroupOptions, setShowGroupOptions] = useState(false);
    const [allRepo, setAllRepo] = useState([]);
    const dispatch = useDispatch();
    const dialogRef = useRef(null);
    const dialogGroupRef = useRef(null);

    // Close the dialog when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target)) {
        setShowOptions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dialogRef]);

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (dialogGroupRef.current && !dialogGroupRef.current.contains(event.target)) {
  //       setShowGroupOptions(false);
  //     }
  //   };
  //   document.addEventListener('mousedown', handleClickOutside);
  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   };
  // }, [dialogGroupRef]);

    // console.log(allRepoGroup)

    const getAllRepoGroupByUsername = async () => {
      
            const allRepoGroupData = await getAllRepoGroupByGithubUsername(account.username);
          // const parsedObject = JSON.parse(JSON.stringify(allGithubAccountsData));
          setAllRepoGroup(allRepoGroupData)
          console.log(allRepoGroupData)

        
      setShowGroups(!showGroups)
    }

    // const getAllRepo = async (groupName) => {
      
    //   const repoData = await getAllRepoByGithubUsername_GroupName(groupName, account.username);

    //   dispatch(addGroup({name: groupName, username: account.username}))
    //   if(repoData) {
    //     dispatch(addRepos(repoData))
    //     setAllRepo(repoData);
    //   }
    // }

    const handleDeleteGithubAccount = async () => {

      const deletedGithubAccount = await deleteGithubAccount(account.username);
      console.log(deletedGithubAccount)
      dispatch(removeGithubAccount(account.username))
      dispatch(deleteGroupAndRepos())
      dispatch(clearRepoPrsFromStore())
      dispatch(deleteReposByGroupAndUsername())
    }

  return (
    <div>

        <div className={`group relative text-[#474B4F] border-none ${showOptions && "bg-[#F7F8F9]"} hover:bg-[#F7F8F9] flex justify-between p-2 rounded-md ml-2 mr-2`}>

          <div className="flex items-center gap-2 hover:text-[#0969DA] text-[#636C76] ">
            <AiOutlineGithub className=""/>
        
            <div className="cursor-pointer text-sm hover:underline truncate w-[7rem] mr-4 md:w-auto" onClick={getAllRepoGroupByUsername}>{account.username}</div>

          </div>
          <PiDotsThreeVerticalBold onClick={() => setShowOptions(!showOptions)} className={`inner ${showOptions ? "opacity-100" : "opacity-0"} opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer`}/>

          <div ref={dialogRef} className={`flex flex-col gap-2 z-50 p-2 text-[0.8rem] bg-white shadow-[0_0_10px_rgba(0,0,0,0.10)] rounded-lg absolute top-6 right-3 ${showOptions ? "block" : "hidden"} text-black border-[0.03rem]`}>
            
          
              <div className=" hover:text-[#636C76] w-full"><RepoGroupDialogBox githubUsername={account.username}/></div>
           

            <div className="flex flex-row items-center rounded-lg p-1 gap-1 cursor-pointer text-yellow-600 hover:bg-[#EEF1F4] w-full">
              <FiEdit3/>
              <div>Edit</div>
            </div>

            <div onClick={handleDeleteGithubAccount} className="flex flex-row hover:bg-[#EEF1F4] items-center rounded-lg p-1 gap-1 cursor-pointer text-red-600 w-full">
              <MdOutlineDeleteOutline/>
              <div className="">Delete</div>
            </div>

          </div>
        </div>

        {<div className={`${showGroups ? "block" : "hidden"} flex ml-8 text-black flex-col gap-1 mt-1`}>{allRepoGroup.map((group, index) => <Grp key={index} githubAccount={account.username} groupName={group.groupName}/>       
        
        )}
          </div>}

    </div>

  );
}
