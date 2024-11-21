import { siteConfig } from "@/config/site";
import Image from "next/image";
import Link from "next/link";

const SiteLogo = () => {
  return (
    <Link href="/">
      <div className="hover:opacity-75 transition items-center align-middle gap-x-2 hidden md:flex">
        <Image src="/myLogo.svg" width={30} height={30} alt="Ollert Logo" />
        <p className="text-lg text-neutral-700 pb-1 font-bold">
          {siteConfig.name}
        </p>
      </div>
    </Link>
  );
};

export default SiteLogo;
