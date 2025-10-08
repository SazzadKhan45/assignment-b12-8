import { useEffect, useState } from "react"

const useHeroApps = ()=>{
    const [appsData, setAppsData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(()=>{
        setLoading(true)

        fetch('/heroapps.json')
        .then(res => res.json())
        .then(data =>{
            setAppsData(data)
        })
        .catch(Error => setError(Error))
        .finally(()=> setLoading(false))
    },[]);

    return { appsData, loading, error};
};


export default useHeroApps;