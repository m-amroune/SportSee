import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const categoriesPerf = (kind) => {
  switch (kind) {
    case 1:
      return "Cardio";
    case 2:
      return "Energie";
    case 3:
      return "Endurance";
    case 4:
      return "Force";
    case 5:
      return "Vitesse";
    case 6:
      return "Intensité";
    default:
      return null;
  }
};

const Performance = ({ userPerformance }) => {
  return (
    <ResponsiveContainer>
      <RadarChart
        style={{ backgroundColor: "#282D30", borderRadius: "5px" }}
        data={userPerformance}
      >
        <PolarGrid radialLines={false} />
        <PolarAngleAxis
          tickFormatter={categoriesPerf}
          dataKey="kind"
          radialLines={false}
          tick={{ fill: "#FFF", fontSize: 12 }}
        />
        <PolarRadiusAxis tick={false} tickCount={6} axisLine={false} />
        <Radar dataKey="value" fill="#FF0101" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default Performance;
