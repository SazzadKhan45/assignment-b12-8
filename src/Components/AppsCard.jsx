import { FaStar } from "react-icons/fa";
import { PiDownloadSimpleBold } from "react-icons/pi";

const AppsCard = ({ app }) => {

    const { image, title, ratingAvg, downloads } = app;


    console.log(app)
    return (
        <div className='bg-white px-4 py-6 rounded-lg'>
            <img className='h-[250px] w-full rounded-lg ' src={image} alt={title} />
            <h3 className='text-lg md:text-xl font-medium py-4'>{title}</h3>
            <div className='flex justify-between'>
                <button className="flex items-center gap-2">
                    <PiDownloadSimpleBold />
                    <span>{downloads}</span>
                </button>
                <button className="flex items-center gap-2">
                    <FaStar />
                    <span>{ratingAvg}</span>
                </button>

            </div>
        </div>
    );
};

export default AppsCard;