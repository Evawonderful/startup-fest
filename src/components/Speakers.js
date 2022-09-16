import * as React from 'react';
import { ThemeContext } from "../contexts/theme";
import { useContext } from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

import "../styles/Speakers.css";
import speaker1 from "../assets/speaker1.jpg";
import speaker2 from "../assets/speaker2.jpg";
import speaker3 from "../assets/speaker3.jpg";
import speaker4 from "../assets/speaker4.jpg";

const Speakers = () =>{
    const [{theme, isDark}, toggleTheme] = useContext(ThemeContext);
    return(
        <>

            <div className="keynote">
                    <span className="keyNoteVector">
                    <svg xmlns="http://www.w3.org/2000/svg" width="8.5cw" height="8.5vw" viewBox="0 0 148 149" fill="none">
                        <path d="M135.969 45.5685L102.753 12.3535C86.8896 -3.51047 61.1107 -3.51046 45.2468 12.3535L12.0317 45.5685C-3.83225 61.4325 -3.83225 87.2113 12.0317 103.075L45.2468 136.29C61.1107 152.154 86.8896 152.154 102.753 136.29L135.969 103.075C151.832 87.2113 151.832 61.4325 135.969 45.5685ZM91.5992 125.384C81.8082 135.175 65.9442 135.175 56.1532 125.384L22.9381 92.1688C13.1471 82.3778 13.1471 66.5139 22.9381 56.7229L56.2772 23.3839C66.0682 13.5928 81.9321 13.5928 91.7231 23.3838L124.938 56.5989C134.729 66.3899 134.729 82.2539 124.938 92.0449L91.5992 125.384Z" fill={theme.keyNoteColor}/>
                        </svg>
                    </span>
                    <span className="keynote-title">keynote speakers</span>
            </div>

        <div className="imageDiv">
            
            {/* <ImageList sx={{ width: 500, height: 450 }}>
                
                {SpeakerData.map((speaker) => (
                <ImageListItem  key={speaker.name}>
                <img style={{borderColor: theme.imageBorder, border: "3px solid"}}
                    src={speaker.img}
                    srcSet={speaker.img}
                    alt={speaker.name}

                />
                <ImageListItemBar
                    title={speaker.name}
                    subtitle={speaker.bio}
                />
                </ImageListItem>
            ))}

            {SpeakerData.map((speaker) =>(
                <img src={speaker.img}/>
            ))}
        </ImageList> */}

       <div>
        <img src={speaker1} alt=""style={{borderColor: theme.imageBorder, border: "3px solid"}}/>
        {/* <span>
            <h5>Speaker 1</h5>
            <p>Speaker bio</p>
        </span>  */}
       </div>
       <div>
        <img src={speaker2} alt="" style={{borderColor: theme.imageBorder, border: "3px solid"}}/>
        {/* <span>
            <h5>Speaker 1</h5>
            <p>Speaker bio</p>
        </span>  */}
       </div>
       <div>
        <img src={speaker3} alt="" style={{borderColor: theme.imageBorder, border: "3px solid"}}/>
        {/* <span>
            <h5>Speaker 1</h5>
            <p>Speaker bio</p>
        </span>  */}
       </div>
       <div>
        <img src={speaker4} alt="" style={{borderColor: theme.imageBorder, border: "3px solid"}}/>
        {/* <span>
            <h5>Speaker 1</h5>
            <p>Speaker bio</p>
        </span>  */}
       </div>
       <div>
        <img src={speaker1} alt="" style={{borderColor: theme.imageBorder, border: "3px solid"}}/>
        {/* <span>
            <h5>Speaker 1</h5>
            <p>Speaker bio</p>
        </span>  */}
       </div>
       <div>
        <img src={speaker2} alt="" style={{borderColor: theme.imageBorder, border: "3px solid"}}/>
        {/* <span>
            <h5>Speaker 1</h5>
            <p>Speaker bio</p>
        </span>  */}
       </div>
       <div>
        <img src={speaker3} alt="" style={{borderColor: theme.imageBorder, border: "3px solid"}}/>
        {/* <span>
            <h5>Speaker 1</h5>
            <p>Speaker bio</p>
        </span>  */}
       </div>
       <div>
        <img src={speaker4} alt="" style={{borderColor: theme.imageBorder, border: "3px solid"}}/>
        {/* <span>
            <h5>Speaker 1</h5>
            <p>Speaker bio</p>
        </span>  */}
       </div>

        </div>
        </>
    )
}

export default Speakers;


// const SpeakerData = [
//     {
//         img: "./speaker1.jpg",
//         name:"Speaker 1",
//         bio:"Speaker bio"

//     },
//     {
//         img: "./speaker2.jpg",
//         name:"Speaker 2",
//         bio:"Speaker bio"

//     },
//     {
//         img: "./speaker3.jpg",
//         name:"Speaker 3",
//         bio:"Speaker bio"

//     },
//     {
//         img: "./speaker4.jpg",
//         name:"Speaker 4",
//         bio:"Speaker bio"

//     } , {
//         img: "./speaker1.jpg",
//         name:"Speaker 5",
//         bio:"Speaker bio"

//     },  {
//         img: "./speaker2.jpg",
//         name:"Speaker 6",
//         bio:"Speaker bio"

//     },  {
//         img: "./speaker3.jpg",
//         name:"Speaker 7",
//         bio:"Speaker bio"

//     },  {
//         img: "./speaker4.jpg",
//         name:"Speaker 8",
//         bio:"Speaker bio"

//     }
// ]