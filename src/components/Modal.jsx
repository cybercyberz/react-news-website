import React, { useEffect } from 'react'
import { formatDate } from '../utils/mockNews'

const Modal = ({ article, isOpen, onClose }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'auto'
    }
  }, [isOpen, onClose])

  if (!isOpen || !article) return null

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div className="modal" onClick={handleBackdropClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <div className="modal-body">
          <img 
            src={article.urlToImage || 'https://via.placeholder.com/800x400/6b7280/ffffff?text=No+Image'} 
            alt={article.title} 
            className="news-image"
          />
          <h1 className="news-title">{article.title}</h1>
          <div className="news-meta">
            <span className="news-source">{article.source.name}</span>
            <span className="news-date">{formatDate(article.publishedAt)}</span>
          </div>
          <p className="news-description">{article.content || article.description}</p>
          {article.url && (
            <a 
              href={article.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="news-url"
            >
              Read Full Article
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default Modal
