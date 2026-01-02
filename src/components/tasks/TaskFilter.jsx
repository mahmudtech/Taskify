export default function TaskFilter() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6">
      <div className="flex flex-wrap gap-4 items-center">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-700">Filter by:</span>
          <select className="text-sm border border-gray-300 rounded-lg px-3 py-1.5 focus:ring-2 focus:ring-primary">
            <option value="all">All Priorities</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>

        <div className="flex items-center space-x-2">
          <select className="text-sm border border-gray-300 rounded-lg px-3 py-1.5 focus:ring-2 focus:ring-primary">
            <option value="all">All Tags</option>
            <option value="tech">Tech</option>
            <option value="design">Design</option>
            <option value="meeting">Meeting</option>
            <option value="documentation">Documentation</option>
          </select>
        </div>

        <div className="ml-auto">
          <button className="text-sm text-gray-600 hover:text-primary px-3 py-1.5 rounded-lg hover:bg-gray-100">
            Clear Filters
          </button>
        </div>
      </div>
    </div>
  );
}
