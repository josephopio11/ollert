import { siteConfig } from "@/config/site";
import Image from "next/image";

type AuthLayoutProps = {
  children: React.ReactNode;
};

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* <div className="h-full flex items-center justify-center">{children}</div> */}
      <div className="hidden w-1/2 bg-gray-900 lg:block">
        <div className="relative h-full w-full">
          <Image
            src="/auth.jpg"
            alt="Authentication background"
            width={1920}
            height={1080}
            className="absolute h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center flex-col space-y-4 justify-center p-10">
            <Image src="/myLogo.svg" alt="Ollert Logo" width={50} height={50} />
            <h1 className="text-4xl font-bold text-white">{siteConfig.name}</h1>
            <p className="text-white w-1/2 text-center">
              {siteConfig.description}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
