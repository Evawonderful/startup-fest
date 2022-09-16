import attendimg from "../assets/attendimg.jpg";
import { ThemeContext } from "../contexts/theme";
import { useContext } from "react";
import "../styles/About.css";

const Attend = () =>{
    const [{theme, isDark}, toggleTheme] = useContext(ThemeContext);
    return(
        <div className="about" >
            
           
           <div className="attend-title">
                    <span className="vector1">
                        <svg width="8.5vw" height="8.5vw" viewBox="0 0 129 129" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M128.3 26V27.8H119.4V26C119.4 16.6 111.7 8.9 102.3 8.9H26C16.6 8.9 8.89999 16.6 8.89999 26V102.3C8.89999 111.7 16.6 119.4 26 119.4H43.5V128.3H26C11.7 128.3 0 116.6 0 102.3V26C0 11.7 11.6 0 26 0H102.3C116.6 0 128.3 11.6 128.3 26Z" fill={theme.attendColor}/>
                            </svg>
                    </span>
                    <span className="about-title">why attend</span>
                </div>

            <div className="row">

                <div className="column under">
                    <img src={attendimg} className="aboutImg"/>
                </div>

                <div className="column overlay ">
                    
                    <div className="attend-container" style={{backgroundColor: theme.aboutContainer, borderColor: theme.borderColor, color: theme.color}}>
                    <p className="aboutText" >Do you want to grow your business by expanding your network and connecting with a worldwide community? Then the Ibadan Start-up Festival 2022 is exactly what you need. This is a one-day event where you will gain relevant insight and hear from leading experts directly from the source. You will be able to capitalize on new possibilities and connect with the big players as well as fresh talent on the scene. 

                        <p>What are you waiting for? Register for the event now!</p>
                        
                    <button className="btn-hero green" style={{backgroundColor: theme.greenBtn, color: theme.color}}>REGISTER NOW</button>
                    </p></div>
                   
                </div>

                
            </div>
        </div>
    )
}

export default Attend;