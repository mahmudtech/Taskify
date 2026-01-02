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
    isCompleted: false,
    date: new Date(),
  };
  const [tasks, setTasks] = useState([defaultTask]);

  const handleOnChecked = (id) => {
    console.log(id);
  };

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };
  return (
    <div>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <TaskBoard
            tasks={tasks}
            onChecked={handleOnChecked}
            addTask={handleAddTask}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
