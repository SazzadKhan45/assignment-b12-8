import Container from "../Container/Container";
import platStore from "../assets/play.png"
import appStore from "../assets/apps.png"
import heroLogo from "../assets/hero.png"
import { Link } from "react-router";

const HeroBanner = () => {
    return (
        <div >
            <Container>
                <div className="px-2 md:px-0">
                    <div className="text-center pt-16">
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-2">We Build</h1>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold"><span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">Productive</span> Apps</h1>
                        <p className="text-gray-600 py-6 lg:px-72">At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                    </div>

                    {/* Hero button */}
                    <div className="flex gap-4 md:gap-12 justify-center py-6">
                        <Link to="https://play.google.com" target="_blank"  className="flex gap-2 items-center outline px-4 rounded py-2 cursor-pointer bg-white drop-shadow-2xl hover:bg-gray-500 hover:text-white duration-500">
                            <img src={platStore} />
                            Google Play
                        </Link>
                        <Link to="https://www.apple.com/app-store/" target="_blank" className="flex gap-2 items-center outline px-4 rounded py-2 cursor-pointer bg-white drop-shadow-2xl hover:bg-gray-500 hover:text-white duration-500">
                            <img src={appStore} />
                            Apps Store
                        </Link>
                    </div>
                    {/* Hero image */}
                    <div className="flex justify-center mt-8">
                        <img src={heroLogo} alt="Hero-logo-img" />
                    </div>
                </div>
            </Container>

            {/* gradient bg info */}
            <div className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] py-8 text-white text-center px-2 md:px-0">
                <Container>
                    <h2 className="text-xl md:text-4xl lg:text-5xl font-bold">Trusted by Millions, Built for You</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 py-8 space-y-8 md:space-y-0">
                        <div>
                            <p className="text-gray-300">Total Downloads</p>
                            <h1 className="text-3xl md:text-5xl font-bold py-4">29.6M</h1>
                            <p className="text-gray-300">21% more than last month</p>
                        </div>
                        <div>
                            <p className="text-gray-300">Total Reviews</p>
                            <h1 className="text-3xl md:text-5xl font-bold py-4">906K</h1>
                            <p className="text-gray-300">46% more than last month</p>
                        </div>
                        <div>
                            <p className="text-gray-300">Active Apps</p>
                            <h1 className="text-3xl md:text-5xl font-bold py-4">132+</h1>
                            <p className="text-gray-300">31 more will Launch</p>
                        </div>
                    </div>

                </Container>

            </div>
            {/* Trending Apps */}
            <div className='text-center py-12'>
                <h2 className='text-2xl font-bold md:text-4xl lg:text-5xl'>Trending Apps</h2>
                <p className='text-gray-600 py-4'>Explore All Trending Apps on the Market developed by us</p>
            </div>

        </div>
    );
};

export default HeroBanner;