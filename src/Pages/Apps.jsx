import { useState } from "react";
import AppsCard from "../Components/AppsCard";
import Container from "../Container/Container";
import useHeroApps from "../CustomHooks/useHeroApps";
import notApps from "../assets/App-Error.png"
import { Link } from "react-router";


const Apps = () => {
    const { appsData } = useHeroApps();
    const [searchApp, setSearchApps] = useState('');

    const searchWord = searchApp.trim().toLowerCase();

    const searchApps = searchWord ? appsData.filter(apps => apps.title.toLowerCase().includes(searchWord)) : appsData;


    // console.log(appsData);
    return (
        <div className='bg-[#f1f1f1] pb-16'>
            <Container>
                <div className="text-center pt-8">
                    <h2 className=" text-2xl md:text-3xl font-bold pb-2">Our All Applications</h2>
                    <p className="text-gray-600">Explore All Apps on the Market developed by us. We code for Millions</p>
                </div>

                <div className="flex justify-between items-center mt-6">
                    <h2 className="text-xl font-medium">({searchApps.length}) Apps Found</h2>
                    <label className="input">

                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>

                        <input
                            value={searchApp}
                            onChange={e => setSearchApps(e.target.value)}
                            type="search"
                            required placeholder="Search" />
                    </label>
                </div>

                {/* dynamic data load */}
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-8 pt-4 px-2 md:px-0'>
                    {searchApps.length > 0 ? (
                        searchApps.map(app => (
                            <AppsCard key={app.id} app={app} />
                        ))
                    ) : (
                        <div className="col-span-full flex justify-center items-center py-12">
                            <div>
                                <img className="mx-auto" src={notApps} />
                                <div className="text-center">
                                    <h2 className="text-gray-500 text-3xl font-medium py-6">OPPS!! APP NOT FOUND</h2>
                                    <p className="text-gray-500 mb-6">The App you are requesting is not found on our system.  please try another apps</p>
                                    <Link className="px-6 py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] " to="/">Go Back!</Link>
                                </div>

                            </div>
                        </div>
                    )}
                </div>
            </Container>
        </div>
    );
};

export default Apps;