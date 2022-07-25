import { useState } from "react";
import { VscSearch } from "react-icons/vsc";
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import {
    BookmarkAltIcon,
    BriefcaseIcon,
    DesktopComputerIcon,
    GlobeAltIcon,
    InformationCircleIcon,
    NewspaperIcon,
    OfficeBuildingIcon,
    ShieldCheckIcon,
    UserGroupIcon,
} from '@heroicons/react/outline'
import Image from "next/image";
import Logo from "../public/logo.png";

const navOptions = [
    {
        title: "about us",
        subOptions: ['brand philosophy', 'product technology']
    },
    {
        title: "our products",
        subOptions: ['all products', 'intibiome wellness', 'intibiome active', 'intibiome agecare']
    },
    {
        title: "intimate health",
        subOptions: ['article 1', 'article 2', 'article 3', 'faq']
    },
    {
        title: "contact us",
    }
]

export default function NavBar() {
    const [navbar, setNavbar] = useState(false);

    return (
        <>
            <div className="bg-white">
                <div className="flex lg:flex-row justify-center items-center space-x-12 mx-auto lg:space-y-0 space-y-2">
                    <div className="hidden md:block">
                        <Image src={Logo} alt="Logo" />
                    </div>
                    <div className="hidden md:block md:ml-30">
                        <VscSearch />
                    </div>
                </div>
            </div>
            <nav className="w-full sm:bg-white lg:bg-[#389CD6] shadow">
                <div className="justify-between sm:justify-center sm:bg-[#389CD6] px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
                            <div className="md:hidden">
                                <button
                                    className="p-2 text-gray-700 rounded-md outline-none"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-gray-600"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-gray-600"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                            <a className="sm:hidden" href="javascript:void(0)">
                                <Image src={Logo} alt="Logo" />
                            </a>
                            <div className="sm:hidden">
                                <VscSearch color="#7B7070" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                                }`}
                        >
                            <div className="overflow-hidden  space-x-12">
                                {
                                    navOptions.map((item, index) => {
                                        return (
                                            <>
                                                <div key={index} className="group float-left overflow-hidden items-center">
                                                    <button className="border-0 outline-0 pr-3.5 px-3 bg-inherit text-white m-0 inline-flex items-center justify-center">{item.title}
                                                        {
                                                            item.subOptions && (
                                                                <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                                                </svg>
                                                            )
                                                        }
                                                    </button>
                                                    {item.subOptions && (
                                                        <div className="absolute hidden left-0 bg-[#9D8E8E] w-full z-10 space-x-12  pl-32 pb-3 pt-3  group-hover:block">
                                                            {item.subOptions.map((item, index) => {
                                                                return (<a key={index} className="float-left text-white no-underline hover:bg-[#eee]">{item}</a>)
                                                            })}

                                                        </div>
                                                    )
                                                    }
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}