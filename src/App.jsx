import { useState } from "react";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import TaskBoard from "./components/tasks/TaskBoard";

export default function App() {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Implement user authentication",
    description: "Create login and registration pages with JWT token support",
    tags: ["Tech", "Security"],
    priority: "High Priority",
    isCompleted: true,
    date: new Date(),
  };
  const [tasks, setTasks] = useState([defaultTask]);
  const [searchText, setSearchText] = useState("");

  const handleOnChecked = (id) => {
    console.log(id);
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
  return (
    <div>
      <Header searchText={searchText} setSearchText={setSearchText} />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <TaskBoard
            tasks={searchItem}
            onChecked={handleOnChecked}
            addTask={handleAddTask}
            total={total}
            completedDone={completedDone}
            highPriorityCount={highPriorityCount}
            deleteAll={handleDeleteAll}
            onDelete={handleDeleteTask}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
