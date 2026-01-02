import { useState } from "react";
import { FaPlus, FaPlusCircle, FaTrash } from "react-icons/fa";
import QuickStats from "./QuickStats";

export default function AddTask({
  addTask,
  total,
  completedDone,
  highPriorityCount,
  deleteAll,
}) {
  const initialState = {
    id: crypto.randomUUID(),
    title: "",
    description: "",
    tags: [],
    priority: "",
    isCompleted: false,
    date: new Date(),
  };
  const [task, setTask] = useState(initialState);

  const onClickText = (e) => {
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
    <div className="lg:col-span-1">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-24">
        <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
          <FaPlusCircle className="text-accent mr-2" /> Add New Task
        </h2>

        <form>
          <div className="mb-5">
            <label
              htmlFor="taskTitle"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Task Title <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Enter task title"
              name="title"
              id="title"
              value={task.title}
              onChange={onClickText}
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
              name="description"
              id="description"
              value={task.description}
              onChange={onClickText}
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
              name="tags"
              id="tags"
              value={task.tags}
              onChange={onClickText}
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="taskPriority"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Priority
            </label>
            <select
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              name="priority"
              id="priority"
              value={task.priority}
              onChange={onClickText}
            >
              <option value="" disabled>
                Select Priority
              </option>
              <option value="Low Priority">Low Priority</option>
              <option value="Medium Priority">Medium Priority</option>
              <option value="High Priority">High Priority</option>
            </select>
          </div>

          <div className="flex space-x-3">
            <button
              type="submit"
              className="flex-1 bg-primary hover:bg-secondary text-white font-medium py-3 px-4 rounded-lg transition duration-200 flex items-center justify-center"
              onClick={(e) => {
                e.preventDefault();
                addTask(task);
                setTask({
                  ...initialState,
                  id: crypto.randomUUID(),
                });
              }}
            >
              {/* <i className="fas fa-plus mr-2"></i> Add Task */}
              <FaPlus className="mr-2" /> Add Task
            </button>
            <button
              type="button"
              className="bg-red-100 hover:bg-red-200 text-red-700 font-medium py-3 px-4 rounded-lg transition duration-200 flex items-center justify-center"
              onClick={deleteAll}
            >
              <FaTrash className="mr-2" />
              Delete All
            </button>
          </div>
        </form>

        <QuickStats
          total={total}
          completedDone={completedDone}
          highPriorityCount={highPriorityCount}
        />
      </div>
    </div>
  );
}
