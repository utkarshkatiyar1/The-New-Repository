import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,

  } from "@/components/ui/dialog"
  import { IoIosAdd } from "react-icons/io";
import { RepoGroupForm } from "../form/RepoGroupForm";
  
export default function RepoGroupDialogBox({githubUsername}) {
  return (
    <Dialog>
        <DialogTrigger className="bg-[#F6F8FA] hover:bg-[#EEF1F4] text-[#636C76] p-[0.2rem] rounded-md border-[0.05rem] border-[#D0D7DE]"><IoIosAdd className="text-black"/></DialogTrigger>
        <DialogContent>
            <DialogHeader>
            <DialogTitle><span className="hidden">sdfdf</span></DialogTitle>
            <DialogDescription>
            <span className="hidden">sdfdf</span>
            </DialogDescription>
            <RepoGroupForm githubUsername={githubUsername}/>
            </DialogHeader>
        </DialogContent>
    </Dialog>

  );
}
