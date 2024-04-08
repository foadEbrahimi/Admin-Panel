import React from "react";
import router from "./routes";
import { useRoutes } from "react-router-dom";
import TopBar from "./components/TopBar";
import Sidebar from "./components/Sidebar";
export default function App() {
  const routes = useRoutes(router);
  return (
    <div className="h-[100%]">
      <TopBar />
      <div className="grid grid-cols-12 h-[91.3vh]">
        <div className="col-span-2">
          <Sidebar />
        </div>
        <div className="col-span-10 p-6">{routes}</div>
      </div>
    </div>
  );
}
