import { Link, NavLink } from "react-router";
import Container from "../Container/Container";
import logo from "../assets/logo.png"
import { FaGithub } from "react-icons/fa";
import { RiMenu3Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { useState } from "react";


const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

    const Links = <>
        <NavLink>Home</NavLink>
        <NavLink>Apps</NavLink>
        <NavLink>Installation</NavLink>
    </>

    return (
        <div className="bg-[#FFFFFF] shadow relative">
            <Container>
                <div className="flex justify-between items-center px-2 md:px-0 py-4 ">
                    <div className="flex items-center gap-2">
                        <img className="h-[30px] md:h-[50px]" src={logo} alt="main-logo-img" />
                        <h1 className=" text-lg md:text-xl font-extrabold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                            HERO.IO
                        </h1>
                    </div>

                    {/* Mobile Menu */}
                    <div className="md:hidden text-2xl font-bold" onClick={() => setToggleMenu(!toggleMenu)}>
                        {
                            toggleMenu ? <IoClose /> : <RiMenu3Line />
                        }


                    </div>

                    <div className="hidden md:flex gap-6">
                        {Links}
                    </div>
                    <div className="hidden md:flex">
                        <button className="px-6 py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
                            <Link className="flex items-center gap-2" to="https://github.com/SazzadKhan45"><FaGithub /> Contribute</Link>
                        </button>
                    </div>
                </div>
            </Container>
            {/* Drop menu */}
            <div className="absolute right-0 text-center">
                <div className={`md:hidden flex flex-col space-y-3 bg-gray-600 p-4 rounded-b-lg text-white duration-700 ${toggleMenu ? 'block' : 'hidden'}`}>
                    {Links}
                    <button className="px-4 py-2 rounded-lg text-white font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
                        <Link className="flex items-center gap-2" to="https://github.com/SazzadKhan45"><FaGithub /> Contribute</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;