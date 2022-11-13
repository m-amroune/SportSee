import React from "react";
import "../../styles/activity.css";
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
import PropTypes from "prop-types";

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

const legendBarChart = (value) => {
  return <span className="legend-barChart"> {value} </span>;
};

const Activity = ({ userActivity }) => {
  return (
    <ResponsiveContainer>
      <BarChart
        data={userActivity}
        margin={{
          top: 60,
          right: 50,
          left: 45,
          bottom: 20,
        }}
      >
        <CartesianGrid strokeDasharray="3" stroke="#DEDEDE" vertical={false} />
        <XAxis
          tickFormatter={(day) => parseInt(day.slice(-1))}
          dataKey="day"
          tickLine={false}
          stroke=" #DEDEDE"
          width={900}
          tick={{
            fill: "#9B9EAC",
            fontSize: 14,
          }}
          tickMargin={15}
        />
        <YAxis
          yAxisId={0}
          domain={["dataMin - 1", "dataMax + 2"]}
          dataKey="kilogram"
          tickCount={3}
          axisLine={false}
          tickLine={false}
          orientation="right"
          tick={{ fill: "#9B9EAC", fontSize: 14 }}
          tickMargin={25}
        />
        <YAxis
          yAxisId={1}
          domain={["dataMin - 160", "dataMax + 10"]}
          dataKey="calories"
          tickCount={3}
          hide
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend
          verticalAlign="top"
          align="right"
          iconType="circle"
          iconSize={8}
          height={50}
          formatter={legendBarChart}
          wrapperStyle={{ top: 25 }}
        />
        <Bar
          yAxisId={0}
          barSize={7}
          dataKey="kilogram"
          fill="#282d30"
          name="Poids (kg)"
          radius={[3, 3, 0, 0]}
        />
        <Bar
          yAxisId={1}
          barSize={7}
          dataKey="calories"
          fill="#e60000"
          name="Calories brûlées (kCal)"
          radius={[3, 3, 0, 0]}
        />
        <text fill="#20253a" fontWeight={700} x="40" y="40" fontSize={15}>
          Activité quotidienne
        </text>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Activity;

Activity.propTypes = {
  userActivity: PropTypes.arrayOf(
    PropTypes.shape({
      kilogram: PropTypes.number,
      calories: PropTypes.number,
    })
  ).isRequired,
};
