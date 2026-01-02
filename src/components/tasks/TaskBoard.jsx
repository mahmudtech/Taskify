import AddTask from "./AddTask";
import TaskList from "./TaskList";

export default function TaskBoard({ tasks, onChecked, addTask }) {
  return (
    <>
      <AddTask addTask={addTask} />
      <TaskList tasks={tasks} onChecked={onChecked} />
    </>
  );
}
