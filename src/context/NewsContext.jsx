import React, { createContext, useContext, useState } from 'react'

const NewsContext = createContext()

export const useNews = () => {
  const context = useContext(NewsContext)
  if (!context) {
    throw new Error('useNews must be used within a NewsProvider')
  }
  return context
}

export const NewsProvider = ({ children }) => {
  const [articles, setArticles] = useState([])
  const [heroArticles, setHeroArticles] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('publishedAt')
  const [currentPage, setCurrentPage] = useState(1)

  const value = {
    articles,
    setArticles,
    heroArticles,
    setHeroArticles,
    isLoading,
    setIsLoading,
    error,
    setError,
    searchQuery,
    setSearchQuery,
    sortBy,
    setSortBy,
    currentPage,
    setCurrentPage
  }

  return (
    <NewsContext.Provider value={value}>
      {children}
    </NewsContext.Provider>
  )
}
