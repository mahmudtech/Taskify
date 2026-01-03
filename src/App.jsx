import { useState } from "react";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Modal from "./components/tasks/Modal";
import TaskBoard from "./components/tasks/TaskBoard";

export default function App() {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Implement user authentication",
    description: "Create login and registration pages with JWT token support",
    tags: ["Tech", "Security"],
    priority: "High Priority",
    isCompleted: false,
    date: new Date(),
  };
  const [tasks, setTasks] = useState([defaultTask]);
  const [searchText, setSearchText] = useState("");
  const [taskToUpdate, setTaskToUpdate] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("All");

  const displayTasks = tasks.filter((task) => {
    const matchesSearch = task.title
      .toLowerCase()
      .includes(searchText.toLowerCase());
    const matchesFilter =
      selectedFilter === "All" ||
      task.priority === selectedFilter ||
      task.tags.includes(selectedFilter);
    return matchesSearch && matchesFilter;
  });

  const handleOnChecked = (onCompleteId) => {
    const findIndex = tasks.findIndex((t) => t.id === onCompleteId);
    const newTask = [...tasks];
    newTask[findIndex].isCompleted = !newTask[findIndex].isCompleted;
    setTasks(newTask);
  };

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const total = tasks.length;
  const completedDone = tasks.filter((task) => task.isCompleted).length;
  const highPriorityCount = tasks.filter(
    (task) => task.priority === "High Priority"
  ).length;

  const searchItem = tasks.filter((t) =>
    t.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleDeleteAll = () => {
    tasks.length = 0;
    setTasks([...tasks]);
  };

  const handleDeleteTask = (deleteId) => {
    const affterDelete = tasks.filter((t) => t.id !== deleteId);
    setTasks(affterDelete);
  };

  const handleEditTask = (editTask) => {
    setShowModal(true);
    setTaskToUpdate(editTask);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setTaskToUpdate(null);
  };

  const handleOnSave = (updateTask) => {
    const editTasks = tasks.map((t) => {
      if (t.id === updateTask.id) {
        return updateTask;
      } else {
        return t;
      }
    });

    setTasks(editTasks);
    setShowModal(false);
    setTaskToUpdate(null);
  };
  return (
    <div>
      <Header searchText={searchText} setSearchText={setSearchText} />

      <main className="container mx-auto px-4 py-8">
        {showModal && (
          <Modal
            onCloseModal={handleCloseModal}
            taskToUpdate={taskToUpdate}
            onSave={handleOnSave}
          />
        )}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <TaskBoard
            tasks={displayTasks}
            onChecked={handleOnChecked}
            addTask={handleAddTask}
            total={total}
            completedDone={completedDone}
            highPriorityCount={highPriorityCount}
            deleteAll={handleDeleteAll}
            onDelete={handleDeleteTask}
            onEdit={handleEditTask}
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
