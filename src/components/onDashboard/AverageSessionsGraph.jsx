import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import colors from "../../utils/style/colors";
import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../utils/context/Context";

const dayOfWeek = {
  0: "",
  1: "L",
  2: "M",
  3: "M",
  4: "J",
  5: "V",
  6: "S",
  7: "D",
  8: "",
};

const StyledCustomTooltip = styled.div`
  background-color: ${colors.secondaryFontColor};
  color: ${colors.primaryFontColor};
  text-align: center;
  font-size: 8px;
  padding: 1px 7px;
`;

export default function AverageSessionsGraph() {
  const { averageSessions } = useContext(DataContext);
  const [augmentedData, setAugmentedData] = useState([]);

  useEffect(() => {
    if (averageSessions.length !== 0) {
      const averageSessionLength =
        averageSessions
          .map((obj) => obj.sessionLength)
          .reduce((a, b) => a + b) / averageSessions.length;

      setAugmentedData([
        {
          day: 0,
          sessionLength: averageSessionLength,
        },
        ...averageSessions,
        {
          day: 8,
          sessionLength: averageSessionLength,
        },
      ]);
    }
  }, [averageSessions]);

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const labelData = augmentedData.filter((day) => day.day === label)[0];
      const isOnBoardData = label === 0 || label === 8;
      return isOnBoardData ? (
        ""
      ) : (
        <StyledCustomTooltip>
          <p> {labelData.sessionLength} min</p>
        </StyledCustomTooltip>
      );
    }

    return null;
  };

  return (
    <ResponsiveContainer width="100%" height="75%">
      <LineChart
        width={500}
        height={300}
        data={augmentedData}
        margin={{
          bottom: 35,
          right: -7,
          left: -7,
        }}
      >
        <XAxis
          dataKey="day"
          tickLine={false}
          axisLine={false}
          tickFormatter={(number) => dayOfWeek[number]}
          tickMargin={30}
        />
        <YAxis hide={true} domain={["dataMin -10", "dataMax +20"]} />
        <Tooltip content={<CustomTooltip />} />
        <Line
          type="monotone"
          dataKey="sessionLength"
          stroke={colors.secondaryFontColor}
          activeDot={{
            stroke: "rgba(255, 255, 255, 0.2)",
            strokeWidth: 8,
            r: 5,
          }}
          opacity={0.5}
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
