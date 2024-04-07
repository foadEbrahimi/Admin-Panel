import {
  AttachMoney,
  BarChart,
  ChatBubbleOutline,
  DynamicFeed,
  LineStyle,
  MailOutline,
  PermIdentity,
  Report,
  Storefront,
  Timeline,
  TrendingUp,
} from "@mui/icons-material";
import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="shadow-md h-[91.3vh] px-2 space-y-2 bg-indigo-600 pt-2">
      <div className="space-y-1">
        <h1 className="text-sm text-white font-bold">Dashboard</h1>
        <ul className="text-md pl-2 pt-1 flex flex-col gap-y-2">
          <NavLink
            to={"/"}
            className={active =>
              active.isActive ? "bg-indigo-700 rounded-lg" : ""
            }
          >
            <li className="rounded-lg p-1 flex text-gray-300 items-center hover:bg-indigo-700 hover:text-white gap-x-2 w-full cursor-pointer">
              <LineStyle />
              Home
            </li>
          </NavLink>
          <li className="rounded-lg text-gray-300 p-1 hover:bg-indigo-700 hover:text-white flex items-center gap-x-2 w-full cursor-pointer">
            <Timeline />
            Analytics
          </li>
          <li className="rounded-lg text-gray-300 p-1 hover:bg-indigo-700 hover:text-white flex items-center gap-x-2 w-full cursor-pointer">
            <TrendingUp />
            Sales
          </li>
        </ul>
      </div>
      <div className="space-y-1">
        <h1 className="text-sm text-white font-bold">Quick Menu</h1>
        <ul className="text-md flex flex-col gap-y-2 pl-2 pt-1">
          <NavLink
            to={"users"}
            className={active =>
              active.isActive ? "bg-indigo-700 rounded-lg" : ""
            }
          >
            <li className="rounded-lg text-gray-300 p-1 hover:bg-indigo-700 hover:text-white flex items-center gap-x-2 w-full cursor-pointer">
              <PermIdentity />
              Users
            </li>
          </NavLink>
          <NavLink
            to={"newuser"}
            className={active =>
              active.isActive ? "bg-indigo-700 rounded-lg" : ""
            }
          >
            <li className="rounded-lg text-gray-300 p-1 hover:bg-indigo-700 hover:text-white flex items-center gap-x-2 w-full cursor-pointer">
              <PermIdentity />
              New Users
            </li>
          </NavLink>
          <li className="rounded-lg text-gray-300 p-1 hover:bg-indigo-700 hover:text-white flex items-center gap-x-2 w-full cursor-pointer">
            <Storefront />
            Products
          </li>
          <li className="rounded-lg text-gray-300 p-1 hover:bg-indigo-700 hover:text-white flex items-center gap-x-2 w-full cursor-pointer">
            <AttachMoney />
            Transactions
          </li>
          <li className="rounded-lg text-gray-300 p-1 hover:bg-indigo-700 hover:text-white flex items-center gap-x-2 w-full cursor-pointer">
            <BarChart />
            Reports
          </li>
        </ul>
      </div>
      <div className="space-y-1">
        <h1 className="text-sm text-white font-bold">Notifications</h1>
        <ul className="text-md flex flex-col gap-y-2 pl-2 pt-1">
          <li className="rounded-lg text-gray-300 p-1 hover:bg-indigo-700 hover:text-white flex items-center gap-x-2 w-full cursor-pointer">
            <MailOutline />
            Mail
          </li>
          <li className="rounded-lg text-gray-300 p-1 hover:bg-indigo-700 hover:text-white flex items-center gap-x-2 w-full cursor-pointer">
            <DynamicFeed />
            Feedback
          </li>
          <li className="rounded-lg text-gray-300 p-1 hover:bg-indigo-700 hover:text-white flex items-center gap-x-2 w-full cursor-pointer">
            <ChatBubbleOutline />
            Messages
          </li>
        </ul>
      </div>
      <div className="space-y-1">
        <h1 className="text-sm text-white font-bold">Staff</h1>
        <ul className="text-md flex flex-col gap-y-2 pl-2 pt-1">
          <li className="rounded-lg text-gray-300 p-1 hover:bg-indigo-700 hover:text-white flex items-center gap-x-2 w-full cursor-pointer">
            <MailOutline />
            Manage
          </li>
          <li className="rounded-lg text-gray-300 p-1 hover:bg-indigo-700 hover:text-white flex items-center gap-x-2 w-full cursor-pointer">
            <Timeline />
            Analytics
          </li>
          <li className="rounded-lg text-gray-300 p-1 hover:bg-indigo-700 hover:text-white flex items-center gap-x-2 w-full cursor-pointer">
            <Report />
            Reports
          </li>
        </ul>
      </div>
    </div>
  );
}
