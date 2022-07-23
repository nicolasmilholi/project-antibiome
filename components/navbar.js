import Link from "next/link";
import Image from "next/image";
import Logo from "../public/logo.png";

import {
  VscSearch
} from "react-icons/vsc";

const navItems = [
  {
    title: 'About us',
    path: '/',
    subItems: []
  },
  {
    title: 'Our Products',
    path: '/',
    subItems: []
  },
  {
    title: 'Intimate Helth',
    path: '/',
    subItems: []
  },
  {
    title: 'Contact us',
    path: '/',
    subItems: []
  },
]
function navList(options) {
  return (
    <ul className="flex flex-col mt-4 md:flex-row md:space-x-20 md:mt-0  ">
      {(
        options.map((item, index) => {
          return (
            <li key={index}>
              <Link href={item.path}>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-white md:p-0 "
                  aria-current="page"
                >
                  {item.title}
                </a>
              </Link>
            </li>
          )
        })
      )
      }
    </ul>
  )
}

const navbar = () => {
  return (
    <div>
      {/**
       * HEADER GERAL
       */}
      <div className="bg-gray-100 ">
        <div className="container mx-auto lg:flex lg:flex-row justify-center items-center space-y-2  text-gray-500 w-full">
          <div className="lg:flex lg:flex-row flex flex-col justify-center items-center space-x-12 lg:space-y-0 space-y-2">
            <div className="flex flex-row space-x-2">
              <Image src={Logo} alt="Logo" />
            </div>
            <div className="flex flex-row space-x-10">
              <VscSearch />
            </div>
          </div>
        </div>
      </div>
      {/**
       * NAV BAR
       */}
      <nav className="h-10 py-1.5 bg-[#389CD6]">
        <div className="container flex flex-wrap justify-center items-center mx-auto">
          <div
            className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
            id="mobile-menu-4"
          >
            {navList(navItems)}
          </div>
        </div>
      </nav>
    </div>
  );
};
export default navbar;
