import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="section">
      <div className="container text-center">
        <h1 className="text-5xl font-bold mb-4">404</h1>
        <p className="mb-6 text-gray-600 dark:text-gray-300">Page not found.</p>
        <Link to="/" className="btn btn-primary">Go Home</Link>
      </div>
    </section>
  )
}
