import TaskActions from "./TaskActions";
import TaskCard from "./TaskCard";
import TaskFilter from "./TaskFilter";

export default function TaskList() {
  return (
    <div class="lg:col-span-2">
      <TaskActions />
      <TaskFilter />

      {/* <!-- Task List --> */}
      {/* task list add */}
      
      <TaskCard />
    </div>
  );
}
