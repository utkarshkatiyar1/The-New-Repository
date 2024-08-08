import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,

  } from "@/components/ui/dialog"
  import { FaRegSquarePlus } from "react-icons/fa6";
import { GithubAccountForm } from "../form/GithubAccountForm";
import { RepoGroupForm } from "../form/RepoGroupForm";
  
export default function RepoGroupDialogBox({githubUsername}) {
  return (
    <Dialog>
        <DialogTrigger><FaRegSquarePlus/></DialogTrigger>
        <DialogContent>
            <DialogHeader>
            <DialogTitle><span className="visually-hidden">sdfdf</span></DialogTitle>
            <DialogDescription>
            <span className="visually-hidden">sdfdf</span>
            </DialogDescription>
            <RepoGroupForm githubUsername={githubUsername}/>
            </DialogHeader>
        </DialogContent>
    </Dialog>

  );
}
