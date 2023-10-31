import React from "react";
import MovieCard from "./moviecard";



function Movielist(props){  
        // const {title,plot,price,rating,star,fav,cart,poster} = this.state.movies;
        const {movies,addStars,decStars,favBtn,cartBtn} = props;

       return (
        <>
        {
          movies.map((movie,index)=>(
         <MovieCard movies={movie}
         key={index} 
         addStars={addStars}
         decStars={decStars} 
         favBtn = {favBtn}
         cartBtn = {cartBtn}
         />))
        }

        
        </>
       
       )
}
export default Movielist;