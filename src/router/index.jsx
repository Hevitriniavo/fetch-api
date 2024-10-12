import {createBrowserRouter} from "react-router-dom";
import HomeView from "../views/HomeView.jsx";
import NotFoundView from "../views/NotFoundView.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeView />
    },
    {
        path: "/*",
        element: <NotFoundView />
    }
]);

export default router;