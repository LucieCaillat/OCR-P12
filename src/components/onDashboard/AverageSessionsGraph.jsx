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

const data = [
  {
    day: 1,
    sessionLength: 30,
  },
  {
    day: 2,
    sessionLength: 23,
  },
  {
    day: 3,
    sessionLength: 45,
  },
  {
    day: 4,
    sessionLength: 50,
  },
  {
    day: 5,
    sessionLength: 0,
  },
  {
    day: 6,
    sessionLength: 0,
  },
  {
    day: 7,
    sessionLength: 60,
  },
];

const averageSessionLength =
  data.map((obj) => obj.sessionLength).reduce((a, b) => a + b) / data.length;
const augmentedData = [
  {
    day: 0,
    sessionLength: averageSessionLength,
  },
  ...data,
  {
    day: 8,
    sessionLength: averageSessionLength,
  },
];

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
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const activData = data.filter((day) => day.day === label)[0];
    return (
      <StyledCustomTooltip>
        <p>{activData.sessionLength} min</p>
      </StyledCustomTooltip>
    );
  }

  return null;
};

export default function AverageSessionsGraph() {
  return (
    <ResponsiveContainer width="100%" height="100%">
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
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis
          dataKey="day"
          tickLine={false}
          axisLine={false}
          tickFormatter={(number) => dayOfWeek[number]}
          tickMargin={30}
        />
        <YAxis hide={true} domain={[0, "dataMax +20"]} />
        <Tooltip content={<CustomTooltip />} />
        <Line
          type="natural"
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
