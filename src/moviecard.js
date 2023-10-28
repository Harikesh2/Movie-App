import {Component} from "react";


class MovieCard extends Component{
    render(){
        return (
            <div className="main">
              <div className="movie-card">
                <div className="left">
                        <img alt="poster" src='https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg' />
                        </div>
                    <div className="right">
                        <div className="title">
                            The Avenger
                        </div>
                        <div className="plot">
                        Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.  
                        </div>
                        <div className="price">RS. 199</div>
                        <div className="footer">
                            <div className="rating">8.9</div>

                            <div className="star-dis">
                            <img className="str-btn" 
                                    alt="Decrease" 
                                    src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png" 
                                />
                                <img className="stars" 
                                        alt="stars" 
                                        src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"    
                                />
                                <img className="str-btn" 
                                    alt="increase" 
                                    src="https://cdn-icons-png.flaticon.com/128/2997/2997933.png" 
                                />
                                <span className="starCount">0</span> 
                            </div>

                            <button className="favourite-btn">Favourite</button>
                            <button className="cart-btn">Add to Cart</button>
                        </div>
                        

                    </div>

               
              </div>   
            </div>
        )
    }
}
export default MovieCard;