import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";
import colors from "../../utils/style/colors";

const data02 = [
  { name: "Group A", value: 12 },
  { name: "Group B", value: 88 },
];

export default function ScoreGraph() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          data={data02}
          cx={"50%"}
          cy={"50%"}
          innerRadius={70}
          outerRadius={80}
          fill={colors.graph.red}
        />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}
