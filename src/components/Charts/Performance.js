import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";

/**
 * Chart with data user performance
 * @param {array} -
 * @returns - component
 */

const Performance = ({ userPerformance }) => {
  return (
    <ResponsiveContainer>
      <RadarChart
        style={{ backgroundColor: "#282D30", borderRadius: "5px" }}
        data={userPerformance}
        margin={{ top: 15, right: 20, left: 20, bottom: 10 }}
      >
        <PolarGrid radialLines={false} />

        <PolarAngleAxis
          tickFormatter={userPerformance.data}
          dataKey="kind"
          radialLines={false}
          tick={{ fill: "#FFF", fontSize: 12 }}
          dy={2}
        />
        <PolarRadiusAxis tick={false} tickCount={6} axisLine={false} />
        <Radar dataKey="value" fill="#FF0101" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default Performance;

Performance.propTypes = {
  userPerformance: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number,
      kind: PropTypes.string,
    })
  ).isRequired,
};
