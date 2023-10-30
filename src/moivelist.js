import {Component} from "react";
import MovieCard from "./moviecard";


class Movielist extends Component{
    constructor(){
        super();
        this.state ={
          movies : [
            {
              title: 'The Avengers',                  
              plot:
                "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
              poster:
                'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
              rating: '8.0',            
              price: 99,            
              star: 0,
              fav: false,
              cart: false                  
            },
            {
              title: 'The Dark Knight',                  
              plot:
                'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
              poster:
                'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',                  
              rating: '9.0',            
              price: 199,            
              star: 0,            
              fav: false,
              cart: false                  
            },
            {
              title: 'Iron Man',                 
              plot:
                'After being held captive in an Afghan cave, billionaire engineer Tony starsk creates a unique weaponized suit of armor to fight evil.',                  
              poster:
                'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg',                  
              rating: '7.9',            
              price: 139,            
              star: 0,            
              fav: false,
              cart: false                  
            }]
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
        const {movies} = this.state;
        const movieId = movies.indexOf(movie);

       movies[movieId].cart = ! movies[movieId].cart;
        this.setState({
            movies
        });
    }
   
   

   
    render(){
        // const {title,plot,price,rating,star,fav,cart,poster} = this.state.movies;
        const {movies} = this.state;

       return (
        <>
        {
          movies.map((movie,index)=>(
         <MovieCard movies={movie}
         key={index} 
         addStars={this.handleAddStar}
         decStars={this.handleDecStar} 
         favBtn = {this.handleUnFav}
         cartBtn = {this.handleCart}
         />))
        }

        
        </>
       
       )
        
    }
}
export default Movielist;