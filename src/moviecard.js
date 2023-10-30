import {Component} from "react";


class MovieCard extends Component{
    
    render(){
        const {title,plot,price,rating,star,fav,cart,poster}= this.props.movies;
        const {addStars,movies,decStars,favBtn,cartBtn} = this.props;
        return (
            <div className="main">
              <div className="movie-card">
                <div className="left">
                        <img alt="poster" src={poster} />
                        </div>
                    <div className="right">
                        <div className="title">
                          {title}
                        </div>
                        <div className="plot">
                        {plot}
                        </div>
                        <div className="price">RS {price}</div>
                        <div className="footer">
                            <div className="rating">{rating}</div>

                            <div className="star-dis">
                            <img className="str-btn" 
                                    alt="Decrease" 
                                    src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png" 
                                    onClick={()=>decStars(movies)} 
                                />
                                <img className="stars" 
                                        alt="stars" 
                                        src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"    
                                />
                                <img className="str-btn" 
                                    alt="increase" 
                                    src="https://cdn-icons-png.flaticon.com/128/2997/2997933.png"
                                    onClick={()=>{addStars(movies)}} 
                                />
                                <span className="starCount">{star}</span> 
                            </div>
                            {fav?<button className="unfavourite-btn" onClick={()=>favBtn(movies)}>Un-Favourite</button>: <button className="favourite-btn" onClick={()=>favBtn(movies)}>Favourite</button>}

                            {cart?<button className="cart-btn" onClick={()=>cartBtn(movies)}>Add to Cart</button>:     <button className="Remove-btn" onClick={()=> cartBtn(movies)}>Remove from Cart</button>}                        
                            
                        </div>
                        

                    </div>

               
              </div>   
            </div>
        )
    }
}
export default MovieCard;