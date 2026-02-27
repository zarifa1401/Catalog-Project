import { useParams, Link, useNavigate } from 'react-router-dom'
import { products } from '../data/products'
import BackButton from '../components/BackButton'

function ProductDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = products.find(p => p.id === parseInt(id))

  if (!product) {
    return (
      <div className="text-center py-12">
        <div className="mb-6">
          <span className="text-8xl">🔍</span>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Product Not Found</h2>
        <p className="text-gray-600 mb-8">
          Sorry, we couldn't find the product you're looking for.
        </p>
        <div className="space-x-4">
          <BackButton to="/products">← Back to Products</BackButton>
          <Link to="/" className="btn-primary">
            Go Home
          </Link>
        </div>
      </div>
    )
  }

  const renderStars = (rating) => {
    const stars = []
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={`text-2xl ${i <= rating ? 'text-yellow-400' : 'text-gray-300'}`}>
          ★
        </span>
      )
    }
    return stars
  }

  return (
    <div className="max-w-4xl mx-auto">
      <BackButton />
      
      <div className="mt-6 bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="md:flex">
          {/* Product Image Section */}
          <div className="md:w-1/2 bg-gradient-to-br from-primary-50 to-primary-100 p-12 flex items-center justify-center">
            <span className="text-9xl transform hover:scale-110 transition-transform duration-300">
              {product.image}
            </span>
          </div>
          
          {/* Product Details Section */}
          <div className="md:w-1/2 p-8">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <div className="flex items-center mb-4">
                <div className="flex mr-2">
                  {renderStars(Math.floor(product.rating))}
                </div>
                <span className="text-gray-600">({product.rating} out of 5)</span>
              </div>
              <p className="text-sm text-primary-600 font-semibold mb-2">
                {product.category}
              </p>
            </div>

            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">Description</h2>
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-sm text-gray-600">Price</p>
                  <p className="text-3xl font-bold text-primary-600">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">Availability</p>
                  <p className={`font-semibold ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <button 
                onClick={() => navigate('/products')}
                className="flex-1 btn-secondary"
              >
                ← Back to Products
              </button>
              <button className="flex-1 btn-primary">
                Add to Cart 🛒
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails