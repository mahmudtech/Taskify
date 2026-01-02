import { FaEdit } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";

export default function TaskCard({ task, onChecked }) {
  return (
    <>
      <div className="lg:col-span-2">
        <div className="space-y-4">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="h-5 w-5 text-primary rounded border-gray-300 mr-3"
                  checked={task.isCompleted}
                  onChange={() => onChecked(task.id)}
                />
                <h3 className="text-lg font-semibold text-gray-800">
                  {task.title}
                </h3>
              </div>
              <div className="flex space-x-2">
                <button className="text-gray-500 hover:text-primary p-1.5 rounded-lg">
                  <FaEdit />
                </button>
                <button className="text-gray-500 hover:text-red-600 p-1.5 rounded-lg">
                  <FaTrashCan />
                </button>
              </div>
            </div>
            <p className="text-gray-600 mb-4 text-sm">{task.description}</p>
            <div className="flex justify-between items-center">
              <div className="flex flex-wrap gap-2">
                <div className="priority-high text-xs font-medium px-3 py-1 rounded-full">
                  {task.priority}
                </div>
                {task.tags.map((tag, idx) => (
                  <div
                    key={idx}
                    className="tag-tech px-2 py-1 rounded text-xs font-medium"
                  >
                    {tag}
                  </div>
                ))}
              </div>
              <div className="text-xs text-gray-500">Oct 15</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
