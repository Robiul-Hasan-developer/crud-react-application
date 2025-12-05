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
  const [showModal, setShowModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  // Handle Show Modal function
  const handleShowModal = () => {
    setShowModal(!showModal);
  };


 // Handle Add New Task function
  const handleAddTask = (newTask, isAdd) => {
    if(isAdd) {
      setTasks([...tasks, newTask]);
    } else {
      setTasks(
        tasks.map((task) => {
          if(task.id == newTask.id) {
            return newTask
          }
          return task;
        })
      )
    }
    setShowModal(false);
  };


  // handle Edit Task
  const handleEditTask = (task) => {
    setTaskToUpdate(task)
    setShowModal(true);

    console.log(task);
  }


  
  // Handle Remove Modal function
  const handleRemoveModal = () => {
    setShowModal(false);
    setTaskToUpdate(null)
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
  const handleIsFavorite = (taskId) => {
    const taskIndex = tasks.findIndex((task) => task.id === taskId);

    const newTasks = [...tasks];
    newTasks[taskIndex].isFavorite = !newTasks[taskIndex].isFavorite
    
    setTasks(newTasks)
  }


  return (
    <>
      {showModal && <Overlay onHandleRemoveModal={handleRemoveModal} />}
      {showModal && (
        <AddEditModal
          onHandleAddTask={handleAddTask}
          onHandleRemoveModal={handleRemoveModal}
          taskToUpdate={taskToUpdate}
        />
      )}

      <section className="mb-20" id="tasks">
        <div className="container">
          <SearchForm />

          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-white shadow-xl border border-neutral-200 px-6 py-8 md:px-9 md:py-10">
            <TaskAction onHandleShowModal={handleShowModal} onHandleDeleteAllItem={handleDeleteAllItem} />

            {
             tasks.length > 0 ? (
              <TaskList 
              tasks={tasks} 
              onHandleEditTask={handleEditTask}
              onHandleDeleteItem={handleDeleteItem} 
              onHandleIsFavorite={handleIsFavorite} 
              />
              )  :  <NoDataFound />
            }
          </div>
        </div>
      </section>
    </>
  );
};

export default TaskBoard;
































/*
==================== Kow more details about this?
* event loop details.
* tell me details about mutable & immutable value.
* React component lifecycle
* How react restory redering component?
* how javascript execute the code
* deep copy & shallow copy
* cookie & sessionStorage -> Computer
* what exicutation context
* prototype
* HOC ki??
* hoisting ki??
* Redux??

=================== Aamke aro ki ki janete hobe =================
Javascript -> OOP -> Design Pattern -> 
 */