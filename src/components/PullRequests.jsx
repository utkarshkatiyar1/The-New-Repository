"use client"

import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { ClipLoader } from 'react-spinners';
import Pr from "./others/Pr";



export default function PullRequests() {

    const [allPrs_data, setAllPrs_data] = useState([]);
    const [prRepoLoading_data, setPrRepoLoading_data] = useState([]);
    console.log(allPrs_data)


    const allRepoPrs = useSelector((state) => state.prRepoData.prs);
    const allPrs = useSelector((state) => state.prData.prs);
    const prRepoLoading = useSelector((state) => state.prRepoLoadingData.prRepoLoading);
    console.log(prRepoLoading)
    // setPrRepoLoading_data(prRepoLoading)

    useEffect(() => {
        setAllPrs_data(allRepoPrs);
    }, [allRepoPrs])

    useEffect(() => {
        setPrRepoLoading_data(prRepoLoading)
        
    }, [prRepoLoading])


   

  return (
    <div className="flex flex-col gap-6 p-4 border-r-[0.09rem] border-t-[0.09rem] border-l-[0.09rem] border-[#D0D7DE] bg-white w-[80%] md:w-[60%]">
        <div className="mt-4">
            <span className=" text-[#24292F] text-lg font-[500] border-[0.07rem] px-[0.7rem] py-[0.5rem] bg-[#EEF1F4] rounded-lg p-2  border-[#D0D7DE]">{allPrs[0].head.repo.full_name}</span>

        </div>

        <div className="flex items-center justify-center">
            {prRepoLoading_data == "finish" ? <div className="flex flex-col gap-8 w-full">{allPrs_data.map((obj) => <Pr pr={obj}/>)}</div> : prRepoLoading_data == "start" ? <ClipLoader className="" color="#000991" size={50} /> :  <div></div>}

        </div>


        

        
        

     
    </div>

  );
}
