import React from "react";
import Row from "../components/Row";

const Homepage = () => {
  const mockMovies = [
    { movieID: 1, title: "The Dark Knight", thumbnail: "https://via.placeholder.com/300x450/333/fff?text=Dark+Knight", rating: 9.0, year: 2008, duration: 152 },
    { movieID: 2, title: "Inception", thumbnail: "https://via.placeholder.com/300x450/444/fff?text=Inception", rating: 8.8, year: 2010, duration: 148 },
    { movieID: 3, title: "Interstellar", thumbnail: "https://via.placeholder.com/300x450/555/fff?text=Interstellar", rating: 8.6, year: 2014, duration: 169 },
    { movieID: 4, title: "The Matrix", thumbnail: "https://via.placeholder.com/300x450/666/fff?text=Matrix", rating: 8.7, year: 1999, duration: 136 },
    { movieID: 5, title: "Pulp Fiction", thumbnail: "https://via.placeholder.com/300x450/777/fff?text=Pulp+Fiction", rating: 8.9, year: 1994, duration: 154 },
    { movieID: 6, title: "Fight Club", thumbnail: "https://via.placeholder.com/300x450/888/fff?text=Fight+Club", rating: 8.8, year: 1999, duration: 139 }
  ];
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      
      <div className="pt-16 pb-12 bg-gradient-to-br from-red-500/10 to-pink-500/10 dark:from-red-500/20 dark:to-pink-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Discover Your Next
              <span className="block bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
                Favorite Movie
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
              Personalized movie recommendations powered by advanced algorithms. Find movies that match your taste perfectly.
            </p>
            <a href="/recom">
              <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl hover:from-red-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-200 shadow-xl text-lg font-semibold">
                Start Discovering
              </button>
            </a>
          </div>
        </div>
      </div>
      
      <div className="py-12">
        <Row rowID="1" title="Action Movies" movies={mockMovies} />
        <Row rowID="2" title="Drama Movies" movies={mockMovies.slice(0, 4)} />
        <Row rowID="3" title="Adventure Movies" movies={mockMovies.slice(2)} />
      </div>
      
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-12 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-6 h-6 bg-gradient-to-r from-red-500 to-pink-500 rounded-md flex items-center justify-center">
              <Play className="w-3 h-3 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
              CineMatch
            </span>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            © 2025 CineMatch. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Homepage