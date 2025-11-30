import { useState } from "react";
import AddEditModal from "./AddEditModal";
import NoDataFound from "./NoDataFound";
import Overlay from "./Overlay";
import SearchForm from "./SearchForm";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";

const defaultTasks = [
  {
    id: 1,
    title: "Integration API",
    description: "Connect an existing API to external database securely.",
    tags: ["Web", "Python", "API"],
    priority: "High",
    isFavorite: false
  },
];

const TaskBoard = () => {
  const [tasks, setTasks] = useState(defaultTasks);
  const [showModal, setShowModal] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);


  // Handle Show Modal function
  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  // Handle Remove Modal function
  const handleRemoveModal = () => {
    setShowModal(false);
  };

 // Handle Add New Task function
  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
    setShowModal(false);
  };


  // Handle Item delete function
  const handleDeleteItem = (itemId) => {
    setTasks(
      tasks.filter((newTask) => newTask.id !== itemId)
    )
  }

  // Handle delete all item function
  const handleDeleteAllItem = () => {
    setTasks([]);
    // tasks.length = 0;
    // setTasks([...tasks]);
  }

  // Handle is favorite toggle function
  const handleIsFavorite = () => {
    setIsFavorite(!isFavorite)
  }

  return (
    <>
      {showModal && <Overlay onHandleRemoveModal={handleRemoveModal} />}
      {showModal && (
        <AddEditModal
          onHandleAddTask={handleAddTask}
          onHandleRemoveModal={handleRemoveModal}
        />
      )}

      <section className="mb-20" id="tasks">
        <div className="container">
          <SearchForm />

          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-white shadow-xl border border-neutral-200 px-6 py-8 md:px-9 md:py-10">
            <TaskAction onHandleShowModal={handleShowModal} onHandleDeleteAllItem={handleDeleteAllItem} />

            {
             tasks.length > 0 ? (
              <TaskList tasks={tasks} onHandleDeleteItem={handleDeleteItem} onHandleIsFavorite={handleIsFavorite} isFavorite={isFavorite} />
              )  :  <NoDataFound />
            }
          </div>
        </div>
      </section>
    </>
  );
};

export default TaskBoard;
