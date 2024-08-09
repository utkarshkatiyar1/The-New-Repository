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
  
export default function RepoDialogBox({githubUsername}) {
  return (
    <Dialog>
        <DialogTrigger><FaRegSquarePlus/></DialogTrigger>
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
