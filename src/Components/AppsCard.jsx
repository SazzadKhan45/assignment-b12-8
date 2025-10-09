import { FaStar } from "react-icons/fa";
import { PiDownloadSimpleBold } from "react-icons/pi";
import { Link } from "react-router";

const AppsCard = ({ app }) => {

    const {id, image, title, ratingAvg, downloads } = app;

    // console.log(app)
    return (
        <Link to={`/app/${id}`}>
            <div className='bg-white px-4 py-6 rounded-lg'>
                <img className='h-[250px] md:h-[240px] lg:h-[300px] w-full rounded-lg border-2 border-gray-200' src={image} alt={title} />
                <h3 className='text-lg md:text-xl font-medium py-4'>{title}</h3>
                <div className='flex justify-between'>
                    <button className="flex items-center gap-2 text-[#00D390] bg-[#F1F5E8] px-3 py-1 rounded-lg">
                        <PiDownloadSimpleBold />
                        <span>{downloads / 100000}M</span>
                    </button>
                    <button className="flex items-center gap-2 bg-[#FFF0E1] text-[#FF8811] px-3 py-1 rounded-lg">
                        <FaStar />
                        <span>{ratingAvg}</span>
                    </button>

                </div>
            </div>
        </Link>

    );
};

export default AppsCard;