import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Services.css";
import Carajillo from "../Pictures/Carajillo.png";
import VideoProduction from "../Pictures/VideoProduction.jpg";
import Screen from "../Pictures/Screen.png";


class Services extends React.Component{
    render(){
        return(
            <div className="cardsdiv">
                <div className="servObj">
                <img src= {VideoProduction} alt="Video Production"/>
                <div className="card">
                    <h1>Video Production</h1>
                </div>
                </div>

                <div className="servObj">
                <img src={Screen} alt="Video Editing"/>
                <div className="card">
                    <h1>Video Editing</h1>
                </div>
                </div>
                <div className="servObj">
                <img src= {Carajillo} alt="Experimental Marketing"/>
                <div className="card">
                    <h1>Experimental Marketing</h1>
                </div>
                </div>
            </div>
        )
    }
}

export default Services;