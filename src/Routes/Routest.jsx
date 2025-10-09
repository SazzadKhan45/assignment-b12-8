import { createBrowserRouter } from "react-router";
import RootLayout from "../RootLayout/RootLayout";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import AppsInstallation from "../Pages/AppsInstallation";
import AppsDetails from "../Pages/AppsDetails";

const router = createBrowserRouter([
    {
        path : "/",
        Component : RootLayout,
        children : [
            {
                index : true,
                Component : Home
            },
            {
                path : "/apps",
                Component : Apps
            },
            {
                path : "/installation",
                Component : AppsInstallation
            },
            {
                path : "/app/:id",
                Component : AppsDetails
            }
        ]
    }
]);

export default router;