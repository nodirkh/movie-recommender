import React from "react";
import { useState } from "react";
import Homepage from "./Routes/Homepage";
import Recommendation from "./Routes/Recommendation";
import { ThemeProvider } from "./components/ThemeContext";

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  
  return (
    <ThemeProvider>
      <div className="app">
        {currentPage === 'home' ? <Homepage /> : <Recommendation />}
        
        {/* Navigation buttons for demo */}
        <div className="fixed bottom-6 right-6 flex space-x-2">
          <button
            onClick={() => setCurrentPage('home')}
            className={`px-4 py-2 rounded-lg transition-all duration-200 ${
              currentPage === 'home'
                ? 'bg-red-500 text-white'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => setCurrentPage('recom')}
            className={`px-4 py-2 rounded-lg transition-all duration-200 ${
              currentPage === 'recom'
                ? 'bg-red-500 text-white'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300'
            }`}
          >
            Recommendations
          </button>
        </div>
      </div>
    </ThemeProvider>
  );
};


export default App;
