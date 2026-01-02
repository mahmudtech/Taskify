import { FaSearch, FaTasks } from "react-icons/fa";

export default function Header({ searchText, setSearchText }) {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <div className="bg-primary text-white p-2 rounded-lg">
              <FaTasks size="25" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Taskify</h1>
              <p className="text-gray-600 text-sm">
                Professional Task Management System
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent w-full md:w-64"
                placeholder="Search tasks..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
                JD
              </div>
              <span className="hidden md:inline text-gray-700 font-medium">
                John Doe
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
