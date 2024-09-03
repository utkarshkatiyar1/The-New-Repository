import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,

  } from "@/components/ui/dialog"
  import { FaRegSquarePlus } from "react-icons/fa6";

// import { RepoForm } from "../form/RepoForm";
import { IoIosAdd } from "react-icons/io";
import { PostListForm } from "../form/PostListForm";
  
export default function PostListDialogBox() {
  return (
    <Dialog>
        <DialogTrigger className="">Post</DialogTrigger>
        <DialogContent>
            <DialogHeader>
            <DialogTitle><span className="visually-hidden">sdfdf</span></DialogTitle>
            <DialogDescription>
            <span className="visually-hidden">sdfdf</span>
            </DialogDescription>
            <PostListForm/>
            </DialogHeader>
        </DialogContent>
    </Dialog>

  );
}
