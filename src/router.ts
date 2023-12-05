import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Empenho from "./pages/Empenho";
import Desenvolvimento from "./pages/Desenvolvimento";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Home,
    },
    {
        path: "/empenhos",
        Component: Empenho,
    },
    {
        path: "*",
        Component: Desenvolvimento
    }
]);

export default router;