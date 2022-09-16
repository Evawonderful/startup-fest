import { createContext, useLayoutEffect, useState } from "react";

const themes = {
    dark:{
        backgroundColor: "#212529",
        color:"#FFFFFF",
        secondaryColor: "#2A9D8F",
        orangeBtn: "#FF9F1C",
        greenBtn: "#2A9D8F",
        timerColor: "#ffffff",
        progressColor: "#2A9D8F",
        vectorColor1 : "#94101F",
        attendColor: "#FF9F1C",
        aboutContainer: "rgba(52, 58, 64, 0.3)",
        borderColor: "#D0D0D0",
        imageBorder: "#2A9D8F",
        keyNoteColor: "#2A9D8F",
        tabBorder:"#FFFFFF",
        activeTab: "#2A9D8F",
        inactiveTab: "#485058"
        
        
    },

    light:{
        backgroundColor: "#FFFFFF",
        color: "#000000",
        timerColor: "#000000",
        secondaryBtn: "#D0D0D0",
        progressColor: "#000000",
        vectorColor1: "#B8B8B8",
        attendColor: "#B8B8B8",
        aboutContainer: "rgba(255, 255, 255, 0.7)",
        borderColor: "#474F56",
        imageBorder: "#FFFFFF",
        keyNoteColor: "#B8B8B8",
        tabBorder: "#000000",
        activeTab: "#B5AEAE",
        inactiveTab: "#ffffff"
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