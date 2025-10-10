import { useState, useEffect } from "react";
import AppsCard from "../Components/AppsCard";
import Container from "../Container/Container";
import useHeroApps from "../CustomHooks/useHeroApps";
import notApps from "../assets/App-Error.png";
import { Link } from "react-router";

const Apps = () => {
  const { appsData, loading } = useHeroApps();
  const [searchApp, setSearchApps] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);
  const [filteredApps, setFilteredApps] = useState([]);

  // Debounce timeout reference
  let debounceTimeout;

  useEffect(() => {
    setFilteredApps(appsData);
  }, [appsData]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchApps(value);
    setSearchLoading(true);

    // Clear previous debounce
    clearTimeout(debounceTimeout);

    debounceTimeout = setTimeout(() => {
      const searchWord = value.trim().toLowerCase();
      const results = searchWord
        ? appsData.filter((app) =>
            app.title.toLowerCase().includes(searchWord)
          )
        : appsData;

      setFilteredApps(results);
      setSearchLoading(false);
    }, 300); // 300ms delay
  };

  return (
    <div className="bg-[#f1f1f1] pb-16">
      <Container>
        <div className="text-center pt-8">
          <h2 className="text-2xl md:text-3xl font-bold pb-2">
            Our All Applications
          </h2>
          <p className="text-gray-600">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>

        <div className="flex justify-between items-center mt-6">
          <h2 className="text-xl font-medium">({filteredApps.length}) Apps Found</h2>
          <label className="input flex items-center border rounded-lg px-3 py-1 bg-white">
            <svg
              className="h-[1em] opacity-50 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
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
              onChange={handleSearch}
              type="search"
              placeholder="Search"
              className="outline-none"
            />
          </label>
        </div>

        {/* Dynamic data load */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-8 pt-4 px-2 md:px-0">
          {loading || searchLoading ? (
            <div className="col-span-full flex justify-center items-center py-12">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 border-4 border-purple-400 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-gray-500 mt-4">Loading apps...</p>
              </div>
            </div>
          ) : filteredApps.length > 0 ? (
            filteredApps.map((app) => <AppsCard key={app.id} app={app} />)
          ) : (
            <div className="col-span-full flex justify-center items-center py-12">
              <div>
                <img className="mx-auto" src={notApps} alt="Not found" />
                <div className="text-center">
                  <h2 className="text-gray-500 text-3xl font-medium py-6">
                    OOPS!! APP NOT FOUND
                  </h2>
                  <p className="text-gray-500 mb-6">
                    The app you are requesting is not found in our system. Please
                    try another search.
                  </p>
                  <Link
                    className="px-6 py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2]"
                    to="/"
                  >
                    Go Back!
                  </Link>
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
