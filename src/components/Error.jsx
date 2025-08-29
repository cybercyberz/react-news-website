import React from 'react'

const Error = ({ message, onRetry }) => {
  return (
    <div className="error">
      <h3>Oops! Something went wrong</h3>
      <p>{message || 'Unable to load news. Please try again later.'}</p>
      {onRetry && (
        <button className="retry-btn" onClick={onRetry}>
          Try Again
        </button>
      )}
    </div>
  )
}

export default Error
