import { PieChart, Pie,  Cell } from 'recharts';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];
const COLORS = ['#4774b7', '#0F1225', '#1B3827', '#FF8042'];

function PieChartCom() {
  return (
    <PieChart width={400} height={350}>
      <Pie
        data={data}
        cx={150}
        cy={200}
        innerRadius={60}
        outerRadius={100}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
        className="hidden md:block"
      >
        {data.map((entry, index) => (
          <Cell key={'cell-${index}'} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      
    </PieChart>
  );
}

export default PieChartCom;