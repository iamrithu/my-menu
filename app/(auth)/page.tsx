import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center relative">
      <div className="w-full h-[70px] absolute top-0 right-0 flex justify-between items-center px-40 bg-white/25">
        <div></div>
        <div className="text-black text-lg font-bold"> My Meals App</div>
        <Button asChild>
          <Link href={"/auth"}>Get Start..</Link>
        </Button>
      </div>
      <div className="ml-40  p w-2/6 font-bold text-white text-xl tracking-wider ">
        "Food is not just sustenance; it's a journey of flavors, textures, and
        cultures. It's a symphony of ingredients orchestrated to tantalize our
        taste buds and nourish our souls. From the delicate aroma of freshly
        baked bread to the robust spices of a sizzling curry, each dish tells a
        story of tradition, innovation, and craftsmanship. Food brings people
        together, forging connections and creating memories around the dinner
        table. It transcends borders, uniting us in our shared love for the
        culinary arts. So let
      </div>
    </div>
  );
}
