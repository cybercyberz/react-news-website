import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const categories = [
    { key: 'technology', label: 'Technology', path: '/category/technology' },
    { key: 'business', label: 'Business', path: '/category/business' },
    { key: 'sports', label: 'Sports', path: '/category/sports' },
    { key: 'entertainment', label: 'Entertainment', path: '/category/entertainment' }
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>NewsHub</h3>
            <p>Your trusted source for daily news and updates from around the world.</p>
          </div>
          <div className="footer-section">
            <h4>Categories</h4>
            <ul>
              {categories.map((category) => (
                <li key={category.key}>
                  <Link to={category.path}>
                    {category.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-section">
            <h4>About</h4>
            <p>Built with ❤️ for learning React development</p>
            <p>Powered by React & Vite</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 NewsHub. Made for educational purposes.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
