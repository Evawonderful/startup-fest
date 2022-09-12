import { createContext, useLayoutEffect, useState } from "react";

const themes = {
    dark:{
        backgroundColor: "#212529",
        color:"#FFFFFF",
        secondaryColor: "#2A9D8F",
        orangeBtn: "#FF9F1C",
        greenBtn: "#2A9D8F",
        timerColor: "#2A9D8F"
        
    },

    light:{
        backgroundColor: "#FFFFFF",
        color: "#000000",
        timerColor: "#000000",
        secondaryBtn: "#D0D0D0"

    }
}


export const ThemeContext = createContext();

export const ThemeProvider = ({children})=>{
const [isDark, setIsDark] =useState(false);
const theme = isDark ? themes.dark : themes.light;

const toggleTheme = () => {
    localStorage.setItem('isDark', JSON.stringify(!isDark));

    setIsDark(!isDark);
}

useLayoutEffect(() => {
    const isDark = localStorage.getItem('isDark') === "true"
    setIsDark(isDark)
}, [])

    return(
        <ThemeContext.Provider value={[{theme, isDark}, toggleTheme]} >
            {children}
        </ThemeContext.Provider>
    )
}