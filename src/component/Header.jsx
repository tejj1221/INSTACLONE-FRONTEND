import React from "react";
import "./Header.css"
import { BsCamera } from "react-icons/bs";
import { useNavigate } from "react-router";

const Header=()=>{
    const Navigate=useNavigate();
    return(
        <div className="head">
        <div className="logo">
            <img src="https://th.bing.com/th/id/OIP.7XzhxFPVQk5kpykv6NQuLgHaDq?pid=ImgDet&rs=1" alt="logo" className="logo"/>
        </div>
        <div className="camera"><button id="but" onClick={()=>{Navigate("/Post")}}><BsCamera size="4em"/></button></div>
        </div>
    );
}
export default Header;