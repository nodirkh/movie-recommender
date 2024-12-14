import React from "react";

const Movie = ({ item, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="relative flex-shrink-0 w-48 mx-2 cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative overflow-hidden rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105">
        <img
          src={item?.thumbnail || "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"}
          alt={item?.title}
          className="w-full h-72 object-cover"
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg";
          }}
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Movie info overlay */}
        <div className={`absolute inset-0 p-4 flex flex-col justify-end text-white transform transition-all duration-300 ${
          isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          <h3 className="font-bold text-lg mb-2 line-clamp-2">{item?.title}</h3>
          
          <div className="flex items-center space-x-4 text-sm">
            {item?.rating && (
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span>{item.rating}</span>
              </div>
            )}
            {item?.year && (
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>{item.year}</span>
              </div>
            )}
            {item?.duration && (
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{item.duration}m</span>
              </div>
            )}
          </div>
          
          <button className="mt-3 px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg transition-colors duration-200 text-sm font-medium">
            Watch Now
          </button>
        </div>
        
        {/* Play button overlay */}
        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <Play className="w-6 h-6 text-white ml-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
