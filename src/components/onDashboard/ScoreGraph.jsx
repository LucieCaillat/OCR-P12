import { PieChart, Pie, ResponsiveContainer, Cell } from "recharts";
import colors from "../../utils/style/colors";
import { useContext } from "react";
import { DataContext } from "../../utils/context/Context";

export default function ScoreGraph() {
  const { user } = useContext(DataContext);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          data={[{ value: user.score }, { value: 1 - user.score }]}
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
          startAngle={90}
          endAngle={450}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}
