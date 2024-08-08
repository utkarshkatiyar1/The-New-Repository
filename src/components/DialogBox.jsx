import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,

  } from "@/components/ui/dialog"
  import { FaRegSquarePlus } from "react-icons/fa6";
import { GithubAccountForm } from "./form/GithubAccountForm";
  
export default function DialogBox() {
  return (
    <Dialog>
        <DialogTrigger><FaRegSquarePlus/></DialogTrigger>
        <DialogContent>
            <DialogHeader>
            <DialogTitle><span className="visually-hidden">sdfdf</span></DialogTitle>
            <DialogDescription>
            <span className="visually-hidden">sdfdf</span>
            </DialogDescription>
            <GithubAccountForm/>
            </DialogHeader>
        </DialogContent>
    </Dialog>

  );
}
