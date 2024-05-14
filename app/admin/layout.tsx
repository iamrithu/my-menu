import SideBar from "@/components/sidebar";
import TopBar from "@/components/topBar";
import type { Metadata } from "next";

interface ProductedLayoutProps {
  children: React.ReactNode;
}
export const metadata: Metadata = {
  title: "Menus",
  description: "",
};

const ProductedLayout = ({ children }: ProductedLayoutProps) => {
  return (
    <main className="w-full h-full flex flex-row items-center justify-center">
      <SideBar />
      <div className="flex-1 h-full">
        <div className="w-full h-full m-0 p-0 bg-blue-50">
          <TopBar />
          <div className="w-full h-[calc(100vh-4rem)]  shadow-sm">
            {children}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductedLayout;
