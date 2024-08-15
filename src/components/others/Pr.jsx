"use client"
import { PiTestTubeFill } from "react-icons/pi";
import { PiTestTubeDuotone } from "react-icons/pi";
import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { getTimeDifference } from "@/lib/utils/time.util";

const Pr = ({pr}) => {

    // let borderColor = "red";
    // if(pr.total_count == 0) {
    //     borderColor = "green"
    // }

    const timeStamp = getTimeDifference(pr.created_at_time)
    const timeIntervel = timeStamp.days != 0 ? `${timeStamp.days} days ago` : timeStamp.hours != 0 ? `${timeStamp.hours} hours ago` : timeStamp.minutes != 0 ? `${timeStamp.minutes} minutes ago` : `${timeStamp.seconds} seconds ago`

    return <div className={`flex flex-col border-[0.07rem] ${pr.total_count == 0 ? "border-green-600 bg-green-100" : "border-red-600 bg-red-50"} rounded-lg`}>

        <div className="flex items-center justify-between">
            <div className="flex gap-2 items-center">
                <span className="ml-3 my-4 px-[0.47rem] py-[0.3rem] text-white text-sm rounded-lg bg-[#1F883D]">Open</span>
                <span className="text-xs text-[#a3a4a7]">{timeIntervel}</span>

            </div>
            <span className="text-sm mr-3 my-4 px-[0.47rem] py-[0.3rem] bg-[#F6F8FA] hover:bg-[#EEF1F4] text-[#636C76] rounded-lg p-2 border-[0.05rem] border-[#D0D7DE] cursor-pointer">Merge</span>

        </div>

            <div className="">
                {pr.workflow_runs.map((obj) =><div className="flex gap-2 items-center rounded-br-lg rounded-bl-lg bg-[#F6F8FA] p-1 border-t-[0.07rem] border-[#D0D7DE]">
                    <div className="flex gap-2 items-center ml-2">
                        {obj.conclusion == "success" ? <FaCheck className="text-green-600"/> : <RxCross2 className="text-red-600 text-[17px]"/>}
                        <PiTestTubeDuotone/>
                        <div className="text-[0.75rem]">{obj.name}</div>
                    </div>

                </div>)}


            </div>


        </div>
    

}


export default Pr;