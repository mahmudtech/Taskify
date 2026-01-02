import TaskActions from "./TaskActions";
import TaskCard from "./TaskCard";
import TaskFilter from "./TaskFilter";

export default function TaskList({ tasks, onChecked }) {
  return (
    <div className="lg:col-span-2">
      <TaskActions />
      <TaskFilter />
      {tasks.map((task, idx) => (
        <TaskCard key={idx} task={task} onChecked={onChecked} />
      ))}
    </div>
  );
}
