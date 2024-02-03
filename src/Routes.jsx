import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Board from "./pages/Board";
import Admin from "./pages/Admin";

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
    path: "/Board",
    component: <Board />,
  },
  
  {
    path: "/Admin",
    component: <Admin />,
  },
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
