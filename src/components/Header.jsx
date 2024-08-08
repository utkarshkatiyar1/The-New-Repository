import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[#17252a]">
      <Link className="bg-red-600" href="/sign-up">Sign Up</Link>
      <Link className="bg-yellow-600" href="/sign-in">Sign In</Link>
      <UserButton />
    </div>
  );
}
