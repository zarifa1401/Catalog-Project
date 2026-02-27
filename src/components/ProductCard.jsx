import { Link } from 'react-router-dom'

function ProductCard({ product }) {
  const renderStars = (rating) => {
    const stars = []
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={`text-lg ${i <= rating ? 'text-yellow-400' : 'text-gray-300'}`}>
          ★
        </span>
      )
    }
    return stars
  }

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-5xl">{product.image}</span>
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            product.inStock 
              ? 'bg-green-100 text-green-800' 
              : 'bg-red-100 text-red-800'
          }`}>
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </span>
        </div>
        
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
        
        <div className="flex items-center mb-2">
          <div className="flex mr-2">
            {renderStars(Math.floor(product.rating))}
          </div>
          <span className="text-sm text-gray-600">({product.rating})</span>
        </div>
        
        <p className="text-sm text-gray-600 mb-2">{product.category}</p>
        
        <p className="text-gray-700 mb-4 line-clamp-2">{product.description}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary-600">
            ${product.price.toFixed(2)}
          </span>
          
          <Link
            to={`/products/${product.id}`}
            className="btn-primary text-sm"
          >
            View Details →
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProductCard