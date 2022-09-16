import { ThemeContext } from "../contexts/theme";
import { useContext } from "react";

import "../styles/Schedule.css"

 const MorningSession = () =>{

    const [{theme, isDark}, toggleTheme] = useContext(ThemeContext);

    return(
        <>
            <table>
                {MorningSchedule.map((schedule) => (
                    <tr style={{borderColor: theme.color}}>
                    <td className="time">{schedule.time}</td>
                    <td>
                        <p className="activity">{schedule.activity}</p>
                        <p className="description">{schedule.description}</p>
                    </td>
                </tr>
                ))
}
            </table>
        </>
    )
}

export default MorningSession;

const MorningSchedule = [
    {
        time: "08:00am- 8: 45am  ",
        activity: "Arrival and Registration ",
        description: "Arrival and registration of invited guests and participants",
    },
    {
        time: "09:00am- 9:10am",
        activity: "Welcome Address",
        description: "Arrival and registration of invited guests and participants",
    },
    {
        time: "09:10am – 9:55am",
        activity: "Keynote Address ",
        description: "Arrival and registration of invited guests and participants",
    },
    {
        time: "09:55am–10:05am",
        activity: "Questions and Answers ",
        description: "Arrival and registration of invited guests and participants",
    },
    {
        time: "10:05am – 10: 50am",
        activity: "Pitch Battle competition – Early stage start-up  ",
        description: "Arrival and registration of invited guests and participants",
    },
    {
        time: "10:50am – 11:50am",
        activity: "Panel Session 1 + Questions and Answers",
        description: "Arrival and registration of invited guests and participants",
    },
    {
        time: "11:50am – 12:10pm",
        activity: "Tea Break",
        description: "Arrival and registration of invited guests and participants",
    },
    
    
    

]