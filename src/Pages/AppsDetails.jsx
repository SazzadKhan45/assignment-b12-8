import { useParams } from "react-router";
import useHeroApps from "../CustomHooks/useHeroApps";
import Container from "../Container/Container";
import ReviewsImg from "../assets/icon-review.png"
import downloadImg from "../assets/icon-downloads.png"
import starImg from "../assets/icon-ratings.png"
import { toast } from "react-toastify";
import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, } from "recharts";
import DynamicPageError from "./DynamicPageError";


const AppsDetails = () => {

    const [install, setInstall] = useState(false);
    const { id } = useParams();
    const { appsData } = useHeroApps();

    const singleApp = appsData.find(app => app.id === parseInt(id));

    if (!singleApp) {
        return < DynamicPageError />;
    }

    if (!singleApp) {
        return (
            <div className="bg-[#f1f1f1] py-8">
                <Container>
                    <div className="col-span-full flex justify-center items-center py-12">
                        <div className="flex flex-col items-center">
                            <div className="w-12 h-12 border-4 border-purple-400 border-t-transparent rounded-full animate-spin"></div>
                            <p className="text-gray-500 mt-4">Loading apps...</p>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }

    const { image, title, description, downloads, ratingAvg, reviews, size, ratings } = singleApp;

    const reChartInfo = [...ratings].sort((a, b) => parseInt(b.name) - parseInt(a.name));
    

    // console.log(singleApp)

    const handleAppsAddLocalStorage = () => {

        const appsListToAdd = JSON.parse(localStorage.getItem('appsList'));
        let updateAppsList = [];

        if (appsListToAdd) {

            const isDuplicate = appsListToAdd.some(app => app.id === singleApp.id);

            if (isDuplicate) {
                toast('Apps Already Installed')
                setInstall(true)
                return;
            }
            updateAppsList = [...appsListToAdd, singleApp];
        }
        else {
            updateAppsList.push(singleApp);
        }
        toast('Apps Installing...')

        localStorage.setItem('appsList', JSON.stringify(updateAppsList));
        setInstall(true);
    };



    return (
        <div className="bg-[#f1f1f1] py-8 px-2 md:px-0">
            <Container>
                <div>
                    <div className="md:flex gap-12 border-b-2 border-gray-300 pb-4">
                        <div className="bg-white p-4 rounded-lg">
                            <img className="h-[250px] w-full border-2 border-gray-300 rounded-lg" src={image} alt={title} />
                        </div>
                        <div>
                            <div>
                                <h2 className="text-xl font-bold">{title}</h2>
                                <p className="text-gray-500">Developed by <span className="font-extrabold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">productive.io</span></p>
                            </div>
                            <div className="divider "></div>
                            <div className="flex gap-4 md:gap-8 lg:gap-24">
                                <div className="space-y-1">
                                    <img src={downloadImg} />
                                    <p className="text-gray-500">Downloads</p>
                                    <h2 className="text-3xl font-bold">{downloads / 100000}M</h2>
                                </div>
                                <div className="space-y-1">
                                    <img src={starImg} />
                                    <p className="text-gray-500">Average Ratings</p>
                                    <h2 className="text-3xl font-bold">{ratingAvg}</h2>
                                </div>
                                <div className="space-y-1">
                                    <img src={ReviewsImg} />
                                    <p className="text-gray-500">Total Reviews</p>
                                    <h2 className="text-3xl font-bold">{reviews / 1000}K</h2>
                                </div>
                            </div>


                            {/* Apps add to localstorage btn */}
                            <button onClick={() => handleAppsAddLocalStorage()} className={` text-white font-medium px-4 md:px-8 py-1.5 rounded-lg cursor-pointer mt-6 ${install ? 'bg-gray-400':'bg-[#00d390]'}`}>
                                {
                                    install ? 'Installed' : `Install Now (${size}) MB`
                                }
                            </button>

                        </div>
                    </div>

                    {/* Rechart design */}
                    <div className="py-6">
                        <div className="w-full h-64 bg-gray-50 p-4 rounded-xl shadow pb-8">
                            <h2 className="font-semibold mb-4">Ratings</h2>
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart
                                    data={reChartInfo}
                                    layout="vertical"
                                    margin={{ top: 10, right: 20, left: 20, bottom: 10 }}
                                >
                                    <CartesianGrid horizontal={false} strokeDasharray="3 3" />
                                    <XAxis type="number" />
                                    <YAxis
                                        dataKey="name"
                                        type="category"
                                        tick={{ fontSize: 12 }}
                                        width={70}
                                    />
                                    <Tooltip />
                                    <Bar dataKey="count" fill="#ff9100" radius={[0, 6, 6, 0]} barSize={20} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                    <div className="mt-6">
                        <h2 className="text-2xl font-semibold underline">Apps Details</h2>
                        <p className="text-gray-600 text-justify mt-2">{description}</p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default AppsDetails;
