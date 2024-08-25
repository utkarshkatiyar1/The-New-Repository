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
import { addGithubAccounts, clearGithubAccountsFromStore } from "@/app/GlobalRedux/githubAccounts/githubAccountSlice";
import { RxHamburgerMenu } from "react-icons/rx";

import { IoIosArrowRoundForward } from "react-icons/io";




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


  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!open);

  }
 
    
  return (
    <div className={`md:w-[20%] h-full md:h-auto md:min-h-screen absolute md:static right-0 md:right-auto  bg-white`}>

      <button className={` block md:hidden absolute ${open ? "right-30 w-full text-[1.5rem]" : "right-0 mt-3 text-[1.5rem]"}  mr-2 top-0 `} onClick={handleToggle}>{open ? <IoIosArrowRoundForward/> : <RxHamburgerMenu/>}</button>


 
    <div className={`shadow-left mt-3 md:mt-0 w-full gap-1 border-[#D0D7DE] min-h-screen md:h-full md:border-l-[0.06rem] ${open ? "block" : "hidden md:block"}`}>
      <div className="flex justify-between items-center p-3 border-b-[0.06rem] border-[#D0D7DE] mb-2  w-full">
        <div className="text-[#24292F] font-bold md:text-xl">Github Accounts</div>
        <div className="text-white"><DialogBox/></div>
      </div>

      <div className="flex flex-col">
        {allGithubAccounts.map((account, index) => <RepoGroup key={index} account={account}/>)}
      </div>

    
    
    </div>
    </div>

  );
}
