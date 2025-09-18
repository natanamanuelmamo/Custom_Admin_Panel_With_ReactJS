// import React from "react";
// import { FaSearch } from "react-icons/fa";

// const Table = ({
//   title,
//   subtitle,
//   data,
//   columns,
//   actions = false,
//   pagination = false,
//   download = false,
// }) => (
//   <div className="bg-white shadow-md rounded-xl p-4 w-full mt-6">
//     {/* Header */}
//     <div className="flex items-center justify-between mb-4">
//       <div>
//         <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
//         {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
//       </div>
//       <div className="flex gap-2 items-center">
//         {/* Search */}
//         <div className="relative">
//           <input
//             type="text"
//             placeholder="Search anything here..."
//             className="pl-4 pr-8 py-2 text-gray-400 bg-gray-100 rounded-full text-sm outline-none"
//           />
//           <FaSearch className="absolute right-3 top-2.5 text-gray-400 text-sm" />
//         </div>
//         {download && (
//           <button className="bg-[#5225D0] text-white text-sm px-4 py-2 rounded-full">
//             Download all
//           </button>
//         )}
//       </div>
//     </div>

//     {/* Table */}
//     <div className="overflow-x-auto">
//       <table className="w-full text-sm">
//         <thead>
//           <tr className="text-center border-b-2 border-gray-200 text-gray-600 hover:bg-gray-100">
//             {columns.map((col, idx) => (
//               <th key={idx} className="py-4">{col.header}</th>
//             ))}
//             {actions && <th>Actions</th>}
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((row, idx) => (
//             <tr
//               key={idx}
//               className="border-t border-gray-100 text-gray-700 hover:bg-gray-50 text-center"
//             >
//               {columns.map((col, cidx) => (
//                 <td key={cidx} className="py-4 px-2">
//                   {col.render ? col.render(row) : row[col.accessor]}
//                 </td>
//               ))}
//               {actions && (
//                 <td className="py-4">
//                   <div className="flex justify-center gap-2">
//                     <button className="bg-green-700 text-white text-xs px-3 py-1 rounded">
//                       Active
//                     </button>
//                     <button className="bg-red-700 text-white text-xs px-3 py-1 rounded">
//                       Reject
//                     </button>
//                   </div>
//                 </td>
//               )}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>

//     {/* Pagination */}
//     {pagination && (
//       <div className="flex items-center justify-end gap-2 mt-8 text-sm text-gray-600">
//         <span>Showing 1 to 10 of {data.length} entries</span>
//         <div className="flex items-center gap-2 ml-4">
//           {[1, 2, 3, 4, 5].map((p) => (
//             <button
//               key={p}
//               className={`w-7 h-7 rounded-full ${
//                 p === 1 ? "bg-[#5225D0] text-white" : "bg-gray-100"
//               }`}
//             >
//               {p}
//             </button>
//           ))}
//         </div>
//       </div>
//     )}
//   </div>
// );

// export default Table;











import React from "react";
import { FaSearch } from "react-icons/fa";

export const Table = ({
  title,
  subtitle,
  data,
  columns,
  actions = false,
  pagination = false,
  download = false,
}) => (
  <div className="bg-white shadow-md rounded-xl p-4 w-full mt-6">
    {/* Header */}
    <div className="flex items-center justify-between mb-4">
      <div className="justify-items-start">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
      </div>
      <div className="flex gap-2 items-center">
        {/* Search */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search anything here..."
            className="pl-4 pr-8 py-2 text-gray-400 bg-gray-100 rounded-full text-sm outline-none"
          />
          <FaSearch className="absolute right-3 top-2.5 text-gray-400 text-sm" />
        </div>
        {download && (
          <button className="bg-[#5225D0] text-white text-sm px-4 py-2 rounded-full">
            Download all
          </button>
        )}
      </div>
    </div>

    {/* Table */}
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-center border-b-2 border-gray-200 text-gray-600 hover:bg-gray-100">
            {columns.map((col, idx) => (
              <th key={idx} className="py-4">{col.header}</th>
            ))}
            {actions && <th>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr
              key={idx}
              className="border-t border-gray-100 text-gray-700 hover:bg-gray-50 text-center"
            >
              {columns.map((col, cidx) => (
                <td key={cidx} className="py-6 px-2">
                  {col.render ? col.render(row) : row[col.accessor]}
                </td>
              ))}
              {actions && (
                <td className="py-4">
                  <div className="flex justify-center gap-2">
                    <button className="bg-green-700 text-white text-xs px-3 py-1 rounded">
                      Active
                    </button>
                    <button className="bg-red-700 text-white text-xs px-3 py-1 rounded">
                      Reject
                    </button>
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Pagination */}
    {pagination && (
      <div className="flex items-center justify-end gap-2 mt-8 text-sm text-gray-600">
        <span>Showing 1 to 10 of {data.length} entries</span>
        <div className="flex items-center gap-2 ml-4">
          {[1, 2, 3, 4, 5].map((p) => (
            <button
              key={p}
              className={`w-7 h-7 rounded-full ${
                p === 1 ? "bg-[#5225D0] text-white" : "bg-gray-100"
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>
    )}
  </div>
);


export const TableTwo = ({ title, data }) => (
  <div className="bg-white shadow-lg rounded-xl p-4 w-full mt-6">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="bg-gray-200 mb-2 py-3">
          <tr className="text-center text-gray-600 border-b-2 border-gray-300 hover:bg-gray-100">
            <th className="py-4">Source</th>
            <th>Visitors</th>
            <th>Revenues</th>
            <th>Sales</th>
            <th>Conversion</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => (
            <tr key={idx} className="border-t border-gray-100 text-gray-700 hover:bg-gray-50">
              <td className="py-6 flex items-center gap-2">{item.icon} {item.name}</td>
              <td>{item.visitors}</td>
              <td className="text-green-600">{item.revenue}</td>
              <td>{item.sales}</td>
              <td className="text-blue-500">{item.conversion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className="flex justify-end">
      <button className="mt-4 text-sm text-white bg-[#5225D0] px-4 py-2 rounded-full">
        See more
      </button>
    </div>
  </div>
);





// import React from "react";
// import { FaSearch } from "react-icons/fa";

// export const Table = ({
//   title,
//   subtitle,
//   data,
//   columns,
//   actions = false,
//   status = false,
//   pagination = false,
//   download = false,
// }) => (
//   <div className="bg-white shadow-md rounded-xl p-4 w-full mt-6">
//     {/* Header */}
//     <div className="flex items-center justify-between mb-4">
//       <div>
//         <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
//         {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
//       </div>
//       <div className="flex gap-2 items-center">
//         {/* Search */}
//         <div className="relative">
//           <input
//             type="text"
//             placeholder="Search anything here..."
//             className="pl-4 pr-8 py-2 text-gray-400 bg-gray-100 rounded-full text-sm outline-none"
//           />
//           <FaSearch className="absolute right-3 top-2.5 text-gray-400 text-sm" />
//         </div>
//         {download && (
//           <button className="bg-[#5225D0] text-white text-sm px-4 py-2 rounded-full">
//             Download all
//           </button>
//         )}
//       </div>
//     </div>

//     {/* Table */}
//     <div className="overflow-x-auto">
//       <table className="w-full text-sm">
//         <thead>
//           <tr className="text-center border-b-2 border-gray-200 text-gray-600 hover:bg-gray-100">
//             {columns.map((col, idx) => (
//               <th key={idx} className="py-4">{col.header}</th>
//             ))}
//             {actions && <th>Actions</th>}
//             {status && <th>Status</th>}
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((row, idx) => (
//             <tr
//               key={idx}
//               className="border-t border-gray-100 text-gray-700 hover:bg-gray-50 text-center"
//             >
//               {columns.map((col, cidx) => (
//                 <td key={cidx} className="py-4 px-2">
//                   {col.render ? col.render(row) : row[col.accessor]}
//                 </td>
//               ))}
//               {actions && (
//                 <td className="py-4">
//                   <div className="flex justify-center gap-2">
//                     <button className="bg-green-700 text-white text-xs px-3 py-1 rounded">
//                       Active
//                     </button>
//                     <button className="bg-red-700 text-white text-xs px-3 py-1 rounded">
//                       Reject
//                     </button>
//                   </div>
//                 </td>
//               )}
//               {status && (
//                 <td>
//                   <span
//                     className={`px-3 py-1 rounded-full text-white text-xs font-semibold ${
//                       row.status === "Active"
//                         ? "bg-green-600"
//                         : adv.status === "Pending"
//                         ? "bg-purple-600"
//                         : "bg-red-600"
//                     }`}
//                   >
//                     {row.status}
//                   </span>
//                </td>
//               )}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>

//     {/* Pagination */}
//     {pagination && (
//       <div className="flex items-center justify-end gap-2 mt-8 text-sm text-gray-600">
//         <span>Showing 1 to 10 of {data.length} entries</span>
//         <div className="flex items-center gap-2 ml-4">
//           {[1, 2, 3, 4, 5].map((p) => (
//             <button
//               key={p}
//               className={`w-7 h-7 rounded-full ${
//                 p === 1 ? "bg-[#5225D0] text-white" : "bg-gray-100"
//               }`}
//             >
//               {p}
//             </button>
//           ))}
//         </div>
//       </div>
//     )}
//   </div>
// );


// export const TableTwo = ({ title, data }) => (
//   <div className="bg-white shadow-lg rounded-xl p-4 w-full mt-6">
//     <div className="flex justify-between items-center mb-4">
//       <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
//     </div>
//     <div className="overflow-x-auto">
//       <table className="w-full text-sm">
//         <thead className="bg-gray-200 mb-2 py-3">
//           <tr className="text-center text-gray-600 border-b-2 border-gray-300 hover:bg-gray-100">
//             <th className="py-4">Source</th>
//             <th>Visitors</th>
//             <th>Revenues</th>
//             <th>Sales</th>
//             <th>Conversion</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((item, idx) => (
//             <tr key={idx} className="border-t border-gray-100 text-gray-700 hover:bg-gray-50">
//               <td className="py-6 flex items-center gap-2">{item.icon} {item.name}</td>
//               <td>{item.visitors}</td>
//               <td className="text-green-600">{item.revenue}</td>
//               <td>{item.sales}</td>
//               <td className="text-blue-500">{item.conversion}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//     <div className="flex justify-end">
//       <button className="mt-4 text-sm text-white bg-[#5225D0] px-4 py-2 rounded-full">
//         See more
//       </button>
//     </div>
//   </div>
// );
