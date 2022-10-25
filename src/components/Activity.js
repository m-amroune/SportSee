import React from "react";
import "../styles/activity.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const CustomTooltip = ({ active, payload }) => {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="data-tooltip">{`${payload[0].value} `}kg</p>
        <p className="data-tooltip">{`${payload[1].value} `}Kcal</p>
      </div>
    );
  }
  return null;
};

const monthTickFormatter = (tick) => {
  const date = new Date(tick);

  return date.getMonth() + 1;
};

const Activity = ({ userActivity }) => {
  return (
    <ResponsiveContainer>
      <BarChart data={userActivity}>
        <CartesianGrid strokeDasharray="3" vertical={false} />
        <XAxis
          tickFormatter={monthTickFormatter}
          dataKey="day"
          tickLine={false}
          stroke=" #DEDEDE"
          tick={{ fill: "#9B9EAC", fontSize: 14 }}
        />
        <YAxis
          tickCount={3}
          axisLine={false}
          tickLine={false}
          orientation="right"
          tick={{ fill: "#9B9EAC", fontSize: 14 }}
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Bar
          barSize={7}
          dataKey="kilogram"
          fill="#282d30"
          name="Poids (kg)"
          radius={[3, 3, 0, 0]}
        />
        <Bar
          barSize={7}
          dataKey="calories"
          fill="#e60000"
          name="Calories brûlées (kCal)"
          radius={[3, 3, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Activity;
