// import React, { useState } from "react";
// import { Switch } from "@headlessui/react";
// import Sidebar from '../../components/Sidebar';
// import Topbar from '../../components/Topbar';

// const SettingsPage = () => {
//   const [notifications, setNotifications] = useState({
//     email: true,
//     sms: false,
//   });

//   const [darkMode, setDarkMode] = useState(false);

//   return (
//     <div className="flex min-h-screen">
//         <Sidebar />
//         <div className="flex-1 flex flex-col">
//             <Topbar pageTitle="Settings" />
//             <div className="p-8 text-white bg-[#1E1B2E] min-h-screen">
//               {/* <h1 className="text-2xl font-semibold mb-6 text-[#A98BFE]">Settings</h1> */}

//               {/* Account Settings */}
//               <section className="bg-[#2B2738] rounded-xl p-6 mb-6">
//                 <h2 className="text-lg font-semibold mb-4">Account Settings</h2>
//                 <div className="flex items-center gap-4 mb-4">
//                   <img
//                     src="/profile.jpg"
//                     alt="Profile"
//                     className="w-20 h-20 rounded-full object-cover"
//                   />
//                   <button className="bg-[#A98BFE] hover:bg-[#9a7dfd] text-white px-4 py-2 rounded-full text-sm">
//                     Change
//                   </button>
//                 </div>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <input
//                     type="text"
//                     placeholder="Full Name"
//                     className="bg-[#1E1B2E] p-3 rounded-md w-full border border-[#3a3650] focus:outline-none"
//                   />
//                   <input
//                     type="email"
//                     placeholder="Email Address"
//                     className="bg-[#1E1B2E] p-3 rounded-md w-full border border-[#3a3650] focus:outline-none"
//                   />
//                 </div>
//                 <button className="mt-4 bg-[#A98BFE] hover:bg-[#9a7dfd] text-white px-6 py-2 rounded-full text-sm">
//                   Save
//                 </button>
//               </section>

//               {/* Change Password */}
//               <section className="bg-[#2B2738] rounded-xl p-6 mb-6">
//                 <h2 className="text-lg font-semibold mb-4">Change Password</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                   <input
//                     type="password"
//                     placeholder="Current Password"
//                     className="bg-[#1E1B2E] p-3 rounded-md w-full border border-[#3a3650] focus:outline-none"
//                   />
//                   <input
//                     type="password"
//                     placeholder="New Password"
//                     className="bg-[#1E1B2E] p-3 rounded-md w-full border border-[#3a3650] focus:outline-none"
//                   />
//                   <input
//                     type="password"
//                     placeholder="Confirm Password"
//                     className="bg-[#1E1B2E] p-3 rounded-md w-full border border-[#3a3650] focus:outline-none"
//                   />
//                 </div>
//                 <button className="mt-4 bg-[#A98BFE] hover:bg-[#9a7dfd] text-white px-6 py-2 rounded-full text-sm">
//                   Save Changes
//                 </button>
//               </section>

//               {/* Notification Preferences */}
//               <section className="bg-[#2B2738] rounded-xl p-6 mb-6">
//                 <h2 className="text-lg font-semibold mb-4">Notification Preferences</h2>
//                 <div className="space-y-4">
//                   {Object.entries(notifications).map(([key, value]) => (
//                     <div key={key} className="flex items-center justify-between">
//                       <span className="capitalize">{key} Notifications</span>
//                       <Switch
//                         checked={value}
//                         onChange={(val) =>
//                           setNotifications({ ...notifications, [key]: val })
//                         }
//                         className={`${
//                           value ? "bg-[#A98BFE]" : "bg-gray-600"
//                         } relative inline-flex h-6 w-11 items-center rounded-full transition`}
//                       >
//                         <span
//                           className={`${
//                             value ? "translate-x-6" : "translate-x-1"
//                           } inline-block h-4 w-4 transform rounded-full bg-white transition`}
//                         />
//                       </Switch>
//                     </div>
//                   ))}
//                 </div>
//               </section>

//               {/* Other Settings */}
//               <section className="bg-[#2B2738] rounded-xl p-6 mb-6">
//                 <h2 className="text-lg font-semibold mb-4">Other Settings</h2>
//                 <div className="flex items-center justify-between">
//                   <span>Dark Mode</span>
//                   <Switch
//                     checked={darkMode}
//                     onChange={setDarkMode}
//                     className={`${
//                       darkMode ? "bg-[#A98BFE]" : "bg-gray-600"
//                     } relative inline-flex h-6 w-11 items-center rounded-full transition`}
//                   >
//                     <span
//                       className={`${
//                         darkMode ? "translate-x-6" : "translate-x-1"
//                       } inline-block h-4 w-4 transform rounded-full bg-white transition`}
//                     />
//                   </Switch>
//                 </div>
//               </section>

