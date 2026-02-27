import { Outlet, useLocation } from 'react-router-dom'

function ProductsLayout() {
  const location = useLocation()
  const isProductList = location.pathname === '/products'

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Products</h1>
        <p className="text-gray-600">
          {isProductList 
            ? "Explore our wide range of high-quality products" 
            : "Viewing product details"}
        </p>
      </div>

      {/* Filter Area Placeholder */}
      {isProductList && (
        <div className="bg-white rounded-xl shadow-sm p-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="text-gray-700 font-medium">Filter by:</span>
            <button className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors">
              All
            </button>
            <button className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors">
              Electronics
            </button>
            <button className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors">
              Clothing
            </button>
            <button className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors">
              Accessories
            </button>
          </div>
          <div className="text-gray-500 text-sm">
            {isProductList && "Showing all products"}
          </div>
        </div>
      )}

      {/* Dynamic Content */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <Outlet />
      </div>
    </div>
  )
}

export default ProductsLayout