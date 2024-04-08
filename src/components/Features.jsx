import React from "react";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
export default function Features(data) {
  return (
    <div className="flex flex-col gap-y-1">
      <h1 className="text-2xl">{data.title}</h1>
      <div className="flex items-center gap-x-4">
        <h2 className="text-3xl">${data.price}</h2>
        <span className="text-lg flex ">
          {data.sativation === "-" ? (
            <ArrowDownward color="error" />
          ) : (
            <ArrowUpward color="success" />
          )}
          % {data.precent}
        </span>
      </div>
      <span className="">Compared to last month</span>
    </div>
  );
}
