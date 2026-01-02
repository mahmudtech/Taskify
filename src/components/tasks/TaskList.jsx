import TaskActions from "./TaskActions";
import TaskCard from "./TaskCard";
import TaskFilter from "./TaskFilter";

export default function TaskList({ tasks, onChecked, total, completedDone }) {
  return (
    <div className="lg:col-span-2">
      <TaskActions total={total} completedDone={completedDone} />
      <TaskFilter />
      {tasks.map((task, idx) => (
        <TaskCard key={idx} task={task} onChecked={onChecked} />
      ))}
    </div>
  );
}
