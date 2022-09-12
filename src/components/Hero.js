import { ThemeContext } from "../contexts/theme";
import { useState, useContext } from "react";
import "../styles/Hero.css";

const Hero = () => {
    const [{theme, isDark}, toggleTheme] = useContext(ThemeContext);

    return(
        <div className="hero">
            <span style={ {color: theme.secondaryColor}} className="first">The first of its kind</span><br/>
            <span className="fest">Ibadan Startup Festival <br/> 2022</span><br/>
            <span className="theme-text">THEME: </span> <span className="theme">STARTUP IN THE NIGERIA STRIVING ECONOMY</span>
            
           
                <ul className="details">
                    <li>october 21st, 2022</li>
                    <li>MANHATTAN hall, jericho, ibadan</li>
                </ul>
           

            <span className="btn-group" style={{color: theme.color}}>
                <button className="btn-hero green" style={{backgroundColor: theme.greenBtn, color: theme.color}}>REGISTER NOW</button>
                <button className="btn-hero orange" style={{backgroundColor: theme.orangeBtn, color: theme.color}}>BECOME A SPONSOR</button>
            </span>

        </div>
    )

}

export default Hero;