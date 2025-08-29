# NewsHub - React News Website

A modern, responsive news website built with React and Vite. This project showcases a complete news application with category browsing, search functionality, and a beautiful user interface.

## 🚀 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Dark/Light Theme**: Toggle between themes with persistent storage
- **Multiple Categories**: Browse news by Technology, Business, Sports, Entertainment, Health
- **Search Functionality**: Search through articles by title and description
- **Article Modal**: Click any article to view full details in a popup
- **Hero Section**: Featured articles prominently displayed on the homepage
- **Sort Options**: Sort articles by latest, popularity, or relevance
- **Load More**: Pagination for browsing additional articles
- **React Router**: Client-side routing for smooth navigation

## 🛠 Tech Stack

- **React 19** - Modern React with hooks and functional components
- **React Router** - Client-side routing
- **Vite** - Fast development server and build tool
- **CSS3** - Modern CSS with CSS variables for theming
- **Context API** - Global state management
- **Custom Hooks** - Reusable logic for news fetching and theme management

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.jsx      # Navigation and search
│   ├── NewsCard.jsx    # Article display component
│   ├── Modal.jsx       # Article detail popup
│   ├── Loading.jsx     # Loading state component
│   ├── Error.jsx       # Error state component
│   └── Footer.jsx      # Site footer
├── pages/              # Page components
│   ├── HomePage.jsx    # Home page with hero section
│   └── CategoryPage.jsx # Category-specific pages
├── context/            # React Context providers
│   ├── ThemeContext.jsx # Global theme management
│   └── NewsContext.jsx  # Global news state
├── hooks/              # Custom React hooks
│   └── useNews.js      # News fetching logic
├── utils/              # Utility functions
│   └── mockNews.js     # Mock data and utilities
├── App.jsx             # Main app component
├── main.jsx            # React entry point
└── style.css           # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd project1
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🎨 Customization

### Adding Real News APIs

The app currently uses mock data. To integrate with real news APIs:

1. Get an API key from services like:
   - [NewsAPI.org](https://newsapi.org/) - 100 free requests/day
   - [Currents API](https://currentsapi.services/) - Free tier available
   - [GNews API](https://gnews.io/) - 100 free requests/day

2. Update the `useNews.js` hook to fetch from real APIs
3. Add your API key to environment variables

### Theming

The app uses CSS variables for easy theming. Modify the `:root` and `[data-theme="dark"]` selectors in `style.css` to customize colors.

## 🤝 Contributing

This is a learning project! Feel free to:
- Add new features
- Improve the UI/UX
- Add tests
- Integrate with real APIs
- Convert to TypeScript

## 📚 Learning Resources

- [React Documentation](https://react.dev/)
- [React Router](https://reactrouter.com/)
- [Vite Documentation](https://vitejs.dev/)
- [Modern CSS](https://web.dev/learn/css/)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ for learning React development
