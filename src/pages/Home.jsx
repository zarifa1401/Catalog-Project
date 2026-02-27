import { Link } from 'react-router-dom'
import { products } from '../data/products'

function Home() {
  const featuredProducts = products.slice(0, 3)

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-12 bg-gradient-to-r from-primary-50 to-primary-100 rounded-3xl">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Welcome to ProductCatalog
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Discover our curated collection of premium products at amazing prices.
        </p>
        <Link to="/products" className="btn-primary text-lg px-8 py-3">
          Shop Now →
        </Link>
      </section>

      {/* Featured Products */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <span className="text-4xl mb-3 block">{product.image}</span>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary-600">
                    ${product.price.toFixed(2)}
                  </span>
                  <Link
                    to={`/products/${product.id}`}
                    className="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
        <div className="text-center">
          <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">🚚</span>
          </div>
          <h3 className="font-semibold text-lg mb-2">Free Shipping</h3>
          <p className="text-gray-600">On orders over $50</p>
        </div>
        <div className="text-center">
          <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">🔄</span>
          </div>
          <h3 className="font-semibold text-lg mb-2">Easy Returns</h3>
          <p className="text-gray-600">30-day return policy</p>
        </div>
        <div className="text-center">
          <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">💳</span>
          </div>
          <h3 className="font-semibold text-lg mb-2">Secure Payment</h3>
          <p className="text-gray-600">100% secure transactions</p>
        </div>
      </section>
    </div>
  )
}

export default Home