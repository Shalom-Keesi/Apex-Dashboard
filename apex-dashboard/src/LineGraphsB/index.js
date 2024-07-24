// Chart.js
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Text,
} from "recharts";
// import {bar} from "./sideBar/bar";
import "./index.css";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";

const data = [
  { name: "J", level: 2 },
  { name: "S", level: 3 },
  { name: "D", level: 1 },
  { name: "K", level: 4 },
  { name: "V", level: 2 },
  { name: "J", level: 3 },
  { name: "S", level: 5 },
  { name: "D", level: 1 },
  { name: "K", level: 2 },
  { name: "V", level: 4 },
  { name: "S", level: 3 },
];

const CustomDot = (props) => {
  const { cx, cy } = props;
  return <circle cx={cx} cy={cy} r={6} stroke="none" fill="blue" />;
};

const CustomTick = (props) => {
  const { x, y, payload } = props;
  return (
    <Text x={x} y={y} fill="black" textAnchor="middle" dy={16}>
      {payload.value}
    </Text>
  );
};

const Chart = () => {
  
  return (
    <div className="BrailleOverview">
      <div>
      <Sidebar/>
      </div>
      <div className="chart">
        <h3>Braille</h3>
        <ResponsiveContainer width="100%" height={700}>
          <LineChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="name"
              label={{
                value: "Teachers",
                position: "insideBottomRight",
                offset: -10,
              }}
              tick={<CustomTick />}
            />
            <YAxis
              label={{ value: "Level", angle: -90, position: "insideLeft" }}
              ticks={[0, 1, 2, 3, 4, 5]}
              domain={[0, 5]}
              tick={<CustomTick />}
            />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="level"
              stroke="#8884d8"
              dot={<CustomDot />}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;
