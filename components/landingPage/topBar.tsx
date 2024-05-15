import React from "react";
import Logo from "./logo";
import Profile from "./profile";
import Menu from "./menu";
import Nav from "./nav";

const TopBar = () => {
  return (
    <div className="w-full h-[50px]  m-1   flex flex-row justify-between items-center shadow-sm ">
      {/* LOG */}
      <Logo />
      {/* NAV ITEM */}
      <Nav />
      <div className="flex justify-center items-center">
        {/* MENU FOR MOBILE */}
        <Menu />
        {/* PROFILE */}
        <Profile />
      </div>
    </div>
  );
};

export default TopBar;
