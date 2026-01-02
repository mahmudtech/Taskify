import { FaClipboard } from "react-icons/fa";

export default function NoTaskFound() {
  return (
    <div className=" bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
      <div className="text-gray-400 text-4xl mb-4 flex justify-center">
        <FaClipboard />
      </div>
      <h3 className="text-xl font-medium text-gray-700 mb-2">No tasks found</h3>
      <p className="text-gray-500 mb-6">
        Add a new task using the form or adjust your filters
      </p>
    </div>
  );
}
