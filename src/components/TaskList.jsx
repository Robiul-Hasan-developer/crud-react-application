// import { SquarePen, Trash } from "lucide-react";

// const TaskList = () => {
//   return (
//     <div className="overflow-auto">
//       <table className="table-fixed overflow-auto xl:w-full">
//         <thead>
//           <tr>
//             <th className="py-5 px-4 font-semibold capitalize text-base bg-neutral-200 text-start w-[48px]"></th>
//             <th className="py-5 px-4 font-semibold capitalize text-base bg-neutral-200 text-start w-[300px]">
//               {" "}
//               Title{" "}
//             </th>
//             <th className="py-5 px-4 font-semibold capitalize text-base bg-neutral-200 text-start w-full">
//               {" "}
//               Description{" "}
//             </th>
//             <th className="py-5 px-4 font-semibold capitalize text-base bg-neutral-200 text-center md:w-[350px]">
//               {" "}
//               Tags{" "}
//             </th>
//             <th className="py-5 px-4 font-semibold capitalize text-base bg-neutral-200 text-start md:w-[100px]">
//               {" "}
//               Priority{" "}
//             </th>
//             <th className="py-5 px-4 font-semibold capitalize text-base bg-neutral-200 text-start md:w-[140px]">
//               {" "}
//               Options{" "}
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr className="border-b border-neutral-300 [&amp;&gt;td]:align-baseline [&amp;&gt;td]:px-4 [&amp;&gt;td]:py-2">
//             <td className="py-5 px-4 text-start">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="icon icon-tabler icon-tabler-star"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 strokeWidth="2"
//                 stroke="yellow"
//                 fill="yellow"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
//                 <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
//               </svg>
//             </td>
//             <td className="py-5 px-4 text-start">Integration API</td>
//             <td className="py-5 px-4 text-start">
//               <div>
//                 Connect an existing API to a third-party database using secure
//                 methods and handle data exchange efficiently.
//               </div>
//             </td>
//             <td className="py-5 px-4 text-start">
//               <ul className="flex justify-center gap-1.5 flex-wrap">
//                 <li>
//                   <span className="inline-block whitespace-nowrap rounded-[50rem] bg-blue-600 py-[3px] px-4 text-sm capitalize text-white">
//                     Web
//                   </span>
//                 </li>
//                 <li>
//                   <span className="inline-block whitespace-nowrap rounded-[50rem] bg-blue-600 py-[3px] px-4 text-sm capitalize text-white">
//                     Python
//                   </span>
//                 </li>
//                 <li>
//                   <span className="inline-block whitespace-nowrap rounded-[50rem] bg-blue-600 py-[3px] px-4 text-sm capitalize text-white">
//                     API
//                   </span>
//                 </li>
//               </ul>
//             </td>
//             <td className="py-5 px-4 text-start">High</td>
//             <td className="py-5 px-4 text-start">
//               <div className="flex items-center justify-center space-x-3">
//                 <button className="text-base w-10 h-10 rounded-[6px] flex justify-center items-center text-white bg-red-500 hover:bg-red-600">
//                   <Trash />
//                 </button>
//                 <button className="text-base w-10 h-10 rounded-[6px] flex justify-center items-center text-white bg-blue-500 hover:bg-blue-600">
//                   <SquarePen />
//                 </button>
//               </div>
//             </td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default TaskList;




import { SquarePen, Trash } from "lucide-react";

const TaskList = ({ tasks }) => {
  return (
    <div className="overflow-auto">
      <table className="table-fixed overflow-auto xl:w-full">
        <thead>
          <tr>
            <th className="py-5 px-4 font-semibold capitalize text-base bg-neutral-200 text-start w-[48px]"></th>
            <th className="py-5 px-4 font-semibold capitalize text-base bg-neutral-200 text-start w-[300px]">
              Title
            </th>
            <th className="py-5 px-4 font-semibold capitalize text-base bg-neutral-200 text-start w-full">
              Description
            </th>
            <th className="py-5 px-4 font-semibold capitalize text-base bg-neutral-200 text-center md:w-[350px]">
              Tags
            </th>
            <th className="py-5 px-4 font-semibold capitalize text-base bg-neutral-200 text-start md:w-[100px]">
              Priority
            </th>
            <th className="py-5 px-4 font-semibold capitalize text-base bg-neutral-200 text-start md:w-[140px]">
              Options
            </th>
          </tr>
        </thead>

        <tbody>
          {tasks.map((task) => (
            <tr
              key={task.id}
              className="border-b border-neutral-300 [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2"
            >
              {/* Star */}
              <td className="!align-middle !py-5 px-4 text-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-star"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="yellow"
                  fill="yellow"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
                </svg>
              </td>

              {/* Title */}
              <td className="!align-middle !py-5 px-4 text-start">{task.title}</td>

              {/* Description */}
              <td className="!align-middle !py-5 px-4 text-start">
                <div>{task.description}</div>
              </td>

              {/* Tags */}
              {/* <td className="!align-middle !py-5 px-4">
                <ul className="flex justify-center gap-1.5 flex-wrap">
                  {task.tags.map((tag, index) => (
                    <li key={index}>
                      <span className="inline-block whitespace-nowrap rounded-[50rem] bg-blue-600 py-[3px] px-4 text-sm capitalize text-white">
                        {tag}
                      </span>
                    </li>
                  ))}
                </ul>
              </td> */}
                <td className="!align-middle !py-5 px-4 text-start">{task.tags}</td>
              

              {/* Priority */}
              <td className="!align-middle !py-5 px-4 text-start">{task.priority}</td>

              {/* Action Buttons */}
              <td className="!align-middle !py-5 px-4">
                <div className="flex items-center justify-center space-x-3">
                  <button
                    className="text-base w-10 h-10 rounded-[6px] flex justify-center items-center text-white bg-red-500 hover:bg-red-600"
                  >
                    <Trash />
                  </button>

                  <button
                    className="text-base w-10 h-10 rounded-[6px] flex justify-center items-center text-white bg-blue-500 hover:bg-blue-600"
                  >
                    <SquarePen />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
