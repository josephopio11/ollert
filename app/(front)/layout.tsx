import Footer from "@/components/shared/footer";
import SiteNavbar from "@/components/shared/navbar";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full bg-slate-100">
      <SiteNavbar />
      <main className="pt-40 pb-20 bg-slate-100">{children}</main>
      <Footer />
    </div>
  );
};

export default MarketingLayout;
