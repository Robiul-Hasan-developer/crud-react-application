import { SquarePen, Star, Trash } from "lucide-react";

const TaskList = ({
  tasks,
  onHandleDeleteItem,
  onHandleIsFavorite,
  onHandleEditTask,
}) => {
  return (
    <>
      <table className="table-fixed xl:w-full">
        <thead>
          <tr>
            <th className="py-5 px-4 font-semibold capitalize text-base bg-neutral-200 text-start w-[48px]"></th>
            <th className="py-5 px-4 font-semibold capitalize text-base bg-neutral-200 text-start">
              Title
            </th>
            <th className="py-5 px-4 font-semibold capitalize text-base bg-neutral-200 text-start">
              Description
            </th>
            <th className="py-5 px-4 font-semibold capitalize text-base bg-neutral-200 text-center w-[300px]">
              Tags
            </th>
            <th className="py-5 px-4 font-semibold capitalize text-base bg-neutral-200 text-start w-[120px]">
              Priority
            </th>
            <th className="py-5 px-4 font-semibold capitalize text-base bg-neutral-200 text-start">
              Options
            </th>
          </tr>
        </thead>
      </table>

      <div className="overflow-auto max-h-[400px]">
        <table className="table-fixed overflow-auto xl:w-full">
          {/* <thead>
            <tr>
              <th className="py-5 px-4 font-semibold capitalize text-base bg-neutral-200 text-start w-[48px]"></th>
              <th className="py-5 px-4 font-semibold capitalize text-base bg-neutral-200 text-start ">
                Title
              </th>
              <th className="py-5 px-4 font-semibold capitalize text-base bg-neutral-200 text-start">
                Description
              </th>
              <th className="py-5 px-4 font-semibold capitalize text-base bg-neutral-200 text-center w-[300px]">
                Tags
              </th>
              <th className="py-5 px-4 font-semibold capitalize text-base bg-neutral-200 text-start w-[120px]">
                Priority
              </th>
              <th className="py-5 px-4 font-semibold capitalize text-base bg-neutral-200 text-start ">
                Options
              </th>
            </tr>
          </thead> */}

          <tbody className="max-h-[300px] overflow-y-auto">
            {tasks.map((task) => (
              <tr
                key={task.id}
                className="border-b border-neutral-300 [&>td]:align-baseline [&>td]:px-4 [&>td]:py-5"
              >
                {/* Star */}
                <td className="!align-middle text-start">
                  <button
                    type="button"
                    onClick={() => onHandleIsFavorite(task.id)}
                  >
                    {task.isFavorite ? (
                      <Star
                        className="size-5 text-yellow-500"
                        fill="currentColor"
                      />
                    ) : (
                      <Star
                        className="size-5 text-neutral-500"
                        fill="currentColor"
                      />
                    )}
                  </button>
                </td>

                {/* Title */}
                <td className="!align-middle text-start">{task.title}</td>

                {/* Description */}
                <td className="!align-middle text-start">
                  <div>{task.description}</div>
                </td>

                {/* Tags */}
                <td className="!align-middle !py-5 px-4">
                  <ul className="flex justify-center gap-1.5 flex-wrap">
                    {task.tags.map((tag, index) => (
                      <li key={index}>
                        <span className="inline-block whitespace-nowrap rounded-[50rem] bg-blue-600 py-[3px] px-4 text-sm capitalize text-white">
                          {tag}
                        </span>
                      </li>
                    ))}
                  </ul>
                </td>

                {/* Priority */}
                <td className="!align-middle text-start">
                  <span
                    className={`px-4 py-1 text-sm font-semibold rounded flex justify-center capitalize
                      ${
                        task.priority === "high" &&
                        "text-green-600 bg-green-100"
                      }
                      ${
                        task.priority === "medium" &&
                        "text-purple-600 bg-purple-100"
                      }
                      ${task.priority === "low" && "text-red-600 bg-red-100"}
                    `}
                  >
                    {task.priority}
                  </span>
                </td>

                {/* Action Buttons */}
                <td className="!align-middle !py-5 px-4">
                  <div className="flex items-center justify-center space-x-3">
                    <button
                      className="w-8 h-8 rounded-[6px] flex justify-center items-center text-white active:scale-95 bg-red-500 hover:bg-red-600"
                      onClick={() => onHandleDeleteItem(task.id)}
                    >
                      <Trash className="size-[18px]" />
                    </button>

                    <button
                      className="w-8 h-8 rounded-[6px] flex justify-center items-center text-white active:scale-95 bg-blue-500 hover:bg-blue-600"
                      onClick={() => onHandleEditTask(task)}
                    >
                      <SquarePen className="size-[18px]" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TaskList;