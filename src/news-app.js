// News API Configuration
const NEWS_CONFIG = {
  // Free news APIs (no API key required for demo)
  freeApis: [
    {
      name: 'NewsData.io',
      baseUrl: 'https://newsdata.io/api/1/news',
      params: {
        apikey: 'pub_58441c7b9a8b4c8c8f8e8f8e8f8e8f8e', // Demo key
        language: 'en',
        size: 10
      }
    }
  ],
  // Fallback mock data for when APIs are unavailable
  mockData: true
}

// Enhanced mock news data with more variety
const mockNews = {
  general: [
    {
      title: "Global Climate Summit Reaches Historic Agreement",
      description: "World leaders unite on ambitious climate action plan with binding commitments for carbon neutrality by 2050.",
      urlToImage: "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?w=400&h=250&fit=crop",
      publishedAt: "2024-01-15T10:30:00Z",
      source: { name: "Global News" },
      url: "https://example.com/climate-summit",
      content: "In a groundbreaking development, world leaders have reached a historic agreement at the Global Climate Summit..."
    },
    {
      title: "Revolutionary Medical Breakthrough in Cancer Treatment",
      description: "New immunotherapy treatment shows 95% success rate in clinical trials, offering hope to millions of patients worldwide.",
      urlToImage: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop",
      publishedAt: "2024-01-15T08:15:00Z",
      source: { name: "Medical Today" },
      url: "https://example.com/cancer-breakthrough",
      content: "Scientists at leading research institutions have announced a revolutionary breakthrough in cancer treatment..."
    },
    {
      title: "Economic Markets Show Strong Recovery Signs",
      description: "Global markets surge as inflation rates stabilize and consumer confidence reaches new highs across major economies.",
      urlToImage: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=250&fit=crop",
      publishedAt: "2024-01-15T07:45:00Z",
      source: { name: "Financial Times" },
      url: "https://example.com/market-recovery",
      content: "Financial analysts report strong recovery signs across global markets as key economic indicators..."
    }
  ],
  technology: [
    {
      title: "AI Breakthrough: New Model Achieves Human-Level Reasoning",
      description: "Latest artificial intelligence model demonstrates unprecedented reasoning capabilities, marking a significant milestone in AI development.",
      urlToImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
      publishedAt: "2024-01-15T12:00:00Z",
      source: { name: "Tech Insider" },
      url: "https://example.com/ai-breakthrough",
      content: "Researchers have unveiled a new AI model that demonstrates human-level reasoning capabilities..."
    },
    {
      title: "Quantum Computing Reaches Commercial Viability",
      description: "Major tech companies announce first commercially viable quantum computers, promising to revolutionize computing power.",
      urlToImage: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=250&fit=crop",
      publishedAt: "2024-01-15T11:30:00Z",
      source: { name: "Quantum Weekly" },
      url: "https://example.com/quantum-computing",
      content: "The quantum computing industry has reached a major milestone with the announcement of the first..."
    },
    {
      title: "Sustainable Tech: Solar Efficiency Hits 50% Milestone",
      description: "New perovskite solar cells achieve record-breaking 50% efficiency, making renewable energy more accessible than ever.",
      urlToImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=250&fit=crop",
      publishedAt: "2024-01-15T09:15:00Z",
      source: { name: "Green Tech" },
      url: "https://example.com/solar-efficiency",
      content: "Scientists have achieved a breakthrough in solar technology with new perovskite cells reaching..."
    }
  ],
  business: [
    {
      title: "Startup Ecosystem Thrives Despite Economic Uncertainty",
      description: "Venture capital funding reaches $150 billion globally as investors bet on innovative technologies and sustainable solutions.",
      urlToImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
      publishedAt: "2024-01-15T09:45:00Z",
      source: { name: "Business Wire" },
      url: "https://example.com/startup-funding",
      content: "The global startup ecosystem continues to show remarkable resilience with venture capital funding..."
    },
    {
      title: "Remote Work Revolution Reshapes Corporate Real Estate",
      description: "Companies worldwide adopt hybrid work models, leading to a 40% reduction in office space demand and new urban planning strategies.",
      urlToImage: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=250&fit=crop",
      publishedAt: "2024-01-15T08:30:00Z",
      source: { name: "Corporate Today" },
      url: "https://example.com/remote-work",
      content: "The shift to remote and hybrid work models has fundamentally changed the corporate real estate landscape..."
    }
  ],
  sports: [
    {
      title: "Olympic Records Shattered at Winter Games",
      description: "Athletes break multiple world records in spectacular fashion, showcasing the evolution of winter sports technology and training.",
      urlToImage: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop",
      publishedAt: "2024-01-15T14:20:00Z",
      source: { name: "Sports Central" },
      url: "https://example.com/olympic-records",
      content: "The Winter Olympics have witnessed an unprecedented number of world records being broken..."
    },
    {
      title: "Women's Soccer World Cup Breaks Viewership Records",
      description: "Global audience of 2 billion viewers makes this the most-watched women's sporting event in history, highlighting growing popularity.",
      urlToImage: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=250&fit=crop",
      publishedAt: "2024-01-15T13:15:00Z",
      source: { name: "Soccer News" },
      url: "https://example.com/womens-soccer",
      content: "The Women's Soccer World Cup has achieved unprecedented global viewership numbers..."
    }
  ],
  entertainment: [
    {
      title: "Streaming Wars Heat Up with New Platform Launches",
      description: "Major entertainment companies launch competing streaming services, offering exclusive content and innovative viewing experiences.",
      urlToImage: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=250&fit=crop",
      publishedAt: "2024-01-15T16:00:00Z",
      source: { name: "Entertainment Weekly" },
      url: "https://example.com/streaming-wars",
      content: "The entertainment industry is experiencing intense competition as new streaming platforms..."
    }
  ],
  health: [
    {
      title: "Mental Health Apps Show Significant Impact on Wellbeing",
      description: "Clinical studies reveal that digital mental health interventions are as effective as traditional therapy for many conditions.",
      urlToImage: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=250&fit=crop",
      publishedAt: "2024-01-15T15:30:00Z",
      source: { name: "Health Today" },
      url: "https://example.com/mental-health-apps",
      content: "Recent clinical studies have demonstrated the significant impact of digital mental health interventions..."
    }
  ]
}

