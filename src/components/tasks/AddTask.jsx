import { FaPlusCircle } from "react-icons/fa";

export default function AddTask() {
  return (
    <div className="lg:col-span-1">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-24">
        <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
          {/* <i className="fas fa-plus-circle text-accent mr-2"></i> Add New Task */}
          <FaPlusCircle className="text-accent mr-2" /> Add New Task
        </h2>

        <form>
          <div className="mb-5">
            <label
              htmlFor="taskTitle"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Task Title *
            </label>
            <input
              type="text"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Enter task title"
              required
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="taskDescription"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Description
            </label>
            <textarea
              rows="3"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Task details..."
            ></textarea>
          </div>

          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tags
            </label>
            <div className="flex flex-wrap gap-2 mb-2">
              <span className="tag-tech px-3 py-1 rounded-full text-xs font-medium">
                Tech
              </span>
              <span className="tag-design px-3 py-1 rounded-full text-xs font-medium">
                Design
              </span>
              <span className="tag-meeting px-3 py-1 rounded-full text-xs font-medium">
                Meeting
              </span>
              <span className="tag-documentation px-3 py-1 rounded-full text-xs font-medium">
                Documentation
              </span>
            </div>
            <input
              type="text"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Add tags (comma separated)"
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="taskPriority"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Priority
            </label>
            <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
              <option value="low">Low Priority</option>
              <option value="medium" selected>
                Medium Priority
              </option>
              <option value="high">High Priority</option>
            </select>
          </div>

          <div className="flex space-x-3">
            <button
              type="submit"
              className="flex-1 bg-primary hover:bg-secondary text-white font-medium py-3 px-4 rounded-lg transition duration-200 flex items-center justify-center"
            >
              <i className="fas fa-plus mr-2"></i> Add Task
            </button>
            <button
              type="button"
              className="bg-red-100 hover:bg-red-200 text-red-700 font-medium py-3 px-4 rounded-lg transition duration-200 flex items-center justify-center"
            >
              <i className="fas fa-trash-alt mr-2"></i> Delete All
            </button>
          </div>
        </form>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <h3 className="text-sm font-medium text-gray-700 mb-3">
            Quick Stats
          </h3>
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-blue-50 p-3 rounded-lg text-center">
              <div className="text-xl font-bold text-primary">12</div>
              <div className="text-xs text-gray-600">Total</div>
            </div>
            <div className="bg-amber-50 p-3 rounded-lg text-center">
              <div className="text-xl font-bold text-amber-600">3</div>
              <div className="text-xs text-gray-600">High</div>
            </div>
            <div className="bg-green-50 p-3 rounded-lg text-center">
              <div className="text-xl font-bold text-green-600">8</div>
              <div className="text-xs text-gray-600">Done</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
