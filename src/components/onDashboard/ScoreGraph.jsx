import { PieChart, Pie, ResponsiveContainer, Cell } from "recharts";
import colors from "../../utils/style/colors";
const p = 50;

const data02 = [{ value: p }, { value: 100 - p }];

export default function ScoreGraph() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          data={data02}
          cx={"50%"}
          cy={"50%"}
          innerRadius={"60%"}
          outerRadius={"80%"}
          startAngle={90}
          endAngle={450}
        >
          <Cell key={`cell-1`} fill={colors.graph.red} />
          <Cell key={`cell-2`} fill={colors.backgroundItems} />
        </Pie>
        <Pie
          dataKey="value"
          data={[{ value: 1 }]}
          fill="white"
          cx={"50%"}
          cy={"50%"}
          innerRadius={"0%"}
          outerRadius={"60%"}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}
