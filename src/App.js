import { useContext } from "react";
import Navbar from "./components/Navbar";
import { ThemeContext } from "./contexts/theme";
import './App.css';
import {Fab} from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import Hero from "./components/Hero";
import CountDown from "./components/CountDown";


function App() {
  const [{theme, isDark}, toggleTheme] = useContext(ThemeContext);
  
  return (
    <div className="app"
      style={{backgroundColor: theme.backgroundColor, color: theme.color}}>
        <Navbar/>
        <Hero/>
        <CountDown/>


        
        <Fab className="fabstyle" size="large" color={theme.color} aria-label="toggleTheme" onClick={toggleTheme}>{isDark ? <Brightness5Icon/> : <Brightness4Icon/>}</Fab>
        
       
    </div>
  );
}

export default App;
