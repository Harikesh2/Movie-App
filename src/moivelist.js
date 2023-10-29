import {Component} from "react";
import MovieCard from "./moviecard";


class Movielist extends Component{
   
    render(){
       return (
        <>
        <MovieCard />
       <MovieCard />
       <MovieCard />
       <MovieCard />
        </>
       
       )
        
    }
}
export default Movielist;