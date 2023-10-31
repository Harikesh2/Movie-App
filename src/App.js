import React from "react";
import Movielist from "./moivelist";
import Navbar from "./Navbar";
import { movies } from "./movieData";


class App extends React.Component  {
  constructor(){
    super();
    this.state ={
      movies : movies,
      cartCount: 0
    }    
}

handleAddStar =(movie)=>{
    const {movies} = this.state;
    const mid = movies.indexOf(movie);
    movies[mid].star +=0.5;
    if(movies[mid].star > 5){
        return;
    }

    this.setState({
        movies
    });
}

handleDecStar = (movie) =>{
    const {movies} = this.state;
    const movieId = movies.indexOf(movie);

    if(movies[movieId].star > 0){
        movies[movieId].star -=0.5;
    }

    this.setState({
        movies
    });
}
handleUnFav = (movie) =>{
    const {movies} = this.state;
    const movieId = movies.indexOf(movie);

    movies[movieId].fav = !movies[movieId].fav;

    this.setState({
        movies
    });
}
handleCart = (movie) =>{
    let {movies,cartCount} = this.state;
    const movieId = movies.indexOf(movie);

   movies[movieId].cart = ! movies[movieId].cart;

   if(movies[movieId].cart){
    cartCount += 1;
   }else{
    cartCount -= 1;
   }
    this.setState({
        movies,
        cartCount
    });
}
  render(){
    const {movies,cartCount} = this.state;
  return (  
   <>
   <Navbar cartCount={cartCount}/>
   <Movielist movies ={movies}
   addStars={this.handleAddStar}
   decStars={this.handleDecStar} 
   favBtn = {this.handleUnFav}
   cartBtn = {this.handleCart}
   />
   </>
  );
  }
}

export default App;
