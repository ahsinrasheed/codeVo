"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assests/images/logo.png"; // Correct the asset path
import { useState } from "react"; // Import useState

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Initialize menu state

  // Function to toggle the menu state
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <nav className=" p-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-around items-center">
          <Link href="/">
            <Image src={Logo} alt="Logo" width={120} height={40} />
          </Link>

          <div className="md:hidden">
            {/* Mobile Menu Icon */}
            <button className="text-white" onClick={toggleMenu}>
              <svg
                className="text-black w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>

          <ul
            className={`${
              menuOpen ? "block" : "hidden"
            } md:flex space-x-4 md:space-x-4 `}
          >
            <li></li>
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
                className="bg-blue-800 text-white border-solid p-3 rounded"
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
