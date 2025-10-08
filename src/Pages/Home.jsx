
import HeroBanner from '../Components/HeroBanner';
import useHeroApps from '../CustomHooks/useHeroApps';
import AppsCard from '../Components/AppsCard';
import Container from '../Container/Container';
import { Link } from 'react-router';

const Home = () => {
    const { appsData } = useHeroApps();
    const showApps = appsData.slice(0, 8);

    return (
        <div className='bg-[#f1f1f1] pb-16'>
            <HeroBanner />

            {/* Dynamic data load */}
            <Container>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 py-8 px-2 md:px-0'>
                    {showApps.map(app => (
                        <AppsCard key={app.id} app={app}></AppsCard>
                    ))}
                </div>

                {/* Center button */}
                <div className="flex justify-center mt-6">
                    <button className="px-16 py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] drop-shadow-2xl">
                        <Link to="/apps">Show All</Link>
                    </button>
                </div>
            </Container>
        </div>

    );
};

export default Home;