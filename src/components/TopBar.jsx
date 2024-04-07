import { Settings } from "@mui/icons-material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LanguageIcon from "@mui/icons-material/Language";
import { Avatar, Badge } from "@mui/material";
import React from "react";

export default function TopBar() {
  return (
    <div className="bg-indigo-600 border-b border-white">
      <div className="px-10 py-3 flex items-center justify-between">
        <div>
          <h1 className="uppercase text-2xl text-purple-800 font-bold">
            webrank 💜
          </h1>
        </div>
        <div className="flex items-center gap-x-2">
          <Badge badgeContent={2} color="error">
            <NotificationsIcon fontSize="large" />
          </Badge>
          <Badge badgeContent={2} color="error">
            <LanguageIcon fontSize="large" />
          </Badge>
          <Settings fontSize="large" />
          <Avatar alt="img" src="./nigen.jpg" />
        </div>
      </div>
    </div>
  );
}
