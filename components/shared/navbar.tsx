import Link from "next/link";
import { Button } from "../ui/button";
import SiteLogo from "./logo";

const SiteNavbar = () => {
  return (
    <div className="fixed top-0 w-full h-14 px-4 border-b shadow-sm bg-white flex items-center">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <SiteLogo />
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
          <Button variant="outline" asChild size="sm">
            <Link href="/sign-in">Sign in</Link>
          </Button>
          <Button asChild size="sm">
            <Link href="/sign-up">Get Ollert for Free</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SiteNavbar;
