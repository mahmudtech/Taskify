import AddTask from "./AddTask";
import TaskList from "./TaskList";

export default function TaskBoard({
  tasks,
  onChecked,
  addTask,
  total,
  completedDone,
  highPriorityCount,
  deleteAll,
  onDelete,
  onEdit,
}) {
  return (
    <>
      <AddTask
        addTask={addTask}
        total={total}
        completedDone={completedDone}
        highPriorityCount={highPriorityCount}
        deleteAll={deleteAll}
      />
      <TaskList
        tasks={tasks}
        onChecked={onChecked}
        total={total}
        completedDone={completedDone}
        onDelete={onDelete}
        onEdit={onEdit}
      />
    </>
  );
}
