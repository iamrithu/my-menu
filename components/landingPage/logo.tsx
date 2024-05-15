import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link
      href={"#menu"}
      className="w-[200px] h-[50px] flex justify-center items-center "
    >
      <Image src={"/food.jpg"} alt="FOOD" width={50} height={50} />
      <p className="font-bold text-sm text-green-500">
        My <span className="text-black">Menu</span>
      </p>
    </Link>
  );
};

export default Logo;
