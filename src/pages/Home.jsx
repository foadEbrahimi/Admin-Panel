import React, { useState } from "react";
import Features from "../components/Features";
import Chart from "../components/Chart";
import { xAxisData } from "../Datas";
export default function Home() {
  const [FeaturesInfo] = useState([
    { id: 1, title: "hello", precent: 2, price: 200, sativation: "-" },
    { id: 2, title: "seles", precent: 40, price: 2300, sativation: "+" },
    { id: 3, title: "tether", precent: 10, price: 1009, sativation: "-" },
  ]);
  return (
    <div className="">
      <div className="flex flex-col gap-y-10">
        <div className="w-full grid grid-cols-3 place-items-center">
          {FeaturesInfo.map(info => (
            <Features {...info} />
          ))}
        </div>
        <Chart grid title="Month Sale" data={xAxisData} dataKey="Sale" />
      </div>
    </div>
  );
}
