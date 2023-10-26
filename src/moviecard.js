import {Component} from "react";
import "./index.css";

class MovieCard extends Component{
    render(){
        return (
            <div className="main">
              <div className="movie-card">
                <div className="left">
                    <img alt="poster"/>
                    <div className="right">
                        <div className="title">
                            The Avenger
                        </div>
                        <div className="plot">
                           Super natural power in the movie shown!!
                        </div>
                        <div className="price">
                           Super natural power in the movie shown!!
                        </div>
                        <div className="footer">
                            <div className="rating">
                                8.9
                            </div>
                            <div className="stars">
                                Star
                            </div>
                            <button className="favourite-btn">Favourite</button>
                            <button className="cart-btn">Add to Cart</button>
                        </div>
                        

                    </div>

                </div>
              </div>   
            </div>
        )
    }
}
export default MovieCard;