//               {/* Delete Account */}
//               <section className="bg-[#2B2738] rounded-xl p-6">
//                 <h2 className="text-lg font-semibold mb-4 text-red-400">Delete Account</h2>
//                 <p className="mb-4 text-sm text-red-300">
//                   Warning: Deleting your account is irreversible. All data will be lost.
//                 </p>
//                 <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full text-sm">
//                   Delete Account
//                 </button>
//               </section>
//             </div>
//         </div>
//     </div>
//   );
// };

// export default SettingsPage;



















import React, { useState } from "react";
import { Switch } from "@headlessui/react";
import Sidebar from '../../components/Sidebar';
import Topbar from '../../components/Topbar';

const Settings = () => {
  const [notifications, setNotifications] = useState(true);
  const [newsletter, setNewsletter] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar pageTitle="Settings" />
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* LEFT COLUMN */}
            <div className="space-y-6">
              {/* Account Settings */}
              <section className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-semibold mb-4 text-[#2C234D]">Account Settings</h2>
                <div className="flex flex-col items-center gap-4">
                  <div className="flex flex-col items-center">
                    <img
                      src="/profile.jpg"
                      alt="Profile"
                      className="w-24 h-24 rounded-full object-cover"
                    />
                    <button className="mt-2 text-sm px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100">
                      Change
                    </button>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div>
                      <label className="text-sm text-gray-700">Full Name</label>
                      <input
                        type="text"
                        className="mt-1 w-full px-3 py-2 border rounded-md"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-gray-700">Email Address</label>
                      <input
                        type="email"
                        className="mt-1 w-full px-3 py-2 border rounded-md"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                </div>
                <button className="mt-4 px-4 py-2 bg-[#5225D0] text-white rounded-md hover:bg-[#4220b3]">
                  Save
                </button>
              </section>

              {/* Password Change */}
              <section className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-semibold mb-4 text-[#2C234D]">Password Change</h2>
                <div className="grid grid-cols-1 gap-4">
                  <input
                    type="password"
                    placeholder="Current Password"
                    className="px-3 py-2 border rounded-md"
                  />
                  <input
                    type="password"
                    placeholder="New Password"
                    className="px-3 py-2 border rounded-md"
                  />
                  <input
                    type="password"
                    placeholder="Confirm New Password"
                    className="px-3 py-2 border rounded-md"
                  />
                </div>
                <button className="mt-4 px-4 py-2 bg-[#5225D0] text-white rounded-md hover:bg-[#4220b3]">
                  Save Changes
                </button>
              </section>
            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-6">
              {/* Notification Preferences */}
              <section className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-semibold mb-4 text-[#2C234D]">Notification Preferences</h2>
                <div className="space-y-4">
                  {[
                    ["Email Notifications", notifications, setNotifications],
                    ["Weekly Newsletter", newsletter, setNewsletter],
                    ["Admin Alerts", false, () => {}],
                    ["Monthly Report", false, () => {}],
                  ].map(([label, state, setState], i) => (
                    <div className="flex justify-between items-center" key={i}>
                      <span>{label}</span>
                      <Switch
                        checked={state}
                        onChange={setState}
                        className={`${
                          state ? "bg-[#5225D0]" : "bg-gray-300"
                        } relative inline-flex h-6 w-11 items-center rounded-full transition`}
                      >
                        <span
                          className={`${
                            state ? "translate-x-6" : "translate-x-1"
                          } inline-block h-4 w-4 transform bg-white rounded-full transition`}
                        />
                      </Switch>
                    </div>
                  ))}
                </div>
              </section>

              {/* Other Settings */}
              <section className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-semibold mb-4 text-[#2C234D]">Other Settings</h2>
                <div className="flex justify-between items-center">
                  <span>Dark Mode</span>
                  <Switch
                    checked={darkMode}
                    onChange={setDarkMode}
                    className={`${
                      darkMode ? "bg-[#5225D0]" : "bg-gray-300"
                    } relative inline-flex h-6 w-11 items-center rounded-full transition`}
                  >
                    <span
                      className={`${
                        darkMode ? "translate-x-6" : "translate-x-1"
                      } inline-block h-4 w-4 transform bg-white rounded-full transition`}
                    />
                  </Switch>
                </div>
              </section>

              {/* Delete Account */}
              <section className="bg-white rounded-xl p-6 shadow-sm border border-red-200">
                <h2 className="text-xl font-semibold mb-2 text-red-600">Delete Account</h2>
                <p className="text-gray-600 mb-4 text-sm">
                  If you delete your account, you will permanently lose your profile.
                </p>
                <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
                  Delete Account
                </button>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
