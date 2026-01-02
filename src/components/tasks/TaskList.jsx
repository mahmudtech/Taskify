import NoTaskFound from "../ui/NoTaskFound";
import TaskActions from "./TaskActions";
import TaskCard from "./TaskCard";
import TaskFilter from "./TaskFilter";

export default function TaskList({
  tasks,
  onChecked,
  total,
  completedDone,
  onDelete,
}) {
  return (
    <div className="lg:col-span-2">
      <TaskActions total={total} completedDone={completedDone} />
      <TaskFilter />
      {tasks.length > 0 ? (
        <>
          {" "}
          {tasks.map((task, idx) => (
            <TaskCard
              key={idx}
              task={task}
              onChecked={onChecked}
              onDelete={onDelete}
            />
          ))}
        </>
      ) : (
        <>
          <NoTaskFound />
        </>
      )}
    </div>
  );
}
