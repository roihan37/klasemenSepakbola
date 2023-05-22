import {
    createBrowserRouter
} from "react-router-dom";
import { AddClubPage } from "../views/AddClubPage.jsx";
import { AddMatchPage } from "../views/AddMatchPage.jsx";
import { ClubPage } from "../views/ClubPage.jsx";
import { KlasemenPage } from "../views/KlasemenPage.jsx";
import { BaseLayout } from "../components/BaseLayout";
import { PertandinganPage } from "../views/PertandinganPage.jsx";
// const navigate = useNavigate();
const router = createBrowserRouter([

    {
        element: <BaseLayout />,
        children: [
            {
                path: "/",
                element: <KlasemenPage />,
            },
            {
                path: "/match",
                element: <KlasemenPage />,
            },
            {
                path: "/club",
                element: <ClubPage />,
            },
            {
                path: "/add-match",
                element: <AddMatchPage />,
            },
            {
                path: "/add-club",
                element: <AddClubPage />,
            },
            {
                path: "/pertandingan",
                element: <PertandinganPage />,
            },
        ],  
    },
]);

export default router