import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Text,
} from "recharts";
import styled from "styled-components";
import colors from "../../utils/style/colors";

const data = [
  {
    day: "2020-07-01",
    kilogram: 80,
    calories: 240,
  },
  {
    day: "2020-07-02",
    kilogram: 80,
    calories: 220,
  },
  {
    day: "2020-07-03",
    kilogram: 81,
    calories: 280,
  },
  {
    day: "2020-07-04",
    kilogram: 81,
    calories: 290,
  },
  {
    day: "2020-07-05",
    kilogram: 80,
    calories: 160,
  },
  {
    day: "2020-07-06",
    kilogram: 78,
    calories: 162,
  },
  {
    day: "2020-07-07",
    kilogram: 76,
    calories: 390,
  },
];

function formateDate(date) {
  const objDate = new Date(date);
  return objDate.getDate();
}
const StyledCustomTooltip = styled.div`
  background-color: ${colors.graph.red};
  color: ${colors.secondaryFontColor};
  text-align: center;
  font-size: 7px;
  padding: 7px;
`;
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const activData = data.filter((day) => day.day === label)[0];
    return (
      <StyledCustomTooltip>
        <p>{activData.kilogram}kg</p>
        <p>{activData.calories}kcal</p>
      </StyledCustomTooltip>
    );
  }

  return null;
};
const StyledCustomLegendText = styled.span`
  color: ${colors.greyFontColor};
`;
const CustomLegendText = (value) => {
  return (
    <StyledCustomLegendText>
      {value === "kilogram" ? "Poids (kg)" : "Calories brûlées (kCal)"}
    </StyledCustomLegendText>
  );
};

export default function DailyActivityGraph() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 32,
          bottom: 25,
        }}
      >
        <CartesianGrid strokeDasharray="2 2" vertical={false} />
        <XAxis
          dataKey="day"
          tickLine={false}
          axisLine={false}
          tickFormatter={(date) => formateDate(date)}
          tickMargin={16}
        />
        <YAxis
          dataKey="kilogram"
          yAxisId="right"
          axisLine={false}
          tickLine={false}
          orientation="right"
          tickCount={3}
          domain={["dataMin - 1", "dataMax "]}
          tickMargin={20}
        />
        <YAxis
          dataKey="calories"
          yAxisId="left"
          hide={true}
          domain={[0, "dataMax + 50"]}
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend
          verticalAlign="top"
          align="right"
          iconType="circle"
          iconSize={8}
          height={80}
          formatter={CustomLegendText}
        />
        <Text>Coucou</Text>
        <Bar
          yAxisId="right"
          dataKey="kilogram"
          fill={colors.graph.darkGrey}
          barSize={7}
          radius={[3.5, 3.5, 0, 0]}
        />
        <Bar
          yAxisId="left"
          dataKey="calories"
          fill={colors.graph.red}
          barSize={7}
          radius={[3.5, 3.5, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
