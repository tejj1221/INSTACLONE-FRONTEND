import React from "react";
import "./LandingPage.css";
import img from "./nature2.jpg"
import { useNavigate } from "react-router";
const LandingPage=()=>{
    const Navigate=useNavigate();
    return(
        <div className="main">
            <div className="image">
                <img src={img} alt="title"/>
            </div>
            <div className="heading">
                <div className="title">INSTACLONE</div>
                <button className="btn" onClick={()=>{
                    Navigate("/PostView")
                }}>Enter</button>
            </div>
        </div>
    );

}
export default LandingPage;