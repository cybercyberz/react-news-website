import React, { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

const Header = () => {
  const { theme, toggleTheme } = useTheme()
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()
  const location = useLocation()

  const categories = [
    { key: 'general', label: 'Home', path: '/' },
    { key: 'technology', label: 'Technology', path: '/category/technology' },
    { key: 'business', label: 'Business', path: '/category/business' },
    { key: 'sports', label: 'Sports', path: '/category/sports' },
    { key: 'entertainment', label: 'Entertainment', path: '/category/entertainment' },
    { key: 'health', label: 'Health', path: '/category/health' }
  ]

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/?search=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  const isActiveLink = (path) => {
    if (path === '/' && location.pathname === '/' && !location.search) {
      return true
    }
    return location.pathname === path
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <h1>NewsHub</h1>
              <span className="tagline">Your Daily News Source</span>
            </Link>
          </div>
          
          <nav className="nav">
            <ul className="nav-list">
              {categories.map((category) => (
                <li key={category.key}>
                  <Link 
                    to={category.path} 
                    className={`nav-link ${isActiveLink(category.path) ? 'active' : ''}`}
                  >
                    {category.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="header-actions">
            <form className="search-container" onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Search news..."
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="search-btn">
                🔍
              </button>
            </form>
            
            <button 
              className="theme-toggle" 
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
