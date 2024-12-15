
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Movie from "./Movie";

const Row = ({ title, movies = [], rowID }) => {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  
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
  
  if (!movies.length) return null;
  
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