// App State
const appState = {
  currentCategory: 'general',
  currentPage: 1,
  articles: [],
  heroArticles: [],
  isLoading: false,
  searchQuery: '',
  theme: localStorage.getItem('theme') || 'light',
  sortBy: 'publishedAt'
}

// DOM Elements
const elements = {
  loading: document.getElementById('loading'),
  error: document.getElementById('error'),
  heroSection: document.getElementById('hero-section'),
  heroArticles: document.getElementById('hero-articles'),
  newsSection: document.getElementById('news-section'),
  newsGrid: document.getElementById('news-grid'),
  sectionTitle: document.getElementById('section-title'),
  loadMoreBtn: document.getElementById('load-more'),
  searchInput: document.getElementById('search-input'),
  searchBtn: document.getElementById('search-btn'),
  themeToggle: document.getElementById('theme-toggle'),
  sortSelect: document.getElementById('sort-select'),
  retryBtn: document.getElementById('retry-btn'),
  modal: document.getElementById('article-modal'),
  modalBody: document.getElementById('modal-body'),
  modalClose: document.querySelector('.modal-close')
}

export function createNewsApp() {
  initializeApp()
}

function initializeApp() {
  setupEventListeners()
  setupTheme()
  loadNews()
}

function setupEventListeners() {
  // Navigation links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', handleCategoryChange)
  })

  // Footer category links
  document.querySelectorAll('.footer-section a[data-category]').forEach(link => {
    link.addEventListener('click', handleCategoryChange)
  })

  // Search functionality
  if (elements.searchBtn) {
    elements.searchBtn.addEventListener('click', handleSearch)
  }
  if (elements.searchInput) {
    elements.searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') handleSearch()
    })
  }

  // Theme toggle
  if (elements.themeToggle) {
    elements.themeToggle.addEventListener('click', toggleTheme)
  }

  // Sort functionality
  if (elements.sortSelect) {
    elements.sortSelect.addEventListener('change', handleSortChange)
  }

  // Load more button
  if (elements.loadMoreBtn) {
    elements.loadMoreBtn.addEventListener('click', loadMoreNews)
  }

  // Retry button
  if (elements.retryBtn) {
    elements.retryBtn.addEventListener('click', () => {
      hideError()
      loadNews()
    })
  }

  // Modal functionality
  if (elements.modalClose) {
    elements.modalClose.addEventListener('click', closeModal)
  }
  if (elements.modal) {
    elements.modal.addEventListener('click', (e) => {
      if (e.target === elements.modal) closeModal()
    })
  }

  // Escape key to close modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && elements.modal && !elements.modal.classList.contains('hidden')) {
      closeModal()
    }
  })
}

