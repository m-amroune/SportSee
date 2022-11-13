import React from "react";
import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";

const Score = ({ userData }) => {
  const data = [
    {
      uv: userData,
      fill: "#E60000",
    },
  ];

  return (
    <ResponsiveContainer>
      <RadialBarChart innerRadius={86} barSize={10} startAngle={80} data={data}>
        <circle cx="50%" cy="50%" fill="#fff" r="90"></circle>
        <PolarAngleAxis
          type="number"
          domain={[0, 100]}
          angleAxisId={1}
          tick={false}
        />
        <RadialBar
          dataKey="uv"
          angleAxisId={1}
          cornerRadius="5"
          data={[data[0]]}
        />
        <text x="42.5%" y="45%" fontWeight="700" fontSize={26}>
          {`${userData}%`}
        </text>
        <text x="41%" y="54%" fill="#74798C" fontSize={18}>
          de votre
        </text>
        <text x="41%" y="63%" fill="#74798C" fontSize={18}>
          objectif
        </text>
        <text fontWeight={700} x="30" y="55" fontSize={15}>
          Score
        </text>
      </RadialBarChart>
    </ResponsiveContainer>
  );
};

export default Score;

Score.propTypes = {
  userData: PropTypes.number.isRequired,
};
