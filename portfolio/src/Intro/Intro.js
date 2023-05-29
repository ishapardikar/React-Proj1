import React from "react";
import "./Intro.css"
import Github2 from "../img/Github2.png";
import instagramlast from "../img/instagramlast.png";
import linkedin from "../img/linkedin.png";

import Girl from "../img/Girl.gif";



import pink3 from "../img/pink3.png"


const Intro = () => {
    return(
       
        <div className= "intro">
        <div className="i-left">
            <div className="i-name">
                <span> Hey! I am </span>
                <span>Ishaaaaa</span>
                <span> Cutie From Navi Mumbai </span>
            </div>
            <button className="button i-button"> xyzzz </button>
            <div className="i-icons">
               <img src={Github2} alt="github" />
               <img src={instagramlast} alt="instgram"/>
               <img src={linkedin} alt="linkedin"/>
            </div>
        </div>
        <div className="i-right">
            
            <img src={Girl} alt="prog"/>
            <img src={pink3} alt="pink"/>
           
            

           
        </div>
      </div>
    )

}
export default Intro; 