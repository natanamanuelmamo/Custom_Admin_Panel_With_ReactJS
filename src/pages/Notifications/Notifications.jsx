import Sidebar from '../../components/Sidebar';
import Topbar from '../../components/Topbar';
import { FaCheckCircle, FaExclamationTriangle, FaTimesCircle, FaFlag, FaInfoCircle } from "react-icons/fa";

const notifications = [
  {
    type: "error",
    title: "Low Balance Alert!",
    message: "Your current balance is ETB 50.00. Please top up to avoid service interruption.",
    time: "2 hours ago",
    icon: <FaTimesCircle className="text-red-500 text-lg" />
  },
  {
    type: "error",
    title: "Payment Failed",
    message: "Your recent payment attempt for ETB 250.00 failed. Please try again.",
    time: "Yesterday",
    icon: <FaTimesCircle className="text-red-500 text-lg" />
  },
  {
    type: "info",
    title: "Your free trial has ended",
    message: "Your one month free trial has ended. Go ahead and subscribe to continue service.",
    time: "July 31, 2025",
    icon: <FaFlag className="text-yellow-500 text-lg" />
  },
  {
    type: "info",
    title: "Important Update: Server Maintenance",
    message: "Scheduled maintenance will occur on August 5th, 2025 from 2 AM to 4 AM EAT",
    time: "July 30, 2025",
    icon: <FaInfoCircle className="text-yellow-400 text-lg" />
  },
  {
    type: "success",
    title: "Created Successfully",
    message: "Your campaign New Year Promo 2026 has been launched.",
    time: "July 30, 2025",
    icon: <FaCheckCircle className="text-green-500 text-lg" />
  },
  {
    type: "success",
    title: "Payment Successful!",
    message: "Your deposit of ETB 1000.00 has been successfully processed.",
    time: "July 29, 2025",
    icon: <FaCheckCircle className="text-green-500 text-lg" />
  },
];

const Notifications = () => {
  return (
    <div className="flex min-h-screen">{/* <div className="flex h-screen"> */}
        <Sidebar />
        <div className="flex-1 flex flex-col">
            <Topbar pageTitle="Notifications" />
            <div className="p-6 min-h-screen text-white overflow-auto w-full">

                <div className="space-y-4">
                    {notifications.map((note, index) => (
                    <div
                        key={index}
                        className="bg-white p-4 rounded-lg shadow-sm flex items-start justify-between hover:bg-gray-100"
                    >
                        <div className="flex items-start space-x-3">
                            <div className="pt-1">{note.icon}</div>
                            <div className="justify-items-start">
                                <p className="font-semibold text-sm text-gray-900">{note.title}</p>
                                <p className="text-sm text-gray-600 mt-1">{note.message}</p>
                            </div>
                        </div>
                        <div className="text-sm text-gray-400">{note.time}</div>
                    </div>
                    ))}
                </div>
                
            </div>
        </div>
    </div>
  );
};

export default Notifications;




