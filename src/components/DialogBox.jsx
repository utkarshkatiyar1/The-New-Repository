import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,

  } from "@/components/ui/dialog"
  import { IoIosAdd } from "react-icons/io";
import { GithubAccountForm } from "./form/GithubAccountForm";
  
export default function DialogBox() {
  return (
  
      <Dialog>
        <DialogTrigger className="bg-[#F6F8FA] hover:bg-[#EEF1F4] text-[#636C76] p-[0.32rem] text-lg rounded-md border-[0.05rem] border-[#D0D7DE]"><IoIosAdd className="text-black"/></DialogTrigger>
        <DialogContent>
            <DialogHeader className="">
            <DialogTitle><span className="hidden">sdfdf</span></DialogTitle>
            <DialogDescription>
            <span className="hidden">sdfdf</span>
            </DialogDescription>
            <GithubAccountForm/>
            </DialogHeader>
        </DialogContent>
    </Dialog>


 
    
  );
}
