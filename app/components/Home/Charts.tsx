"use client";

import { getChartsData } from "@/app/utils";
import React, { PureComponent } from "react";
import { LineChart, Line, ResponsiveContainer, XAxis } from "recharts";

export default class Charts extends PureComponent {
  render() {
    const data = getChartsData();
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={300} height={100} data={data}>
          <Line type="monotone" dataKey="pv" stroke="red" dot={false} />
          <XAxis
            tickLine={false}
            interval="preserveStartEnd"
            dataKey="name"
            className="text-sm text-gray-700"
          />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
