import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { NewsProvider } from './context/NewsContext'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import CategoryPage from './pages/CategoryPage'
import Footer from './components/Footer'
import './style.css'

function App() {
  return (
    <ThemeProvider>
      <NewsProvider>
        <Router>
          <div id="app">
            <Header />
            <main className="main">
              <div className="container">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/category/:category" element={<CategoryPage />} />
                </Routes>
              </div>
            </main>
            <Footer />
          </div>
        </Router>
      </NewsProvider>
    </ThemeProvider>
  )
}

export default App
