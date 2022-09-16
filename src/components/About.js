import aboutimg1 from "../assets/aboutimg1.jpg";
import { ThemeContext } from "../contexts/theme";
import { useContext } from "react";
import "../styles/About.css";

const About = () =>{
    const [{theme, isDark}, toggleTheme] = useContext(ThemeContext);
    return(
        <div className="about" >
           
           <div className="title">
                    <span className="vector1">
                        <svg width="8.5vw" height="8.5vw" viewBox="0 0 129 129" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M128.3 26V27.8H119.4V26C119.4 16.6 111.7 8.9 102.3 8.9H26C16.6 8.9 8.89999 16.6 8.89999 26V102.3C8.89999 111.7 16.6 119.4 26 119.4H43.5V128.3H26C11.7 128.3 0 116.6 0 102.3V26C0 11.7 11.6 0 26 0H102.3C116.6 0 128.3 11.6 128.3 26Z" fill={theme.vectorColor1}/>
                            </svg>
                    </span>
                    <span className="about-title">bringing major stakeholders together</span>
                </div>

            <div className="row">
                <div className="column overlay ">
                    
                    <div className="about-container" style={{backgroundColor: theme.aboutContainer, borderColor: theme.borderColor }}>
                    <p className="aboutText" >The IBADAN STARTUP FESTIVAL 2022 is designed to bring industry stakeholders
                     together to discuss and brainstorm on the evolution of the Internet and the emergence of 
                     startup and governance in Ibadan; its relevance and implications in today's global, 
                     African and Nigerian economy.
                    
                    The event will focus on:
                    <ol>
                        <li>Start-up VS governance</li>
                        <li> Government Policies that will shape start-up and businesses in Nigeria.</li>
                    </ol>
                    The event will be attended by high-level experts from the corporate and public sectors, decision and key policy makers, as well as professionals in Fintech, Banking, Judiciary, and Law Enforcement Agencies.
                    </p></div>
                   
                </div>

                <div className="column under">
                    <img src={aboutimg1} className="aboutImg"/>
                </div>
            </div>
        </div>
    )
}

export default About;