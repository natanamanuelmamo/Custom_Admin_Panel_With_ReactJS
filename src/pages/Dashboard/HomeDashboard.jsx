import Sidebar from '../../components/Sidebar';
import Topbar from '../../components/Topbar';
import Card from '../../components/StatsCard';

import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { FaProjectDiagram, FaMoneyBillWave, FaUsers } from 'react-icons/fa';
import { AiOutlineCheckCircle } from 'react-icons/ai';

const COLORS = ['#7B61FF', '#A390F8', '#BFAEF7', '#E1DBFF'];

const LineChartData = [
    { x: 10, y: 10 },
    { x: 20, y: 22 },
    { x: 30, y: 20 },
    { x: 40, y: 32 },
    { x: 50, y: 25 },
    { x: 60, y: 40 },
    { x: 70, y: 23 },
    { x: 80, y: 25 },
    { x: 90, y: 15 },
    { x: 100, y: 18 },
  ];

  const barData = [
    { name: 'Mar', variable1: 40, variable2: 25 },
    { name: 'Feb', variable1: 20, variable2: 10 },
    { name: 'Apr', variable1: 35, variable2: 30 },
    { name: 'May', variable1: 25, variable2: 25 },
    { name: 'Jul', variable1: 28, variable2: 18 },
    { name: 'Feb', variable1: 50, variable2: 40 },
    { name: 'Oct', variable1: 30, variable2: 20 },
  ];

  const pieData = [
    { name: 'DataOne', value: 65 },
    { name: 'DataTwo', value: 45 },
    { name: 'DataThree', value: 34 },
    { name: 'DataFour', value: 12 },
  ];

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar pageTitle="Dashboard" />
        {/* Page content here */}

        <div className="p-6 space-y-4">{/* <div className="p-4 space-y-4"> */}
          {/* Top section */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl shadow-md p-4 col-span-2 space-y-4">
              <h2 className="text-lg font-semibold text-gray-700">Key Metrics Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Card 1 */}
                <div className="bg-white border rounded-lg p-4 shadow">
                  <div className="flex items-center text-purple-600 mb-2">
                    <FaProjectDiagram className="mr-2" />
                    <span className="font-medium">First Card</span>
                  </div>
                  <h2 className="text-2xl font-bold text-purple-800">185</h2>
                </div>
                {/* Card 2 */}
                <div className="bg-white border rounded-lg p-4 shadow">
                  <div className="flex items-center text-purple-600 mb-2">
                    <FaMoneyBillWave className="mr-2" />
                    <span className="font-medium">Second Card</span>
                  </div>
                  <h2 className="text-2xl font-bold text-purple-800">1mil</h2>
                </div>
                {/* Card 3 */}
                <div className="bg-white border rounded-lg p-4 shadow">
                  <div className="flex items-center text-purple-600 mb-2">
                    <FaUsers className="mr-2" />
                    <span className="font-medium">Third Card</span>
                  </div>
                  <h2 className="text-2xl font-bold text-purple-800">85</h2>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* System Health */}
                <div className="bg-white border rounded-lg p-4 shadow space-y-2">
                  <h3 className="text-sm font-semibold text-gray-700 mb-2">System Health</h3>
                  <p className="text-sm"><AiOutlineCheckCircle className="inline text-green-500 mr-1" /> Server Uptime: <span className="font-medium">99.9%</span></p>
                  <p className="text-sm text-gray-600">API Latency: 150ms</p>
                  <p className="text-sm text-gray-600">Error Rate: 0.01%</p>
                </div>

                {/* Quick Actions */}
                <div className="bg-white border rounded-lg p-4 shadow">
                  <h3 className="text-sm font-semibold text-gray-700 mb-4">Quick Actions</h3>
                  <div className="space-y-2">
                    <button className="w-full bg-purple-600 hover:bg-purple-700 text-white text-sm py-2 rounded-lg">Approve Requests</button>
                    <button className="w-full bg-purple-600 hover:bg-purple-700 text-white text-sm py-2 rounded-lg">Manage Users</button>
                    <button className="w-full bg-purple-600 hover:bg-purple-700 text-white text-sm py-2 rounded-lg">View System Logs</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Live Activity Tracker */}
            <div className="bg-white rounded-xl shadow-md p-4 space-y-4">
              <h3 className="text-lg font-semibold text-gray-700">Live Activity Tracker</h3>
              <div className="flex flex-col items-center text-center space-y-2">
                <FaProjectDiagram className="text-4xl text-purple-500" />
                <div>
                  <p className="text-sm text-gray-500">Todays Data</p>
                  <h2 className="text-xl font-bold text-purple-700">55,000</h2>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Estimated Data</p>
                  <h2 className="text-xl font-bold text-purple-700">38,000</h2>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Best Statistics</p>
                  <h2 className="text-sm font-semibold text-purple-700">Abebe Kebede</h2>
                </div>
              </div>
            </div>
          </div>

          {/* Line Chart */}
          <div className="bg-white rounded-xl shadow-md p-4">
            <h3 className="text-md font-semibold text-gray-700 mb-2">Sample Title (Last 30 Days)</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={LineChartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="x" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="y"
                  stroke="#7B61FF"
                  strokeWidth={3}
                  dot={false}
                  fill="#7B61FF"
                  fillOpacity={0.1}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Bottom section */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
            {/* Variable one vs Variable Two */}
            <div className="bg-white rounded-xl shadow-md p-4">
              <h3 className="text-md font-semibold text-gray-700 mb-2">Variable one vs Variable Two</h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={barData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="variable1" fill="#7B61FF" barSize={20} />
                  <Bar dataKey="variable2" fill="#BFAEF7" barSize={20} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Pie Chart */}
            <div className="bg-white rounded-xl shadow-md p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-md font-semibold text-gray-700">Sample Pie Chart</h3>
                <select className="text-sm text-gray-600 border px-2 py-1 rounded-md">
                  <option>Monthly</option>
                  <option>Weekly</option>
                </select>
              </div>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={3}
                    dataKey="value"
                    label
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="flex justify-around text-sm text-gray-600 mt-4">
                {pieData.map((d, i) => (
                  <div key={i} className="flex items-center space-x-1">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[i % COLORS.length] }}></div>
                    <span>{d.name}: {d.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          
        </div>


      </div>
    </div>
  );
}
