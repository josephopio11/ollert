import {
  OrganizationSwitcher,
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "../ui/button";
import SiteLogo from "./logo";

const SiteNavbar = () => {
  return (
    <div className="fixed top-0 w-full h-14 px-4 border-b shadow-sm bg-white flex items-center">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <SiteLogo />
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
          <SignedOut>
            <Button variant="outline" asChild size="sm">
              <SignInButton />
            </Button>
            <Button asChild size="sm">
              <SignUpButton>Get Ollert for free</SignUpButton>
            </Button>
          </SignedOut>
          <SignedIn>
            <OrganizationSwitcher />
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </div>
  );
};

export default SiteNavbar;
