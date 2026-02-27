import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-primary-600 mb-4">404</h1>
        <div className="mb-8">
          <span className="text-8xl">😕</span>
        </div>
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          to="/" 
          className="btn-primary inline-flex items-center text-lg px-6 py-3"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  )
}

export default NotFound