import React from "react";

const Movie = (props) => {
  return (
    <div className="relative p-2 w-[160px] inline-block cursor-pointer">
      {props.item.thumbnail && (
        <img
          src={props.item?.thumbnail}
          alt={props.item?.title}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src =
              "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg";
          }}
          className="h-[225px]"
        ></img>
      )}
      {!props.item.thumbnail && (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
          alt={props.item?.title}
          className="h-[225px]"
        ></img>
      )}
      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
        <p className="white-space-normal text-xs font-bold flex justify-center items-center h-full text-center">
          {props.item?.title}
        </p>
      </div>
    </div>
  );
};

export default Movie;
