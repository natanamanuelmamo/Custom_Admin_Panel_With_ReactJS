import Sidebar from '../../components/Sidebar';
import Topbar from '../../components/Topbar';
import Card from '../../components/StatsCard';
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

const BarChartData = [
  { name: "Mon", uv: 80 },
  { name: "Tue", uv: 20 },
  { name: "Wed", uv: 60 },
  { name: "Thu", uv: 40 },
  { name: "Fri", uv: 120 },
  { name: "Sat", uv: 30 },
  { name: "Sun", uv: 70 },
];


const Analytics = () => {
  return (
    <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col">
            <Topbar pageTitle="Analytics" />
            <div className="p-6 min-h-screen text-white overflow-auto">
                {/* Top cards */}
                <div className="flex md:grid-cols-2 xl:grid-cols-5 gap-4">
                    <Card title="Card Title" value="630" subtitle="Wed, Jul 20" change="10.6%" changeType="down" />
                    <Card title="Card Title Two" value="123" subtitle="143 orders" change="3.0%" changeType="down" />
                    <Card title="Card Title Three" value="156K" subtitle="32k Visitors" change="3.2%" changeType="up" />
                    <Card title="Card Title Four" value="3422" subtitle="$32.48 Average Order" change="3.0%" changeType="down" />
                    <Card title="Card Title Five" value="50" subtitle="32k" change="3.2%" changeType="up" />
                </div>

                {/* Main Body */}
                <div className="flex gap-4 mt-6">
                  {/* Left Side */}
                  <div className="w-full lg:w-3/4 flex flex-col gap-6">
                    {/* Sample line chart */}
                    <div className="col-span-1 xl:col-span-2 bg-white shadow-md rounded-xl p-4">
                      <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                          <span className="text-lg text-gray-700 font-semibold">Sample Line Chart</span>
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

                    <div className="flex gap-4">
                      {/* Sample Bar Chart */}
                      <div className="bg-white rounded-xl shadow-md p-6 w-2/3">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-lg font-semibold text-gray-800">Sample Bar Chart</h3>
                          <div className="flex items-center space-x-4">
                            <span className="text-purple-600 font-semibold cursor-pointer">Days</span>
                            <span className="text-gray-400 font-semibold cursor-pointer">Hours</span>
                            <span className="text-gray-400 cursor-pointer text-sm">?</span>
                          </div>
                        </div>
                        {/* Sample Bar Chart */}
                        {/* <div className="flex justify-between items-end h-40">
                          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, index) => {
                            const heights = [80, 20, 60, 40, 120, 30, 70]; // sample heights
                            return (
                              <div key={index} className="flex flex-col items-center">
                                <div
                                  className={`w-6 rounded-t-md ${
                                    day === "Fri" ? "bg-purple-600" : "bg-purple-200"
                                  }`}
                                  style={{ height: `${heights[index]}px` }}
                                ></div>
                                <span className="text-xs text-gray-600 mt-2">{day}</span>
                              </div>
                            );
                          })}
                        </div> */}
                        <ResponsiveContainer width="100%" height={200}>
                          <BarChart data={BarChartData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            {/* <YAxis /> */}
                            <Tooltip />
                            <Bar dataKey="uv" stackId="a" fill="#5225D0" />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>

                      {/* Top Stats */}
                      <div className="bg-white rounded-xl shadow-md p-6 w-1/3">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Top Statistics</h3>
                        <ul className="space-y-6 text-sm text-gray-700">
                          <li className="flex justify-between">
                            <span>Abebe Kebede</span>
                            <span>54%</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Abebe Kebede</span>
                            <span>32%</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Abebe Kebede</span>
                            <span>27%</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Abebe Kebede</span>
                            <span>25%</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Right Side Info Panels */}
                  <div className="w-full min-h-full bg-white rounded-xl justify-around lg:w-1/4 flex flex-col gap-6">
                    {/* Sample Info */}
                    <div className="bg-white rounded-xl shadow-lg p-6">
                      <h2 className="text-lg text-purple-600 mb-6">Sample Info</h2>
                      <ul className="space-y-6 text-sm text-gray-700">
                        <li className="flex justify-between">
                          <span>Total Sample</span>
                          <span className="text-purple-600 font-medium">556</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Completed Sample</span>
                          <span className="text-purple-600 font-medium">36</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Sample Rate</span>
                          <span className="text-purple-600 font-medium">82%</span>
                        </li>
                      </ul>
                    </div>

                    {/* Sample Info two */}
                    <div className="bg-white rounded-xl shadow-lg p-6">
                      <h2 className="text-lg text-purple-600 mb-6">Sample Info 2</h2>
                      <ul className="space-y-6 text-sm text-gray-700">
                        <li className="flex justify-between">
                          <span>Total Sample</span>
                          <span className="text-purple-600 font-medium">96.42%</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Total Total</span>
                          <span className="text-purple-600 font-medium">2.76%</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Current leading</span>
                          <span className="text-purple-600 font-medium">Abebe</span>
                        </li>
                      </ul>
                    </div>

                    {/* Other Sample Info */}
                    <div className="bg-white rounded-xl shadow-lg p-6">
                      <h2 className="text-lg text-purple-600 mb-6">Sample Info 3</h2>
                      <ul className="space-y-6 text-sm text-gray-700">
                        <li className="flex justify-between">
                          <span>Total Sample</span>
                          <span className="text-purple-600 font-medium">56</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Retention Rate</span>
                          <span className="text-purple-600 font-medium">97%</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
            </div>
        </div>
    </div>
    
  );
};

export default Analytics;




