import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useNewsData } from '../hooks/useNews'
import NewsCard from '../components/NewsCard'
import Modal from '../components/Modal'
import Loading from '../components/Loading'
import Error from '../components/Error'

const CategoryPage = () => {
  const { category } = useParams()
  const { articles, isLoading, error, fetchNews } = useNewsData()
  const [selectedArticle, setSelectedArticle] = useState(null)
  const [sortBy, setSortBy] = useState('publishedAt')
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    fetchNews(category, '', sortBy, 1)
    setCurrentPage(1)
  }, [category, sortBy, fetchNews])

  const handleSortChange = (e) => {
    setSortBy(e.target.value)
  }

  const handleLoadMore = () => {
    const nextPage = currentPage + 1
    setCurrentPage(nextPage)
    fetchNews(category, '', sortBy, nextPage)
  }

  const handleArticleClick = (article) => {
    setSelectedArticle(article)
  }

  const handleCloseModal = () => {
    setSelectedArticle(null)
  }

  const handleRetry = () => {
    fetchNews(category, '', sortBy, 1)
    setCurrentPage(1)
  }

  const getCategoryTitle = () => {
    const categoryNames = {
      technology: 'Technology',
      business: 'Business',
      sports: 'Sports',
      entertainment: 'Entertainment',
      health: 'Health'
    }
    return categoryNames[category] || 'News'
  }

  if (error) {
    return <Error message={error} onRetry={handleRetry} />
  }

  return (
    <>
      <section className="news-section">
        <div className="section-header">
          <h2 className="section-title">{getCategoryTitle()}</h2>
          <div className="section-controls">
            <select 
              className="sort-select" 
              value={sortBy} 
              onChange={handleSortChange}
            >
              <option value="publishedAt">Latest</option>
              <option value="popularity">Popular</option>
              <option value="relevancy">Relevant</option>
            </select>
          </div>
        </div>

        {isLoading && currentPage === 1 ? (
          <Loading />
        ) : (
          <>
            <div className="news-grid">
              {articles.map((article) => (
                <NewsCard 
                  key={article.id}
                  article={article} 
                  onClick={handleArticleClick}
                />
              ))}
            </div>

            {articles.length > 0 && (
              <button 
                className="load-more" 
                onClick={handleLoadMore}
                disabled={isLoading}
              >
                {isLoading ? 'Loading...' : 'Load More'}
              </button>
            )}

            {articles.length === 0 && !isLoading && (
              <div className="no-results">
                <p>No articles found in this category.</p>
              </div>
            )}
          </>
        )}
      </section>

      {/* Modal */}
      <Modal 
        article={selectedArticle}
        isOpen={!!selectedArticle}
        onClose={handleCloseModal}
      />
    </>
  )
}

export default CategoryPage
