import { FaInstagram } from "react-icons/fa";
import FooterImage from "../public/footer.png";
import Link from "next/link";
import Imagem from "./globalComponents/image";

const footerItems = [
    {
        title: 'contact us',
        path: '/',
    },
    {
        title: 'faq',
        path: '/',
    },
    {
        title: 'site map',
        path: '/',
    },
    {
        title: 'privacy policy',
        path: '/',
    },
    {
        title: 'cookies policy',
        path: '/',
    },
    {
        title: 'legal notice',
        path: '/',
    },
]
const Footer = () => {
    return (
        <div>
            <div className="bg-[#389CD6] py-10 px-20">
                <div className="container flex flex-wrap justify-center items-center mx-auto">
                    <div className="justify-between items-center w-full md:flex md:w-auto md:order-1">
                        {navList(footerItems)}
                    </div>
                </div>
            </div>

            <div className="bg-[#389CD6] mx-auto pb-5 flex flex-row justify-around">
                <Imagem
                    imagePath={FooterImage}
                />
                    <div className="flex flex-row space-x-2">
                        <FaInstagram className="w-10 h-10 text-white" />
                    </div>
            </div>
        </div>
    );
};

function navList(options) {
    return (
        <ul className="flex flex-col md:flex-row md:space-x-20 md:mt-0 ">
            {(
                options.map((item, index) => {
                    return (

                        <li key={index}>
                            <Link href={item.path}>
                                <a
                                    href="#"
                                    className="py-2 pr-4 pl-3 text-white md:p-0 "
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
export default Footer;
