
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Movie from "./Movie";
import requests from "../requests";
import { AlertCircle } from 'lucide-react';


const Row = ({ title, type, rowID }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  
  useEffect(() => {
    const fetchMovies = async () => {
      if (!type) return;
      
      setIsLoading(true);
      setError(null);
      
      try {
        const response = await fetch(`${requests.url}?${new URLSearchParams(type)}`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setMovies(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error('Error fetching movies:', err);
        setError(err.message);
        setMovies([]);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchMovies();
  }, [type]);
  
  const checkScrollability = () => {
    const slider = document.getElementById(`slider${rowID}`);
    if (slider) {
      setCanScrollLeft(slider.scrollLeft > 0);
      setCanScrollRight(slider.scrollLeft < slider.scrollWidth - slider.clientWidth);
    }
  };
  
  useEffect(() => {
    checkScrollability();
    const slider = document.getElementById(`slider${rowID}`);
    if (slider) {
      slider.addEventListener('scroll', checkScrollability);
      return () => slider.removeEventListener('scroll', checkScrollability);
    }
  }, [rowID, movies]);
  
  const slide = (direction) => {
    const slider = document.getElementById(`slider${rowID}`);
    if (slider) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };
  
  if (isLoading) {
    return (
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6 px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {title}
          </h2>
        </div>
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex-shrink-0 w-48">
                <div className="w-full h-72 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6 px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {title}
          </h2>
        </div>
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
            <AlertCircle className="w-5 h-5 text-red-500" />
            <p className="text-red-700 dark:text-red-400">
              Failed to load {title.toLowerCase()}: {error}
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  if (!movies.length) {
    return (
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6 px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {title}
          </h2>
        </div>
        <div className="px-4 sm:px-6 lg:px-8">
          <p className="text-gray-500 dark:text-gray-400">No movies found for this category.</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-6 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          {title}
        </h2>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          {movies.length} movies
        </div>
      </div>
      
      <div className="relative group px-4 sm:px-6 lg:px-8">
        {canScrollLeft && (
          <button
            onClick={() => slide('left')}
            className="absolute left-4 sm:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-all duration-200 opacity-0 group-hover:opacity-100 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-300 mx-auto" />
          </button>
        )}
        
        <div
          id={`slider${rowID}`}
          className="flex overflow-x-auto scrollbar-hide space-x-0 pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {movies.map((movie, index) => (
            <Movie key={movie?.movieID || index} item={movie} index={index} />
          ))}
        </div>
        
        {canScrollRight && (
          <button
            onClick={() => slide('right')}
            className="absolute right-4 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-all duration-200 opacity-0 group-hover:opacity-100 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-gray-700 dark:text-gray-300 mx-auto" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Row;
