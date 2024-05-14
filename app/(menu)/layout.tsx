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
    <main className="w-full h-full flex flex-row justify-center items-center">
      <div className="   relative flex flex-col md:w-full h-full bg-[url('/auth-bg.jpg')] bg-cover justify-center items-center ">
        {children}
      </div>
    </main>
  );
};

export default ProductedLayout;
