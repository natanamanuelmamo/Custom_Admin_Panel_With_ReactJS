import { FaGoogle, FaTwitter, FaGithub, FaVimeo } from 'react-icons/fa';
import Sidebar from '../../components/Sidebar';
import Topbar from '../../components/Topbar';
import Card from '../../components/StatsCard';
import { Table, TableTwo } from "../../components/Table";
import RevenueCharts from '../../components/Chart';

const sampleDataOne = Array(8).fill({
  name: "Tiger Nixon",
  campaign: "Summer Promo",
  package: "Morning Rush",
  budget: "150,000 ETB",
  paid: "50,000 ETB",
  date: "July 24,2025",
  payment_method: "Chapa",
  status: "Paid",
  profile_pic: "/profile.jpg"
});

const sampleDataTwo = Array(7).fill({
  name: "Garret Winters",
  hours_displayed: "30 hr",
  monthly_earnings: "15,000 ETB",
  payment_method: "Chapa",
  status: "Unpaid",
  profile_pic: "/profile.jpg"
});

{/* <td>
                  <span
                    className={`px-3 py-1 rounded-full bg-gray-200 text-xs font-semibold ${
                      adv.status === "Paid"
                        ? "text-green-600"
                        : adv.status === "Pending"
                        ? "text-yellow-600"
                        : "text-red-600"
                    }`}
                  >
                    {adv.status}
                  </span>
              </td> */}


const TableTwoData = [
  { name: 'Google', visitors: '3.5K', revenue: '$5,768', sales: 590, conversion: '4.8%', icon: <FaGoogle className="text-lg" /> },
  { name: 'Twitter', visitors: '2.2K', revenue: '$4,835', sales: 467, conversion: '4.3%', icon: <FaTwitter className="text-lg" /> },
  { name: 'Github', visitors: '2.1K', revenue: '$4,290', sales: 420, conversion: '3.7%', icon: <FaGithub className="text-lg" /> },
  { name: 'Vimeo', visitors: '1.5K', revenue: '$3,580', sales: 389, conversion: '2.5%', icon: <FaVimeo className="text-lg" /> },
  { name: 'Vimeo', visitors: '1.5K', revenue: '$3,580', sales: 389, conversion: '2.5%', icon: <FaVimeo className="text-lg" /> },
];


const Revenue = () => {
  return (
    <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col">
            <Topbar pageTitle="Payments/Revenue" />
            <div className="p-6 min-h-screen text-white overflow-auto">
                {/* Top cards */}
                <div className="flex md:grid-cols-2 xl:grid-cols-5 gap-4">
                    <Card title="Card Title" value="556" subtitle="Wed, Jul 20" change="10.6%" changeType="down" />
                    <Card title="Card Title" value="$2,868,000" subtitle="143 Orders" change="3.0%" changeType="down" />
                    <Card title="Card Title" value="97%" subtitle="32k Visitors" change="3.2%" changeType="up" />
                    <Card title="Card Title" value="Hola Hola" subtitle="$32.48 Average Order" />
                </div>
                
                {/* Table Two Example */}
                <TableTwo title="Table two sample" data={TableTwoData} />

                <RevenueCharts />
                
            </div>
        </div>
    </div>
    
  );
};

export default Revenue;