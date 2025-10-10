import { useParams } from "react-router";
import useHeroApps from "../CustomHooks/useHeroApps";
import Container from "../Container/Container";
import ReviewsImg from "../assets/icon-review.png";
import downloadImg from "../assets/icon-downloads.png";
import starImg from "../assets/icon-ratings.png";
import { toast } from "react-toastify";
import { useState } from "react";
import DynamicPageError from "./DynamicPageError";
import Rechart from "../Components/Rechart";

const AppsDetails = () => {
  const { id } = useParams();
  const { appsData } = useHeroApps();

  const singleApp = appsData.find((app) => app.id === parseInt(id));

  // Load installed apps list from localStorage
  const [installedApps, setInstalledApps] = useState(() => {
    const saved = localStorage.getItem("appsList");
    return saved ? JSON.parse(saved) : [];
  });

  if (!singleApp) {
    return <DynamicPageError />;
  }

  const { image, title, description, downloads, ratingAvg, reviews, size, ratings } = singleApp;

//  Rechart sort by rating 
  const reChartInfo = [...ratings].sort(
    (a, b) => parseInt(b.name) - parseInt(a.name)
  );


  const isInstalled = installedApps.some((app) => app.id === singleApp.id);

  const handleAppsAddLocalStorage = () => {
    if (isInstalled) {
      return;
    }

    const updatedList = [...installedApps, singleApp];
    setInstalledApps(updatedList);
    localStorage.setItem("appsList", JSON.stringify(updatedList));

    toast("App Installing...");
  };

  return (
    <div className="bg-[#f1f1f1] py-8 px-2 md:px-0">
      <Container>
        <div>
          <div className="md:flex gap-12 border-b-2 border-gray-300 pb-4">
            <div className="bg-white p-4 rounded-lg">
              <img
                className="h-[250px] w-full border-2 border-gray-300 rounded-lg"
                src={image}
                alt={title}
              />
            </div>
            <div>
              <h2 className="text-xl font-bold">{title}</h2>
              <p className="text-gray-500">
                Developed by{" "}
                <span className="font-extrabold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                  productive.io
                </span>
              </p>
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

              {/*Install button */}
              <button
                onClick={handleAppsAddLocalStorage}
                disabled={isInstalled}
                className={`text-white font-medium px-4 md:px-8 py-1.5 rounded-lg mt-6 transition-colors duration-300 ${
                  isInstalled
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[#00d390] hover:bg-[#00b879]"
                }`}
              >
                {isInstalled ? "Installed" : `Install Now (${size}) MB`}
              </button>
            </div>
          </div>

          {/* Ratings chart */}
          <Rechart reChartInfo={reChartInfo} />

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
