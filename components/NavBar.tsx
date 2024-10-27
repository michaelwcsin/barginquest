import * as motion from "framer-motion/client"; // Server component
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <header className="w-full">
      <nav className="text-xl flex justify-between items-center px-10 py-4 bg-[#f5ebe0] font-bold tracking-tight">
        <div className="flex gap-5">
          <Link href="/">
            <motion.img
              src="navbar-hamburger.svg"
              width={30}
              height={30}
              alt="menu-selection"
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
            />
          </Link>

          <Link href="/" className="flex gap-1">
            <Image src="logo.svg" width={30} height={30} alt="logo" />
            <p>
              Bargain<span className="text-[#0077b6]">Quest</span>
            </p>
          </Link>
        </div>
        <p>Profile</p>
      </nav>
    </header>
  );
};

export default NavBar;
