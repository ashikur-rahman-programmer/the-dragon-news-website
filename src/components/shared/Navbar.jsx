"use client";
import Image from "next/image";
import Link from "next/link";
import Avatar from "@/assets/user.png";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";
import { Spinner } from "@heroui/react";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  console.log(user);

  return (
    <div className="container mx-auto ">
      <div className="flex justify-between items-center gap-4 py-8">
        <div></div>

        <ul className="flex items-center justify-center gap-3.5 text-gray-600">
          <li>
            <NavLink href="/">Home</NavLink>
          </li>
          <li>
            <NavLink href="/about">About</NavLink>
          </li>
          <li>
            <NavLink href="/career">Career</NavLink>
          </li>
        </ul>

        {isPending ? (
          <Spinner color="success" />
        ) : user ? (
          <div className="flex justify-center items-center gap-3 ">
            <h2 className="text-gray-500 font-semibold">Hello, {user.name}!</h2>
            <Image
              src={user?.image || Avatar}
              alt="Profile Image"
              width={40}
              height={40}
              className="rounded-full"
            />

            <button
              onClick={async () => await authClient.signOut()}
              className=" py-2 px-4 bg-gray-700  text-white rounded-lg cursor-pointer"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex justify-center items-center gap-3 ">
            <Image
              src={Avatar}
              alt="Profile Image"
              width={40}
              height={40}
              className="rounded-full"
            />
            <Link href={"/login"}>
              <button className=" py-2 px-4 bg-gray-700  text-white rounded-lg cursor-pointer">
                Login
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
