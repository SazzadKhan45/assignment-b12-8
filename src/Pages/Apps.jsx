import AppsCard from "../Components/AppsCard";
import Container from "../Container/Container";
import useHeroApps from "../CustomHooks/useHeroApps";


const Apps = () => {
    const { appsData } = useHeroApps();
    console.log(appsData);
    return (
        <div className='bg-[#f1f1f1] pb-16'>
            <Container>
                <div className="text-center pt-8">
                    <h2 className=" text-2xl md:text-3xl font-bold pb-2">Our All Applications</h2>
                    <p className="text-gray-600">Explore All Apps on the Market developed by us. We code for Millions</p>
                </div>

                {/* dynamic data load */}
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 py-8 px-2 md:px-0'>
                    {appsData.map(app => (
                        <AppsCard key={app.id} app={app}></AppsCard>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default Apps;