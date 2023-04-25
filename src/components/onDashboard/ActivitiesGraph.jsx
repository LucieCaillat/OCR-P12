import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import colors from "../../utils/style/colors";

const data = [
  {
    value: 80,
    kind: "cardio",
  },
  {
    value: 120,
    kind: "energy",
  },
  {
    value: 140,
    kind: "endurance",
  },
  {
    value: 50,
    kind: "strength",
  },
  {
    value: 200,
    kind: "speed",
  },
  {
    value: 90,
    kind: "intensity",
  },
];

export default function ActivitiesGraph() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="kind" />

        <Radar
          dataKey="value"
          stroke={colors.primary}
          fill={colors.primary}
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}
