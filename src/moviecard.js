import {Component} from "react";


class MovieCard extends Component{
    constructor(){
        super();
        this.state ={
            title: "The Avengers!",
            plot: "",
            price: 199.345,
            rating: 8.5,
            star: 0,
            fav: true,
            cart: false
        }
    }
    decstars=()=>{
        if(this.state.star <=0){
            return;
        }
        this.setState({
            star : this.state.star -0.5
        });
    }
    addstars=()=>{
        if(this.state.star >=10){
            return;
        }
        this.setState({
            star: this.state.star +0.5
        });
        // this.state.star += 0.5;
        // console.log("stars", this.state.star);
    }
    handlefav=()=>{
        this.setState({
            fav: !this.state.fav
        });
    }
    handlecart=()=>{
        this.setState({
            cart: !this.state.cart
        });
    }
    render(){
        const {title,plot,price,rating,star,fav,cart}= this.state;
        return (
            <div className="main">
              <div className="movie-card">
                <div className="left">
                        <img alt="poster" src='https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg' />
                        </div>
                    <div className="right">
                        <div className="title">
                          {this.state.title}
                        </div>
                        <div className="plot">
                        Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.  
                        </div>
                        <div className="price">RS {price}</div>
                        <div className="footer">
                            <div className="rating">8.9</div>

                            <div className="star-dis">
                            <img className="str-btn" 
                                    alt="Decrease" 
                                    src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png" 
                                    onClick={this.decstars} 
                                />
                                <img className="stars" 
                                        alt="stars" 
                                        src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"    
                                />
                                <img className="str-btn" 
                                    alt="increase" 
                                    src="https://cdn-icons-png.flaticon.com/128/2997/2997933.png"
                                    onClick={this.addstars} 
                                />
                                <span className="starCount">{star}</span> 
                            </div>
                            {fav?                             <button className="unfavourite-btn" onClick={this.handlefav}>Un-Favourite</button>: <button className="favourite-btn" onClick={this.handlefav}>Favourite</button>}

                            {cart?<button className="cart-btn" onClick={this.handlecart}>Add to Cart</button>:     <button className="Remove-btn" onClick={this.handlecart}>Remove from Cart</button>}                        
                            
                        </div>
                        

                    </div>

               
              </div>   
            </div>
        )
    }
}
export default MovieCard;