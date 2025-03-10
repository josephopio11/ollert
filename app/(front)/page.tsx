import { Button } from "@/components/ui/button";
import { Medal } from "lucide-react";
import Link from "next/link";

export default function MarketingPage() {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex items-center justify-center flex-col">
        <div className="mb-4 items-center flex border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
          <Medal className="size-6 mr-2" />
          No 1 task management
        </div>
        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6 font-bold">
          Ollert helps teams move
        </h1>
        <div className="text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded-md pb-4 w-fit font-bold">
          work forward
        </div>
      </div>
      <div className="text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto">
        Collaborate, manage projects, and reach new productivity peaks. From
        agile sprints to internal projects, get more done with Ollert.
      </div>
      <Button className="mt-6 " size={"lg"} asChild>
        <Link href="/register">Get started for free</Link>
      </Button>
    </div>
  );
}
