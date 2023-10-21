import React from "react";
import Select from "../Select/Select";
import Email from "./Auth/Email/Email";
import Google from "./Auth/Google/Google";
import Logout from "./Auth/Logout/Logout";
import Logo from "../Logo/Logo";

function Navbar() {
  return (
    <header className="w-screen bg-gray-300 dark:bg-gray-900 p-6 text-black dark:text-white flex items-center justify-between flex-wrap gap-10 ">
      <Logo />
      <nav className="flex gap-5">
        <Google />
        <Email />
        <Logout />
        <div>
          <Select />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
