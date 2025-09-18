import React from "react";
import { FaGoogle, FaTwitter, FaGithub, FaVimeo } from 'react-icons/fa';
import Sidebar from '../../components/Sidebar';
import Topbar from '../../components/Topbar';
import Card from '../../components/StatsCard';
import { Table, TableTwo } from "../../components/Table";

const dummyData = Array(10).fill({
  name: "John Doe",
  email: "john@example.com",
  business: "Doe Enterprises",
  phone: "+251923647819",
  payment: "150,000 ETB",
  status: "Active",
});

const TableTwoData = [
  { name: 'Google', visitors: '3.5K', revenue: '$5,768', sales: 590, conversion: '4.8%', icon: <FaGoogle className="text-lg" /> },
  { name: 'Twitter', visitors: '2.2K', revenue: '$4,835', sales: 467, conversion: '4.3%', icon: <FaTwitter className="text-lg" /> },
  { name: 'Github', visitors: '2.1K', revenue: '$4,290', sales: 420, conversion: '3.7%', icon: <FaGithub className="text-lg" /> },
  { name: 'Vimeo', visitors: '1.5K', revenue: '$3,580', sales: 389, conversion: '2.5%', icon: <FaVimeo className="text-lg" /> },
  { name: 'Vimeo', visitors: '1.5K', revenue: '$3,580', sales: 389, conversion: '2.5%', icon: <FaVimeo className="text-lg" /> },
];



const SampleFirstPage = () => {
  return (
    <div className="flex min-h-screen">{/* <div className="flex h-screen"> */}
        <Sidebar />
        <div className="flex-1 flex flex-col">
            <Topbar pageTitle="Sample First Page" />
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

                {/* Top cards */}
                <div className="mt-6 flex md:grid-cols-2 xl:grid-cols-5 gap-4">
                    <Card title="Another card" value="450" subtitle="Wed, Jul 20" change="10.6%" changeType="down" />
                    <Card title="Another card" value="234" subtitle="143 Orders" change="3.0%" changeType="down" />
                    <Card title="Another card" value="20" subtitle="32k Sales" change="3.2%" changeType="up" />
                    <Card title="Another card" value="5" subtitle="$32.48 Average Order" />
                </div>
                
                {/* New List */}
                <Table
                  title="New List"
                  subtitle="Download and see your new list and their details."
                  data={dummyData.slice(0, 5)}
                  actions={true}
                  pagination={true}
                  columns={[
                    { header: "Name", accessor: "name" },
                    { header: "Email", accessor: "email" },
                    { header: "Business Name", accessor: "business" },
                    { header: "Phone Number", accessor: "phone" },
                  ]}
                />
                
                {/* All List */}
                <Table
                  title="All List"
                  subtitle="Download and see your all list and their details."
                  data={dummyData}
                  download={true}
                  // status={true}
                  pagination={true}
                  columns={[
                    { header: "Name", accessor: "name" },
                    { header: "Email", accessor: "email" },
                    { header: "Business Name", accessor: "business" },
                    { header: "Payment", accessor: "payment" },
                    {
                      header: "Status",
                      render: (row) => (
                        <span
                          className={`px-3 py-1 rounded-full text-white text-xs font-semibold ${
                            row.status === "Active"
                              ? "bg-green-600"
                              : row.status === "Pending"
                              ? "bg-purple-600"
                              : "bg-red-600"
                          }`}
                        >
                          {row.status}
                        </span>
                      ),
                    },
                  ]}
                />
            </div>
        </div>
    </div>
    
  );
};

export default SampleFirstPage;







