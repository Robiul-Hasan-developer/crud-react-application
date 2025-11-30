import { useState } from "react";
import AddEditModal from './AddEditModal';
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
  },
];


const TaskBoard = () => {
  const [tasks, setTasks] = useState(defaultTasks);
  const [showModal, setShowModal] = useState(true);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };
  
  const handleRemoveModal = () => {
    setShowModal(false);
  };

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  setShowModal(false);
	
	// setTasks([...tasks, newTask])
  };



  return (
    <>
      {showModal && <Overlay onHandleRemoveModal={handleRemoveModal} /> }
      {showModal && <AddEditModal onHandleAddTask={handleAddTask} onHandleRemoveModal={handleRemoveModal} /> }

      <section className="mb-20" id="tasks">
        <div className="container">
          <SearchForm />

          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-white shadow-xl border border-neutral-200 px-6 py-8 md:px-9 md:py-10">
            <TaskAction onHandleShowModal={handleShowModal} />

            <TaskList tasks={tasks} />
          </div>
        </div>
      </section>
    </>
  );
};

export default TaskBoard;
