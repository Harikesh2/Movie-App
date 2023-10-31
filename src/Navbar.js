import { Component } from "react";
import Styles from "./Navbar.module.css";

class Navbar extends Component{
   
    render(){
        const {cartCount} = this.props;
        return(
            <>
            <div className={Styles.nav}>
                <div className={Styles.title}>Movie App</div>
                <div className={Styles.cartContainer}>
                    <img className={Styles.icon}
                 src = "https://cdn-icons-png.flaticon.com/128/891/891462.png"></img>
                 <span className={Styles.cartCount}>{cartCount}</span>
                </div>
            </div>
            </>
        )
    }
}

export default Navbar;