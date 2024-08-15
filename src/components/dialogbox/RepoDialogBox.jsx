import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,

  } from "@/components/ui/dialog"
  import { FaRegSquarePlus } from "react-icons/fa6";
import { RepoGroupForm } from "../form/RepoGroupForm";
import { RepoForm } from "../form/RepoForm";
import { IoIosAdd } from "react-icons/io";
  
export default function RepoDialogBox({githubUsername}) {
  return (
    <Dialog>
        <DialogTrigger className="bg-[#F6F8FA] hover:bg-[#EEF1F4] text-[#636C76] p-[0.34rem] text-lg rounded-md border-[0.05rem] border-[#D0D7DE]"><IoIosAdd className="text-black"/></DialogTrigger>
        <DialogContent>
            <DialogHeader>
            <DialogTitle><span className="visually-hidden">sdfdf</span></DialogTitle>
            <DialogDescription>
            <span className="visually-hidden">sdfdf</span>
            </DialogDescription>
            <RepoForm/>
            </DialogHeader>
        </DialogContent>
    </Dialog>

  );
}
