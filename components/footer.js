import { FaInstagram } from "react-icons/fa";
import FooterImage from "../public/footer.png";
import Imagem from "./globalComponents/image";

const Footer = () => {
    return (
        <>
            <div className="bg-[#389CD6] sm:px-6 sm:pt-10 lg:px-8">
                <div className="flex flex-col sm:flex-row bg-[#389CD6] sm:px-6 items-center justify-center sm:space-x-5 text-white">
                    <a>contact us</a>
                    <div className="h-4 sm:w-px mt-0 sm:mt-1 bg-white"></div>
                    <div className="-mt-5 pb-3 text-bold sm:hidden">__</div>
                    <a>faq</a>
                    <div className="h-4 sm:w-px mt-0 sm:mt-1 bg-white"></div>
                    <div className="-mt-5 pb-3 text-bold sm:hidden">__</div>
                    <a>site map</a>
                    <div className="h-4 sm:w-px mt-0 sm:mt-1 bg-white"></div>
                    <div className="-mt-5 pb-3 text-bold sm:hidden">__</div>
                    <a>privacy policy</a>
                    <div className="h-4 sm:w-px mt-0 sm:mt-1 bg-white"></div>
                    <div className="-mt-5 pb-3 text-bold sm:hidden">__</div>
                    <a>cookies policy</a>
                    <div className="h-4 sm:w-px mt-0 sm:mt-1 bg-white"></div>
                    <div className="-mt-5 pb-3 text-bold sm:hidden">__</div>
                    <a>legal notice</a>
                </div>
            </div>
            <div className="bg-[#389CD6] py-10 flex flex-col-reverse items-center sm:flex-row sm:justify-around">
                <Imagem
                    imagePath={FooterImage}
                    imageMobile={FooterImage}
                />
                <div className="flex flex-col sm:flex-row space-x-2">
                    <FaInstagram className="w-10 h-10 text-white" />
                </div>
            </div>
        </>
    );
};
export default Footer;
