import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

function Products() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">All Products</h2>
        <p className="text-gray-600">
          Browse our collection of {products.length} premium products
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Products