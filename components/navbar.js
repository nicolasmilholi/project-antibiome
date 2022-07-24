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
                  className="py-2 pr-4 pl-3 text-white md:p-0 inline-flex items-center justify-center"
                  aria-current="page"
                >
                  {item.title}
                      <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
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

const navbarTeste = () => {
  return (
    <div>
      <div className="bg-gray-100 ">
        <div className="mx-auto lg:flex lg:flex-row justify-center items-center space-y-2  text-gray-500 w-full">
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
      <nav className="h-10 py-1.5 bg-[#389CD6]">
        <div className="flex flex-wrap justify-center items-center mx-auto">
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


export default navbarTeste;
