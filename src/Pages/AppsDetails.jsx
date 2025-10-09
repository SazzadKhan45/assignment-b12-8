import { useParams } from "react-router";
import useHeroApps from "../CustomHooks/useHeroApps";
import Container from "../Container/Container";
import { PiDownloadSimpleBold } from "react-icons/pi";
import { FaStar } from "react-icons/fa";
import ReviewsImg from "../assets/icon-review.png"

const AppsDetails = () => {
    const { id } = useParams();
    const { appsData } = useHeroApps();

    const singleApp = appsData.find(app => app.id === parseInt(id));

    if (!singleApp) {
        return (
            <div className="bg-[#f1f1f1] py-8">
                <Container>
                    <p className="text-center text-red-500 font-semibold">
                        App not found or still loading...
                    </p>
                </Container>
            </div>
        );
    }

    const { image, title, description, downloads, ratingAvg, reviews } = singleApp;
    console.log(singleApp)

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
                            <div className="flex gap-4 md:gap-8 lg:gap-12">
                                <div className="space-y-1">
                                    <h3 className="text-[#00D390] text-4xl"><PiDownloadSimpleBold /></h3>
                                    <p className="text-gray-500">Downloads</p>
                                    <h2 className="text-3xl font-bold">{downloads / 100000}M</h2>
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-[#FF8811] text-4xl"><FaStar /></h3>
                                    <p className="text-gray-500">Average Ratings</p>
                                    <h2 className="text-3xl font-bold">{ratingAvg}</h2>
                                </div>
                                <div className="space-y-1">
                                    <img src={ReviewsImg} />
                                    <p className="text-gray-500">Total Reviews</p>
                                    <h2 className="text-3xl font-bold">{reviews/1000}K</h2>
                                </div>
                            </div>
                            <button className="bg-[#00d390] text-white font-medium px-4 md:px-8 py-1.5 rounded-lg cursor-pointer mt-6">Install Now 291 MB</button>
                        </div>
                    </div>
                    <div className="mt-4">

                        <p className="text-justify mt-2">{description}</p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default AppsDetails;
