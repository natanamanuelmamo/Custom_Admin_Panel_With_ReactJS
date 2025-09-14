import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  Legend,
} from "recharts";

const BarChartData = [
  { name: "1 Nov", uv: 3, pv: 2 },
  { name: "5 Nov", uv: 8, pv: 3 },
  { name: "10 Nov", uv: 6, pv: 4 },
  { name: "15 Nov", uv: 5, pv: 4 },
  { name: "20 Nov", uv: 4, pv: 3 },
  { name: "25 Nov", uv: 1, pv: 1 },
];

const BarChartData2 = [
  { name: "New", uv: 1000, pv: 1200, nv:800 },
  { name: "2nd", uv: 1100, pv: 1400, nv:600 },
  { name: "3rd", uv: 1300, pv: 1500, nv:500 },
  { name: "4th", uv: 1000, pv: 1300, nv:700 },
  { name: "5th", uv: 1200, pv: 1500, nv:1000 },
  { name: "6th", uv: 1300, pv: 1600, nv:400 },
];

const LineChartData = [
  { day: 10, earnings: 40000 },
  { day: 11, earnings: 42000 },
  { day: 12, earnings: 60000 },
  { day: 13, earnings: 45000 },
  { day: 14, earnings: 52000 },
  { day: 15, earnings: 53000 },
  { day: 16, earnings: 58000 },
  { day: 17, earnings: 80234 },
  { day: 18, earnings: 60000 },
  { day: 19, earnings: 70000 },
  { day: 20, earnings: 65000 },
  { day: 21, earnings: 72000 },
  { day: 22, earnings: 64000 },
  { day: 23, earnings: 68000 },
  { day: 24, earnings: 55000 },
  { day: 25, earnings: 60000 },
];

const RevenueCharts = () => {
  return (
    <div className="mt-6 grid grid-cols-1 xl:grid-cols-2 gap-4">
      {/* Bar Chart */}
      <div className="bg-white shadow-md rounded-xl p-4">
            <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                <span>Barchart Data (For Sample)</span>
                <select className="text-sm text-gray-600 border px-2 py-1 rounded-md">
                    <option>Month</option>
                    <option>Jan</option>
                    <option>Feb</option>
                </select>
            </div>
            <ResponsiveContainer width="100%" height={200}>
                <BarChart data={BarChartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="uv" stackId="a" fill="#5225D0" />
                    <Bar dataKey="pv" stackId="a" fill="#C4B2EC" />
                </BarChart>
            </ResponsiveContainer>
      </div>

      {/* Bar Chart two */}
      <div className="bg-white shadow-md rounded-xl p-4">
            <div className="justify-items-start text-sm text-gray-500 mb-4">
                <div>Barchart Data 2</div>
                <div className="text-xl font-semibold text-[#5225D0]">$860,472.29</div>
            </div>
            <ResponsiveContainer width="100%" height={200}>
                <BarChart data={BarChartData2}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="uv" stackId="a" fill="#5225D0" />
                    <Bar dataKey="pv" stackId="a" fill="#C4B2EC" />
                    <Bar dataKey="nv" stackId="a" fill="#A877FD" />
                </BarChart>
            </ResponsiveContainer>
      </div>

      {/* Line Chart */}
      <div className="col-span-1 xl:col-span-2 bg-white shadow-md rounded-xl p-4">
            <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                <span className="text-lg text-gray-700 font-semibold">Line Chart Sample</span>
                <select className="text-sm text-gray-600 border px-2 py-1 rounded-md">
                    <option>This Month</option>
                    <option>Jan</option>
                    <option>Feb</option>
                </select>
            </div>
            <ResponsiveContainer width="100%" height={280}>
                <LineChart data={LineChartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`${value.toLocaleString()}`, 'Earnings']} />
                    <Line
                    type="monotone"
                    dataKey="earnings"
                    stroke="#5225D0"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6, stroke: "#5225D0", strokeWidth: 2 }}
                    />
                </LineChart>
            </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueCharts;
