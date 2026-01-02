export default function QuickStats() {
    return (
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
    );
}