function setupTheme() {
  document.documentElement.setAttribute('data-theme', appState.theme)
  if (elements.themeToggle) {
    elements.themeToggle.textContent = appState.theme === 'dark' ? '☀️' : '🌙'
  }
}

function toggleTheme() {
  appState.theme = appState.theme === 'light' ? 'dark' : 'light'
  localStorage.setItem('theme', appState.theme)
  setupTheme()
}

// Event Handlers
function handleCategoryChange(e) {
  e.preventDefault()

  const category = e.target.dataset.category
  if (!category || category === appState.currentCategory) return

  // Update active navigation
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active')
  })
  e.target.classList.add('active')

  // Update state and load news
  appState.currentCategory = category
  appState.currentPage = 1
  appState.articles = []

  loadNews()
}

function handleSearch() {
  const query = elements.searchInput?.value.trim()
  if (!query) return

  appState.searchQuery = query
  appState.currentPage = 1
  appState.articles = []

  loadNews()
}

function handleSortChange(e) {
  appState.sortBy = e.target.value
  appState.currentPage = 1
  appState.articles = []
  loadNews()
}

function loadMoreNews() {
  appState.currentPage++
  loadNews(false) // Don't clear existing articles
}

// Core News Loading Function
async function loadNews(clearExisting = true) {
  if (appState.isLoading) return

  appState.isLoading = true
  showLoading()
  hideError()

  try {
    let articles = []

    // Try to fetch from real API first (if available)
    if (!NEWS_CONFIG.mockData) {
      articles = await fetchFromAPI()
    }

    // Fallback to mock data
    if (articles.length === 0) {
      articles = getMockNews()
    }

    // Sort articles
    articles = sortArticles(articles)

    if (clearExisting) {
      appState.articles = articles
      appState.heroArticles = articles.slice(0, 4) // First 4 for hero section
    } else {
      appState.articles = [...appState.articles, ...articles]
    }

    displayNews()

  } catch (error) {
    console.error('Error loading news:', error)
    showError('Failed to load news. Please try again.')
  } finally {
    appState.isLoading = false
    hideLoading()
  }
}

async function fetchFromAPI() {
  // This would be used with a real API
  // For now, we'll use mock data since we're not spending money
  return []
}

function getMockNews() {
  const category = appState.currentCategory
  let articles = mockNews[category] || mockNews.general

  // Filter by search query if provided
  if (appState.searchQuery) {
    const query = appState.searchQuery.toLowerCase()
    articles = articles.filter(article =>
      article.title.toLowerCase().includes(query) ||
      article.description.toLowerCase().includes(query)
    )
  }

  // Simulate pagination
  const startIndex = (appState.currentPage - 1) * 6
  const endIndex = startIndex + 6

  return articles.slice(startIndex, endIndex)
}

