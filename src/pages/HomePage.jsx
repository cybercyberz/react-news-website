import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useNewsData } from '../hooks/useNews'
import NewsCard from '../components/NewsCard'
import Modal from '../components/Modal'
import Loading from '../components/Loading'
import Error from '../components/Error'

const HomePage = () => {
  const [searchParams] = useSearchParams()
  const searchQuery = searchParams.get('search') || ''
  
  const { articles, heroArticles, isLoading, error, fetchNews } = useNewsData()
  const [selectedArticle, setSelectedArticle] = useState(null)
  const [sortBy, setSortBy] = useState('publishedAt')
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    fetchNews('general', searchQuery, sortBy, 1)
    setCurrentPage(1)
  }, [searchQuery, sortBy, fetchNews])

  const handleSortChange = (e) => {
    setSortBy(e.target.value)
  }

  const handleLoadMore = () => {
    const nextPage = currentPage + 1
    setCurrentPage(nextPage)
    fetchNews('general', searchQuery, sortBy, nextPage)
  }

  const handleArticleClick = (article) => {
    setSelectedArticle(article)
  }

  const handleCloseModal = () => {
    setSelectedArticle(null)
  }

  const handleRetry = () => {
    fetchNews('general', searchQuery, sortBy, 1)
    setCurrentPage(1)
  }

  const getSectionTitle = () => {
    if (searchQuery) {
      return `Search Results for "${searchQuery}"`
    }
    return 'Latest News'
  }

  if (error) {
    return <Error message={error} onRetry={handleRetry} />
  }

  return (
    <>
      {/* Hero Section */}
      {!searchQuery && heroArticles.length > 0 && (
        <section className="hero-section">
          <h2 className="section-title">Breaking News</h2>
          <div className="hero-articles">
            <div className="hero-main">
              <NewsCard 
                article={heroArticles[0]} 
                onClick={handleArticleClick}
                variant="hero-large"
              />
            </div>
            <div className="hero-sidebar">
              {heroArticles.slice(1, 4).map((article) => (
                <NewsCard 
                  key={article.id}
                  article={article} 
                  onClick={handleArticleClick}
                  variant="hero-small"
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* News Grid Section */}
      <section className="news-section">
        <div className="section-header">
          <h2 className="section-title">{getSectionTitle()}</h2>
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
              {(searchQuery ? articles : articles.slice(4)).map((article) => (
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
                <p>No articles found.</p>
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

export default HomePage
