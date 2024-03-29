
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

type Props = {title:string}

 const data = [
  {
    name: 'Jan',
    'Active user': 8000,
  },
  {
    name: 'Fev',
    'Active user': 7000,
  },
  {
    name: 'Mar',
    'Active user': 4000,
  },
  {
    name: 'Apr',
    'Active user': 5000,
  },
  {
    name: 'Mai',
    'Active user': 6000,
  },
  {
    name: 'Jun',
    'Active user': 5000,
  },
];


function Chart({title}:Props ) {
  return (
    <div className="p-6 mt-7 shadow-md rounded-xl ">
      <h2 className="mb-8 lg:text-2xl sm:text-xl  text-lg font-semibold ">
        {title}
      </h2>
      <ResponsiveContainer width="100%" height={'80%'}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={'name'} stroke="#7852a9" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey={'Active user'} stroke="#7852a9" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;