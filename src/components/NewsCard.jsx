import React from 'react'
import { formatDate } from '../utils/mockNews'

const NewsCard = ({ article, onClick, variant = 'default' }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(article)
    }
  }

  const cardClass = variant === 'hero-large' 
    ? 'hero-card large' 
    : variant === 'hero-small' 
    ? 'hero-card small' 
    : 'news-card'

  return (
    <article className={cardClass} onClick={handleClick}>
      <img 
        src={article.urlToImage || 'https://via.placeholder.com/400x250/6b7280/ffffff?text=No+Image'} 
        alt={article.title} 
        className="news-image"
        loading="lazy"
      />
      <div className="news-content">
        <h3 className="news-title">{article.title}</h3>
        <p className="news-description">{article.description}</p>
        <div className="news-meta">
          <span className="news-source">{article.source.name}</span>
          <span className="news-date">{formatDate(article.publishedAt)}</span>
        </div>
      </div>
    </article>
  )
}

export default NewsCard
