const TaskAction = ({ onHandleShowModal, onHandleDeleteAllItem }) => {
  return (
    <div className="mb-6 items-center justify-between sm:flex">
      <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
      <div className="flex items-center space-x-5">
        <button
          className="rounded-md bg-blue-500 hover:bg-blue-600 active:scale-95 duration-100 px-8 py-3 text-base font-semibold text-white"
          onClick={onHandleShowModal}
        >
          Add Task
        </button>
        <button
          className="rounded-md bg-red-500 hover:bg-red-600 active:scale-95 duration-100 px-8 py-3 text-base font-semibold text-white"
          onClick={onHandleDeleteAllItem}
        >
          Delete All
        </button>
      </div>
    </div>
  );
};

export default TaskAction;
