import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "../../styles/index.css";
import PropTypes from "prop-types";

const weekDays = (day) => {
  switch (day) {
    case 1:
      return "L";
    case 2:
      return "M";
    case 3:
      return "M";
    case 4:
      return "J";
    case 5:
      return "V";
    case 6:
      return "S";
    case 7:
      return "D";
    default:
      return null;
  }
};

/**
 *
 * @param {boolean} - active="true"
 * @param {array} - payload
 * @returns tooltip or null
 */

const customTooltip = ({ active, payload }) => {
  if (active) {
    return (
      <div className="custom-tooltip-sessions">
        <p className="data-tooltip-sessions">{`${payload[0].value} `}min</p>
      </div>
    );
  }
  return null;
};

/**
 * Chart with data user average sessions
 * @param {number} - dataKey
 * @returns - component
 */

const AverageSessions = ({ userAverageSessions }) => {
  return (
    <ResponsiveContainer>
      <LineChart
        style={{ backgroundColor: "#ff0000", borderRadius: "5px" }}
        data={userAverageSessions}
        margin={{ top: -30, right: 10, left: 10, bottom: -30 }}
      >
        <Line
          type="monotone"
          dataKey="sessionLength"
          unit=" min"
          strokeWidth={2}
          stroke="#fff"
          dot={false}
        />
        <XAxis
          dataKey="day"
          tickFormatter={weekDays}
          tick={{
            fill: "#FFF",
            fontSize: 12,
            fontWeight: 500,
            opacity: 0.5,
            dy: -35,
          }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis domain={["dataMin -20", "dataMax +50"]} hide />
        <Tooltip
          content={customTooltip}
          wrapperStyle={{
            background: "#FFF",
            width: "10%",
            border: "none",
          }}
          cursor={{
            stroke: "rgba(0, 0, 0, 0.1)",
            strokeWidth: 62,
            position: "right",
          }}
        />

        <text opacity={0.5} fill="#fff" x="25" y="50" fontSize={16}>
          Durée moyenne des
        </text>
        <text opacity={0.5} fill="#fff" x="25" y="75" fontSize={16}>
          sessions
        </text>
      </LineChart>
    </ResponsiveContainer>
  );
};

export default AverageSessions;

AverageSessions.propTypes = {
  userAverageSessions: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.number,
      sessionsLength: PropTypes.number,
    })
  ).isRequired,
};
