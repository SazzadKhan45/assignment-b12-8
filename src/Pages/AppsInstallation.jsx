import { useEffect, useState } from "react";
import Container from "../Container/Container";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { toast } from "react-toastify";


const AppsInstallation = () => {

    const [appsList, setAppsList] = useState([]);
    const [sortAppsSize, setSortAppsSize] = useState("None")

    useEffect(() => {
        const saveAppsList = JSON.parse(localStorage.getItem('appsList'));
        if (saveAppsList) {
            setAppsList(saveAppsList);
        }
    }, []);

    // sort function
    const sortApps = (() => {
        if (sortAppsSize === "Size-asc") {
            return [...appsList].sort((a, b) => a.size - b.size);
        } else if (sortAppsSize === "Size-deasc") {
            return [...appsList].sort((a, b) => b.size - a.size);
        } else {
            return appsList;
        }
    })();


    // Apps uninstall function
    const handeUnstallApps = (id) => {

        toast('Uninstall Successfully')

        const appsListToAdd = JSON.parse(localStorage.getItem('appsList'));

        let updateAppsList = appsListToAdd.filter(a => a.id !== id);
        setAppsList(updateAppsList)

        localStorage.setItem('appsList', JSON.stringify(updateAppsList));
    }

    return (
        <div className="bg-[#f1f1f1] px-2 md:px-0">
            <Container>
                <div className="text-center py-8">
                    <h2 className="text-xl md:text-3xl font-bold">Your Installed Apps</h2>
                    <p className="text-gray-600 py-2">Explore All Trending Apps on the Market developed by us</p>
                </div>
                {/* Sort & App count section */}
                <div className="flex justify-between items-center my-2">
                    <h2 className="text-xl font-bold">{appsList.length} Apps Found</h2>

                    <label className="form-control w-[150px] md:w-[200px]">
                        <select
                            value={sortAppsSize} onChange={e => setSortAppsSize(e.target.value)}
                            className="select">
                            <option value="None">Sort by size</option>
                            <option value="Size-asc">Low to high</option>
                            <option value="Size-deasc">High to low</option>
                        </select>
                    </label>
                </div>


                <div className="pb-6">
                    {
                        sortApps.map(app => <div key={app.id}>
                            <div className="flex justify-between items-center bg-white p-4 mb-4 rounded-lg">
                                <div className="flex gap-4">
                                    <img className="h-[60px] w-[60px] md:h-[80px] md:w-[80px] rounded-lg border-1 border-gray-400" src={app.image} alt="" />
                                    <div>
                                        <h2 className="text-lg font-medium">{app.title}</h2>

                                        <div className="flex items-center gap-3 md:gap-5">
                                            <p className="flex items-center gap-2 text-green-600"><MdOutlineFileDownload className=" text-xl" />{app.downloads / 100000}M</p>
                                            <p className="flex items-center gap-2 text-[#FF8811]"><FaStar />{app.ratingAvg}</p>
                                            <p className="text-gray-600">{app.size}MB</p>
                                        </div>

                                    </div>
                                </div>
                                <button onClick={() => handeUnstallApps(app.id)} className="bg-[#00d390] text-white font-semibold px-3 md:px-5 py-2 rounded-xl cursor-pointer">Uninstall</button>
                            </div>
                        </div>)
                    }
                </div>
            </Container>

        </div>
    );
};

export default AppsInstallation;