import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import colors from "../../utils/style/colors";

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

export default function AverageSessionsGraph() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          bottom: 5,
        }}
      >
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis dataKey="day" />
        {/* <YAxis /> */}
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="sessionLength"
          stroke={colors.secondaryFontColor}
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