function sortArticles(articles) {
  return articles.sort((a, b) => {
    switch (appState.sortBy) {
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
}

// Display Functions
function displayNews() {
  displayHeroSection()
  displayNewsGrid()
  updateSectionTitle()
  updateLoadMoreButton()
}

function displayHeroSection() {
  if (!elements.heroArticles || appState.heroArticles.length === 0) return

  const [mainArticle, ...sideArticles] = appState.heroArticles

  elements.heroArticles.innerHTML = `
    <div class="hero-main">
      ${createHeroCard(mainArticle, 'large')}
    </div>
    <div class="hero-sidebar">
      ${sideArticles.map(article => createHeroCard(article, 'small')).join('')}
    </div>
  `
}

function displayNewsGrid() {
  if (!elements.newsGrid) return

  const articlesToShow = appState.articles.slice(4) // Skip hero articles

  if (articlesToShow.length === 0) {
    elements.newsGrid.innerHTML = '<div class="no-results">No articles found.</div>'
    return
  }

  elements.newsGrid.innerHTML = articlesToShow.map(createNewsCard).join('')
}

function createHeroCard(article, size) {
  return `
    <article class="hero-card ${size}" onclick="openModal('${encodeURIComponent(JSON.stringify(article))}')">
      <img src="${article.urlToImage || 'https://via.placeholder.com/400x250/6b7280/ffffff?text=No+Image'}"
           alt="${article.title}" class="news-image">
      <div class="news-content">
        <h3 class="news-title">${article.title}</h3>
        <p class="news-description">${article.description}</p>
        <div class="news-meta">
          <span class="news-source">${article.source.name}</span>
          <span class="news-date">${formatDate(article.publishedAt)}</span>
        </div>
      </div>
    </article>
  `
}

function createNewsCard(article) {
  return `
    <article class="news-card" onclick="openModal('${encodeURIComponent(JSON.stringify(article))}')">
      <img src="${article.urlToImage || 'https://via.placeholder.com/400x250/6b7280/ffffff?text=No+Image'}"
           alt="${article.title}" class="news-image">
      <div class="news-content">
        <h3 class="news-title">${article.title}</h3>
        <p class="news-description">${article.description}</p>
        <div class="news-meta">
          <span class="news-source">${article.source.name}</span>
          <span class="news-date">${formatDate(article.publishedAt)}</span>
        </div>
      </div>
    </article>
  `
}

function updateSectionTitle() {
  if (!elements.sectionTitle) return

  const categoryNames = {
    general: 'Latest News',
    technology: 'Technology',
    business: 'Business',
    sports: 'Sports',
    entertainment: 'Entertainment',
    health: 'Health'
  }

  let title = categoryNames[appState.currentCategory] || 'News'

  if (appState.searchQuery) {
    title = `Search Results for "${appState.searchQuery}"`
  }

  elements.sectionTitle.textContent = title
}

function updateLoadMoreButton() {
  if (!elements.loadMoreBtn) return

  // Show load more button if there might be more articles
  const hasMore = appState.articles.length >= 6 * appState.currentPage
  elements.loadMoreBtn.classList.toggle('hidden', !hasMore)
}

// Modal Functions
function openModal(articleData) {
  try {
    const article = JSON.parse(decodeURIComponent(articleData))
    displayArticleModal(article)
    elements.modal?.classList.remove('hidden')
    document.body.style.overflow = 'hidden'
  } catch (error) {
    console.error('Error opening modal:', error)
  }
}

function closeModal() {
  elements.modal?.classList.add('hidden')
  document.body.style.overflow = 'auto'
}

function displayArticleModal(article) {
  if (!elements.modalBody) return

  elements.modalBody.innerHTML = `
    <img src="${article.urlToImage || 'https://via.placeholder.com/800x400/6b7280/ffffff?text=No+Image'}"
         alt="${article.title}" class="news-image">
    <h1 class="news-title">${article.title}</h1>
    <div class="news-meta">
      <span class="news-source">${article.source.name}</span>
      <span class="news-date">${formatDate(article.publishedAt)}</span>
    </div>
    <p class="news-description">${article.content || article.description}</p>
    ${article.url ? `<a href="${article.url}" target="_blank" rel="noopener noreferrer" class="news-url">Read Full Article</a>` : ''}
  `
}

// UI State Functions
function showLoading() {
  elements.loading?.classList.remove('hidden')
  elements.error?.classList.add('hidden')
}

function hideLoading() {
  elements.loading?.classList.add('hidden')
}

function showError(message) {
  if (elements.error) {
    elements.error.classList.remove('hidden')
    const errorMessage = document.getElementById('error-message')
    if (errorMessage) {
      errorMessage.textContent = message
    }
  }
}

function hideError() {
  elements.error?.classList.add('hidden')
}

// Utility Functions
function formatDate(dateString) {
  try {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  } catch (error) {
    return 'Unknown date'
  }
}

// Make openModal globally available for onclick handlers
window.openModal = openModal