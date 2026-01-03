import { useState } from "react";
import { FaTimes } from "react-icons/fa";

export default function Modal({ onCloseModal, taskToUpdate, onSave }) {
  const [task, setTask] = useState(
    taskToUpdate || {
      title: "",
      description: "",
      tags: [],
      priority: "",
    }
  );

  const onUpdateTask = (e) => {
    const name = e.target.name;
    let value = e.target.value;

    if (name === "tags") {
      value = value.split(",");
    }

    setTask({
      ...task,
      [name]: value,
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-20 ">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-lg mx-4 slide-in">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-gray-800">Edit Task</h3>
            <button
              id="closeModalBtn"
              className="text-gray-400 hover:text-gray-600"
              onClick={onCloseModal}
            >
              <FaTimes classNameName="text-xl" />
            </button>
          </div>

          <form id="editTaskForm">
            <input type="hidden" id="editTaskId" />

            <div className="mb-5">
              <label
                htmlFor="editTaskTitle"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Task Title *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={task.title}
                onChange={onUpdateTask}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="editTaskDescription"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={task.description}
                onChange={onUpdateTask}
                rows="3"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              ></textarea>
            </div>

            <div className="mb-5">
              <label
                htmlFor="editTaskTags"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Tags (comma separated)
              </label>
              <input
                type="text"
                id="tags"
                name="tags"
                value={task.tags}
                onChange={onUpdateTask}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="editTaskPriority"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Priority
              </label>
              <select
                id="priority"
                name="priority"
                value={task.priority}
                onChange={onUpdateTask}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="Low Priority">Low Priority</option>
                <option value="Medium Priority">Medium Priority</option>
                <option value="High Priority">High Priority</option>
              </select>
            </div>

            <div className="flex justify-between space-x-3">
              <button
                type="button"
                id="cancelEditBtn"
                className="px-5 py-2.5 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50"
                onClick={onCloseModal}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2.5 bg-primary text-white font-medium rounded-lg hover:bg-secondary"
                onClick={(e) => {
                  e.preventDefault();
                  onSave(task);
                }}
              >
                Update Task
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
