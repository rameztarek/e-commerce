import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SignedIn, SignedOut, SignUpButton, UserButton } from "@clerk/nextjs";
import SearchBar from "./SearchBar";
import { Bell, Home } from "lucide-react";
import ShoppingCartIcon from "../lists/ShoppingCartIcon";

const NavBar = () => {
  return (
    <nav className="w-full flex items-center justify-between border-b border-gray-200 pb-4  ">
      {/* LEFT */}
      <Link href="/" className="flex items-center ">
        <Image
          src="/products/logo.png"
          alt="logo"
          width={36}
          height={36}
          className="w-6 h-6 md:w-9 md:h-9"
        />
        <p className="text-md font-medium tracking-wider">TREND</p>
      </Link>
      {/* RIGHT */}
      <div className="flex items-center gap-6 ">
        <SearchBar />
        <Link href="/">
          <Home className=" w-4 h-4 text-gray-600" />
        </Link>
        <Bell className=" w-4 h-4 text-gray-600" />
        <ShoppingCartIcon />
        <SignedOut>
          <SignUpButton mode="redirect">
            <button
              type="button"
              className="text-sm text-gray-600 hover:text-black"
            >
              Sign up
            </button>
          </SignUpButton>
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default NavBar;
