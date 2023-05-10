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
import { useContext } from "react";
import { DataContext } from "../../utils/context/Context";

const StyledCustomTooltip = styled.div`
  background-color: ${colors.graph.red};
  color: ${colors.secondaryFontColor};
  text-align: center;
  font-size: 7px;
  padding: 7px;
`;

const StyledCustomLegendText = styled.span`
  color: ${colors.greyFontColor};
  padding-left: 12px;
  & span {
    padding-right: 32px;
  }
`;

export default function DailyActivityGraph() {
  const { sessions } = useContext(DataContext);

  function formateDate(date) {
    const objDate = new Date(date);
    return objDate.getDate();
  }

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const labelData = sessions.filter((day) => day.day === label)[0];
      return (
        <StyledCustomTooltip>
          <p>{labelData.kilogram}kg</p>
          <p>{labelData.calories}kcal</p>
        </StyledCustomTooltip>
      );
    }

    return null;
  };

  const CustomLegendText = (value) => {
    return (
      <StyledCustomLegendText>
        {value === "kilogram" ? (
          <span>Poids (kg)</span>
        ) : (
          "Calories brûlées (kCal)"
        )}
      </StyledCustomLegendText>
    );
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={sessions}
        margin={{
          top: 10,
          right: 29,
          left: 32,
          bottom: 60,
        }}
      >
        <CartesianGrid strokeDasharray="2 2" vertical={false} />
        <XAxis
          dataKey="day"
          tickLine={false}
          axisLine={false}
          tickFormatter={(date) => formateDate(date)}
          tickMargin={16}
          stroke={colors.graph.legend}
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
          stroke={colors.graph.legend}
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
