import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar />
      <main className="container-custom py-8">
        <Outlet />
      </main>
      <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="container-custom py-6">
          <p className="text-center text-gray-500 text-sm">
            © 2026 Product Catalog. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App