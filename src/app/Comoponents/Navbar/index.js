"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "../../../assests/logo.png";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-white-500 p-4">
        <div className="container mx-auto  flex justify-around items-center">
          <Link href="/">
            <Image src={Logo} alt="" />{" "}
          </Link>

          <ul className="flex space-x-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/About">About Us</Link>
            </li>
            <li>
              <Link href="/Services">Services</Link>
            </li>
            <li>
              <Link href="/Projects">Projects</Link>
            </li>
            <li>
              <Link href="/Blogs">Blogs</Link>
            </li>
            <li>
              <Link
                href="/Contact"
                className="bg-blue-800 text-white border-solid	"
              >
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
