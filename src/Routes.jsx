import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Leaderboard from "./pages/Leaderboard";
//import Admin from "./pages/Admin";

const routes = [
  {
    path: "/",
    component: <Login />,
  },
  {
    path: "/Dashboard",
    component: <Dashboard />,
  },
  {
    path: "/Leaderboard",
    component: <Leaderboard />,
  },
  /*
  {
    path: "/Admin",
    component: <Admin />,
  },*/
];

const RouteSwitch = () => {
  return (
    <Routes>
      {routes.map((e) => {
        return <Route path={e.path} element={e.component} />;
      })}
    </Routes>
  );
};

export default RouteSwitch;
