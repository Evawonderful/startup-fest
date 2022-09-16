import { ThemeContext } from "../contexts/theme";
import { useContext } from "react";
import '../styles/Schedule.css';

const Schedule = () =>{
    const [{theme, isDark}, toggleTheme] = useContext(ThemeContext);
    return(
        <>

            <div className="title">
                    <span className="vector1">
                        <svg width="8.5vw" height="8.5vw" viewBox="0 0 129 129" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M128.3 26V27.8H119.4V26C119.4 16.6 111.7 8.9 102.3 8.9H26C16.6 8.9 8.89999 16.6 8.89999 26V102.3C8.89999 111.7 16.6 119.4 26 119.4H43.5V128.3H26C11.7 128.3 0 116.6 0 102.3V26C0 11.7 11.6 0 26 0H102.3C116.6 0 128.3 11.6 128.3 26Z" fill={theme.vectorColor1}/>
                            </svg>
                    </span>
                    <span className="about-title">event schedule</span>
            </div>

            <div>
                <span className="tabs" >
                    <button className="tab tab1" style={{border: theme.tabBorder, backgroundColor: theme.activeTab, color: theme.color}} >Morning Session</button>
                    <button className="tab tab2" style={{border: theme.tabBorder, backgroundColor: theme.inactiveTab, color: theme.color}} >Afternoon Session</button>
                </span>
            </div>
        </>
    )
}

export default Schedule;