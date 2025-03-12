import React, { useState } from 'react';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      // Placeholder for search functionality
      alert(`Searching for: ${searchTerm}`);
    }
  };

  return (
    <div className="search-container">
      <div className="logo">
        <span className="logo-text">DIA</span>
        <span className="logo-search">Search</span>
      </div>
      <form onSubmit={handleSearch} className="search-form">
        <input 
          type="text" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input" 
          placeholder="Search anything..."
        />
        <div className="search-buttons">
          <button type="submit" className="search-btn">Search</button>
          <button type="button" className="lucky-btn">I'm Feeling Lucky</button>
        </div>
      </form>
      <div className="footer">
        <p>© 2025 DIA Search | Developed with ❤️ by SkilledX</p>
      </div>
    </div>
  );
}

export default App;