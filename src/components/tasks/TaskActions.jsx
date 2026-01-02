export default function TaskActions({ total, completedDone }) {
  return (
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-bold text-gray-800">Task List</h2>
      <div className="text-sm text-gray-600">
        <span className="font-medium">{total} tasks</span> |
        <span className="text-green-600">{completedDone} completed</span>
      </div>
    </div>
  );
}
