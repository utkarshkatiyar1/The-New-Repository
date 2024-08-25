"use client"
import { addGroup, deleteGroupAndRepos } from '@/app/GlobalRedux/githubAccounts/groupSlice';
import { addRepos, deleteReposByGroupAndUsername } from '@/app/GlobalRedux/githubAccounts/repoSlice';
import { deleteRepoGroupAndAssociatedRepos } from '@/lib/actions/repo-group.action';
import { getAllRepoByGithubUsername_GroupName } from '@/lib/actions/repo.action';
import { useEffect, useRef, useState } from 'react';
import { FaLayerGroup } from 'react-icons/fa6';
import { FiEdit3 } from 'react-icons/fi';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import { PiDotsThreeVerticalBold } from 'react-icons/pi';
import { useDispatch } from 'react-redux';


export default function Grp({groupName, githubAccount}) {
    const dispatch = useDispatch();
    const [showGroupOptions, setShowGroupOptions] = useState(false);
    const dialogGroupRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
          if (dialogGroupRef.current && !dialogGroupRef.current.contains(event.target)) {
            setShowGroupOptions(false);
          }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, [dialogGroupRef]);
  
    const getAllRepo = async (groupName) => {
      
        const repoData = await getAllRepoByGithubUsername_GroupName(groupName, githubAccount);

        
  
        dispatch(addGroup({name: groupName, username: githubAccount}))
        if(repoData) {
          dispatch(addRepos(repoData))
        
        }
      }

      const handleDeleteGroup  = async () => {

        const result = await deleteRepoGroupAndAssociatedRepos(groupName, githubAccount)
        console.log(result);
        dispatch(deleteGroupAndRepos())
        dispatch(deleteReposByGroupAndUsername())




      }

  return (

   
    <div  className="group flex items-center gap-2 cursor-pointer pl-1 text-[12.16px] p-1 text-[#a3a4a7] hover:text-[#656568] justify-between group relative hover:bg-[#F7F8F9] rounded-md">
          <div onClick={() => getAllRepo(groupName)} className="flex flex-row gap-1 items-center">
            <FaLayerGroup/>
            <div>{groupName}</div>

          </div>
          <PiDotsThreeVerticalBold onClick={() => setShowGroupOptions(!showGroupOptions)} className={`inner ${showGroupOptions ? "opacity-100" : "opacity-0"} opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer mr-2 `}/>

            <div ref={dialogGroupRef} className={`flex flex-col gap-2 z-50 p-2 text-[0.8rem] bg-white shadow-[0_0_10px_rgba(0,0,0,0.10)] rounded-lg absolute top-6 right-3 ${showGroupOptions ? "block" : "hidden"} text-black border-[0.03rem]`}>

              <div className="flex flex-row items-center rounded-lg p-1 gap-1 cursor-pointer text-yellow-600 hover:bg-[#EEF1F4] w-full">
                <FiEdit3/>
                <div>Edit</div>
              </div>

              <div onClick={handleDeleteGroup} className="flex flex-row hover:bg-[#EEF1F4] items-center rounded-lg p-1 gap-1 cursor-pointer text-red-600 w-full">
                <MdOutlineDeleteOutline/>
                <div className="">Delete</div>
              </div>

            </div>
          </div>
  );
}

