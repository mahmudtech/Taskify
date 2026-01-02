import { FaEdit } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";

export default function TaskCard() {
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
                  checked
                />
                <h3 className="text-lg font-semibold text-gray-800">
                  Implement user authentication
                </h3>
              </div>
              <div className="flex space-x-2">
                <button className="text-gray-500 hover:text-primary p-1.5 rounded-lg">
                  <FaEdit />
                </button>
                <button className="text-gray-500 hover:text-red-600 p-1.5 rounded-lg">
                  {/* <i className="fas fa-trash-alt"></i> */}
                  <FaTrashCan />
                </button>
              </div>
            </div>
            <p className="text-gray-600 mb-4 text-sm">
              Create login and registration pages with JWT token support.
            </p>
            <div className="flex justify-between items-center">
              <div className="flex flex-wrap gap-2">
                <div className="priority-high text-xs font-medium px-3 py-1 rounded-full">
                  High Priority
                </div>
                <div className="tag-tech px-2 py-1 rounded text-xs font-medium">
                  Tech
                </div>
              </div>
              <div className="text-xs text-gray-500">Oct 15</div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="h-5 w-5 text-primary rounded border-gray-300 mr-3"
                />
                <h3 className="text-lg font-semibold text-gray-800">
                  Design dashboard UI
                </h3>
              </div>
              <div className="flex space-x-2">
                <button className="text-gray-500 hover:text-primary p-1.5 rounded-lg">
                  <i className="fas fa-edit"></i>
                </button>
                <button className="text-gray-500 hover:text-red-600 p-1.5 rounded-lg">
                  <i className="fas fa-trash-alt"></i>
                </button>
              </div>
            </div>
            <p className="text-gray-600 mb-4 text-sm">
              Create wireframes and mockups for the admin dashboard.
            </p>
            <div className="flex justify-between items-center">
              <div className="flex flex-wrap gap-2">
                <div className="priority-medium text-xs font-medium px-3 py-1 rounded-full">
                  Medium Priority
                </div>
                <div className="tag-design px-2 py-1 rounded text-xs font-medium">
                  Design
                </div>
              </div>
              <div className="text-xs text-gray-500">Oct 14</div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="h-5 w-5 text-primary rounded border-gray-300 mr-3"
                />
                <h3 className="text-lg font-semibold text-gray-800">
                  API documentation
                </h3>
              </div>
              <div className="flex space-x-2">
                <button className="text-gray-500 hover:text-primary p-1.5 rounded-lg">
                  <i className="fas fa-edit"></i>
                </button>
                <button className="text-gray-500 hover:text-red-600 p-1.5 rounded-lg">
                  <i className="fas fa-trash-alt"></i>
                </button>
              </div>
            </div>
            <p className="text-gray-600 mb-4 text-sm">
              Document all endpoints for the new microservices.
            </p>
            <div className="flex justify-between items-center">
              <div className="flex flex-wrap gap-2">
                <div className="priority-low text-xs font-medium px-3 py-1 rounded-full">
                  Low Priority
                </div>
                <div className="tag-documentation px-2 py-1 rounded text-xs font-medium">
                  Documentation
                </div>
              </div>
              <div className="text-xs text-gray-500">Oct 13</div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="h-5 w-5 text-primary rounded border-gray-300 mr-3"
                />
                <h3 className="text-lg font-semibold text-gray-800">
                  API documentation
                </h3>
              </div>
              <div className="flex space-x-2">
                <button className="text-gray-500 hover:text-primary p-1.5 rounded-lg">
                  <i className="fas fa-edit"></i>
                </button>
                <button className="text-gray-500 hover:text-red-600 p-1.5 rounded-lg">
                  <i className="fas fa-trash-alt"></i>
                </button>
              </div>
            </div>
            <p className="text-gray-600 mb-4 text-sm">
              Document all endpoints for the new microservices.
            </p>
            <div className="flex justify-between items-center">
              <div className="flex flex-wrap gap-2">
                <div className="priority-low text-xs font-medium px-3 py-1 rounded-full">
                  Low Priority
                </div>
                <div className="tag-documentation px-2 py-1 rounded text-xs font-medium">
                  Documentation
                </div>
              </div>
              <div className="text-xs text-gray-500">Oct 13</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
