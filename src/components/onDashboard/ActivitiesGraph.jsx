import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import colors from "../../utils/style/colors";
import { useContext } from "react";
import { DataContext } from "../../utils/context/Context";

const typeOfData = {
  1: "Cardio",
  2: "Energie",
  3: "Endurance",
  4: "Force",
  5: "Vitesse",
  6: "Intensité",
};

export default function ActivitiesGraph() {
  const { performance } = useContext(DataContext);
  const data = [...performance].reverse();

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="60%" data={data}>
        <PolarGrid />
        <PolarAngleAxis
          dataKey="kind"
          tickFormatter={(number) => typeOfData[number]}
          stroke={colors.secondaryFontColor}
          tickLine={false}
        />

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
