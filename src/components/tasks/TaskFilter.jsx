export default function TaskFilter({ selectedFilter, setSelectedFilter }) {
  const handleClear = () => {
    setSelectedFilter("All");
  };
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6">
      <div className="flex flex-wrap gap-4 items-center">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-700">Filter by:</span>
          <select
            className="text-sm border border-gray-300 rounded-lg px-3 py-1.5 focus:ring-2 focus:ring-primary"
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
          >
            <option value="All">All Priorities</option>
            <option value="High Priority">High</option>
            <option value="Medium Priority">Medium</option>
            <option value="Low Priority">Low</option>
          </select>
        </div>

        <div className="flex items-center space-x-2">
          <select
            className="text-sm border border-gray-300 rounded-lg px-3 py-1.5 focus:ring-2 focus:ring-primary"
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
          >
            <option value="All">All Tags</option>
            <option value="Tech">Tech</option>
            <option value="Design">Design</option>
            <option value="Meeting">Meeting</option>
            <option value="Documentation">Documentation</option>
          </select>
        </div>

        <div className="ml-auto">
          <button
            className="text-sm text-gray-600 hover:text-primary px-3 py-1.5 rounded-lg hover:bg-gray-100"
            onClick={handleClear}
          >
            Clear Filters
          </button>
        </div>
      </div>
    </div>
  );
}
