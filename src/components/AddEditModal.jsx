import { X } from "lucide-react";
import { useState } from "react";

const AddEditModal = ({ onHandleAddTask, onHandleRemoveModal }) => {
  const [task, setTask] = useState({
    id: crypto.randomUUID(),
    title: "",
    description: "",
    tags: [],
    priority: "",
    isFavorite: false,
  });

  const handleChange = (evt) => {
    const name = evt.target.name;
    let value = evt.target.value;

    setTask({
      ...task,
      [name]: value,
    });
  };

  return (
    <div className="w-full max-w-[740px] rounded-xl  bg-[#191D26] p-9 max-md:px-4 lg:p-11 fixed top-[50%] start-[50%] -translate-x-[50%] -translate-y-[50%] z-[99]">
      <button
        type="button"
        className="absolute text-white end-6 top-6 hover:rotate-90 duration-300 hover:scale-[1.4] z-10"
        onClick={onHandleRemoveModal}
      >
        <X className="size-8" />
      </button>

      <form
        action="#"
        onSubmit={(e) => {
          e.preventDefault();
          onHandleAddTask(task);
        }}
      >
        {/* <form action="#"> */}
        <h2 className="mb-8 text-center text-2xl font-bold text-white lg:mb-8 lg:text-[28px]">
          Add New Task
        </h2>
        {/* inputs */}
        <div className="space-y-9 text-white lg:space-y-10">
          {/* title */}
          <div className="space-y-2 lg:space-y-3">
            <label className="mb-2 font-medium block" htmlFor="title">
              Title
            </label>
            <input
              className="block w-full rounded-md bg-[#2D323F] border border-white/25 border-[1px] !outline-0 px-3 py-2.5"
              type="text"
              name="title"
              id="title"
              onChange={handleChange}
              value={task.title}
              placeholder="Enter title here"
              required
            />
          </div>
          {/* description */}
          <div className="space-y-2 lg:space-y-3">
            <label className="mb-2 font-medium block" htmlFor="description">
              Description
            </label>
            <textarea
              className="block min-h-[120px] w-full rounded-md bg-[#2D323F] border border-white/25 border-[1px] !outline-0 px-3 py-2.5 lg:min-h-[180px]"
              type="text"
              name="description"
              id="description"
              onChange={handleChange}
              value={task.description}
              placeholder="Enter description here"
              required
            ></textarea>
          </div>
          {/* input group */}
          <div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
            {/* tags */}
            <div className="space-y-2 lg:space-y-3">
              <label className="mb-2 font-medium block" htmlFor="tags">
                Tags
              </label>
              <input
                className="block w-full rounded-md bg-[#2D323F] border border-white/25 border-[1px] !outline-0 px-3 py-2.5"
                type="text"
                name="tags"
                id="tags"
                onChange={handleChange}
                value={task.tags}
                placeholder="Enter tags here"
                required
              />
            </div>
            {/* priority */}
            <div className="space-y-2 lg:space-y-3">
              <label className="mb-2 font-medium block" htmlFor="priority">
                Priority
              </label>
              <select
                className="block w-full cursor-pointer rounded-md bg-[#2D323F] border border-white/25 border-[1px] !outline-0 px-3 py-2.5"
                name="priority"
                id="priority"
                onChange={handleChange}
                value={task.priority}
                required
              >
                <option value="">Select Priority</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>
        </div>
        {/* inputs ends */}
        <div className="mt-16 flex justify-center lg:mt-20">
          <button
            type="submit"
            className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
            // onClick={() => onHandleAddTask(task)}
          >
            Create new Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEditModal;
