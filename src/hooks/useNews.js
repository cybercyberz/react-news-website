import { useState, useEffect, useCallback } from 'react'
import { mockNews } from '../utils/mockNews'

export const useNewsData = () => {
  const [articles, setArticles] = useState([])
  const [heroArticles, setHeroArticles] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchNews = useCallback(async (category = 'general', searchQuery = '', sortBy = 'publishedAt', page = 1) => {
    setIsLoading(true)
    setError(null)

    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500))

      let categoryArticles = mockNews[category] || mockNews.general

      // Filter by search query if provided
      if (searchQuery) {
        const query = searchQuery.toLowerCase()
        categoryArticles = categoryArticles.filter(article => 
          article.title.toLowerCase().includes(query) ||
          article.description.toLowerCase().includes(query)
        )
      }

      // Sort articles
      const sortedArticles = [...categoryArticles].sort((a, b) => {
        switch (sortBy) {
          case 'publishedAt':
            return new Date(b.publishedAt) - new Date(a.publishedAt)
          case 'popularity':
            // Mock popularity sorting
            return Math.random() - 0.5
          case 'relevancy':
            // Mock relevancy sorting
            return Math.random() - 0.5
          default:
            return 0
        }
      })

      // Simulate pagination
      const startIndex = (page - 1) * 6
      const endIndex = startIndex + 6
      const paginatedArticles = sortedArticles.slice(startIndex, endIndex)

      if (page === 1) {
        setArticles(paginatedArticles)
        setHeroArticles(paginatedArticles.slice(0, 4))
      } else {
        setArticles(prev => [...prev, ...paginatedArticles])
      }

    } catch (err) {
      setError('Failed to load news. Please try again.')
      console.error('Error fetching news:', err)
    } finally {
      setIsLoading(false)
    }
  }, [])

  return {
    articles,
    heroArticles,
    isLoading,
    error,
    fetchNews,
    setArticles,
    setHeroArticles,
    setError
  }
}
