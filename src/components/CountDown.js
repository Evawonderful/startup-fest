import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "../styles/CountDown.css";
import { ThemeContext } from "../contexts/theme";
import { useContext } from "react";

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const timerProps = {
  isPlaying: true,
  size: 86,
  strokeWidth: 1
};

const renderTime = (theme, time) => {
  
  return (
    <div className="time-wrapper">
      <div className="time" style={{color: theme.timerColor}}>{time}</div>
      {/* <div>{dimension}</div> */}
    </div>
  );
};

const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time) => (time / daySeconds) | 0;

export default function CountDown() {
  const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
  const endTime = stratTime + 243248; // use UNIX timestamp in seconds

  const remainingTime = endTime - stratTime;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;

  const [{theme, isDark}, toggleTheme] = useContext(ThemeContext);

  return (
    <div className="countdiv time-wrapper">
     <div className="time-wrapper">
      <CountdownCircleTimer
        {...timerProps}
        colors={theme.progressColor}
        duration={daysDuration}
        initialRemainingTime={remainingTime}
        
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>
            {renderTime(theme, getTimeDays(daysDuration - elapsedTime))}
            
          </span>
        )}
      </CountdownCircleTimer>
      <div style={{color: theme.timerColor}} className="dimension">DAYS</div>
     </div>
      

      <div>
        <CountdownCircleTimer
        {...timerProps}
        colors={theme.progressColor}
        duration={daySeconds}
        initialRemainingTime={remainingTime % daySeconds}
        onComplete={(totalElapsedTime) => ({
          shouldRepeat: remainingTime - totalElapsedTime > hourSeconds
        })}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>
            {renderTime(theme, getTimeHours(daySeconds - elapsedTime))}
            
          </span>
        )}
      </CountdownCircleTimer>
      <div style={{color: theme.timerColor}} className="dimension">HOURS</div>
      </div>    
      
      <div className="time-wrapper">
          <CountdownCircleTimer
        {...timerProps}
        colors={theme.progressColor}
        duration={hourSeconds}
        initialRemainingTime={remainingTime % hourSeconds}
        onComplete={(totalElapsedTime) => ({
          shouldRepeat: remainingTime - totalElapsedTime > minuteSeconds
        })}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>
            {renderTime(theme, getTimeMinutes(hourSeconds - elapsedTime))}
          </span>
        )}
      </CountdownCircleTimer>
      <div style={{color: theme.timerColor}} className="dimension">MINUTES</div>
      </div>    
    
      <div className="time-wrapper">
        <CountdownCircleTimer
        {...timerProps}
        colors={theme.progressColor}
        duration={minuteSeconds}
        initialRemainingTime={remainingTime % minuteSeconds}
        onComplete={(totalElapsedTime) => ({
          shouldRepeat: remainingTime - totalElapsedTime > 0
        })}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>
            {renderTime(theme, getTimeSeconds(elapsedTime))}
          </span>
        )}
      </CountdownCircleTimer>
      <div style={{color: theme.timerColor}} className="dimension">SECONDS</div>
      </div>
      
    </div>
  );
}
