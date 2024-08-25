import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,

  } from "@/components/ui/dialog"
  import { IoIosAdd, IoIosAddCircleOutline } from "react-icons/io";
import { RepoGroupForm } from "../form/RepoGroupForm";
  
export default function RepoGroupDialogBox({githubUsername}) {
  return (
    <Dialog>
        <DialogTrigger className="flex flex-row items-center rounded-lg p-1 text-green-600 gap-1 cursor-pointer hover:bg-[#EEF1F4] w-full">
          <IoIosAddCircleOutline/>
          <div>Add</div>
        </DialogTrigger>
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
