import { createBrowserRouter } from "react-router";
import RootLayout from "../RootLayout/RootLayout";
import Home from "../Pages/Home";

const router = createBrowserRouter([
    {
        path : "/",
        Component : RootLayout,
        children : [
            {
                index : true,
                Component : Home
            }
        ]
    }
]);

export default router;