import { Link } from "react-router";
import Container from "../Container/Container";
import { FaFacebook, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../assets/logo.png"
import platStore from "../assets/play.png"
import appStore from "../assets/apps.png"

const Footer = () => {
    return (
        <div className="bg-[#001931] pt-8 px-2 md:px-0 ">
            <Container>
                {/*Footer discount section  */}
                <div className="bg-fuchsia-200 px-6 py-4 md:py-8 rounded-2xl">
                    <h2 className="text-center text-xl md:text-4xl font-bold">Get discounts instantly------</h2>
                    <p className="text-justify md:px-8 lg:px-72 lg:justify-center  py-4 ">To save you just have to log in to your account and look for the experiences with the green or yellow color code. On your first reservation you can enjoy a <span className="font-bold">10% discount.</span></p>

                    <div className="flex justify-center">
                        <input className="bg-white  rounded-l-full pl-6 py-2 md:w-[350px] lg:w-[550px]" type="text" placeholder="Enter your email" />
                        <input className="bg-gray-700 text-white px-2 md:px-6 py-2 rounded-r-full cursor-pointer hover:bg-gray-500 duration-500" type="submit" value="Get Start" />
                    </div>
                </div>

                {/* Footer items */}
                <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-white mt-8 md:mt-12 ">
                    <div>
                        <div className="flex gap-2 items-center">
                            <img className="h-[40px]" src={logo} alt="" />
                            <h2 className=" text-lg md:text-xl font-extrabold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">Hero Apps</h2>
                        </div>
                        <p className="text-sm text-gray-400 mt-3 pr-4">Don't worry, your account and look for the experiences with the green or yellow color code.</p>
                    </div>
                    <div>
                        <h3 className="md:text-xl lg:text-2xl underline font-semibold">Helps and Services</h3>
                        <div className="flex flex-col text-sm text-gray-400 space-y-2 mt-3">
                            <Link className="hover:text-gray-300 hover:underline">How does it work</Link>
                            <Link className="hover:text-gray-300 hover:underline">FAQS</Link>
                            <Link className="hover:text-gray-300 hover:underline">Contact</Link>
                        </div>
                    </div>
                    <div>
                        <h3 className="md:text-xl lg:text-2xl underline font-semibold">To explore</h3>
                        <div className="flex flex-col text-sm text-gray-400 space-y-2 mt-3">
                            <Link className="hover:text-gray-300 hover:underline">Our teams</Link>
                            <Link className="hover:text-gray-300 hover:underline">Experience</Link>
                            <Link className="hover:text-gray-300 hover:underline">Blog</Link>
                        </div>
                    </div>
                    <div>
                        <h3 className="underline md:text-xl lg:text-2xl font-semibold">Other possibilities</h3>
                        <div className="flex flex-col text-sm text-gray-400 space-y-2 mt-3">
                            <Link className="hover:text-gray-300 hover:underline">Give away</Link>
                            <Link className="hover:text-gray-300 hover:underline">Cash back</Link>
                            <Link className="hover:text-gray-300 hover:underline">Contact</Link>
                        </div>
                    </div>
                </div>

                {/* Apps store */}

                <div className="md:flex justify-between items-center text-white my-4">
                    <button className="outline px-6 py-2 rounded-full cursor-pointer mb-6 md:mb-0">Subscribe</button>

                    {/* Hero button */}
                    <div className="flex gap-4 md:gap-12 justify-center py-6 text-black">
                        <Link to="https://play.google.com" target="_blank" className="flex gap-2 items-center outline px-4 rounded py-2 cursor-pointer bg-white drop-shadow-2xl hover:bg-gray-500 hover:text-white duration-500">
                            <img src={platStore} />
                            Google Play
                        </Link>
                        <Link to="https://www.apple.com/app-store/" target="_blank" className="flex gap-2 items-center outline px-4 rounded py-2 cursor-pointer bg-white drop-shadow-2xl hover:bg-gray-500 hover:text-white duration-500">
                            <img src={appStore} />
                            Apps Store
                        </Link>
                    </div>
                </div>
                {/* social icon */}
                <div className="flex gap-8 md:gap-12 justify-center border-t-1 border-gray-500 text-white text-2xl py-4">
                    <Link><FaFacebook /></Link>
                    <Link><FaYoutube /></Link>
                    <Link><FaLinkedinIn /></Link>
                    <Link><FaXTwitter /></Link>

                </div>
            </Container>

            <div className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
                <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </div>
        </div>
    );
};

export default Footer;