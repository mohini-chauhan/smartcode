import "./Icondesc.css";
import React from 'react';
import protection from "./pin-2.png";
import magnifier from "./magnifier.png";
import control from "./dataprotection.png";
import button from "./button-record.png";
import support from "./support.png";
import paper from "./paper.png";
import wrkflow from "./r-chat.png";
import puzzle from "./puzzle.png";
function Featureicon(data){
    return(
        <div className="icons-grid-container">
                <img src={data["icon"]} alt="featureicon"/>
                <h2>{data["h2"]}</h2>
                <hr />  
                <p>4,729 curated design resources to energize your creative workflow</p>
        </div>
    )
}
const Icondesc = () => {
    var con1={
        "icon":protection,
        "h2":'Protect Your Data' 
    }
    var con2={
        "icon":magnifier,
        "h2":"Super Smart Search"
    }
    var con3={
        "icon":control,
        "h2":"Control everything in one place"
    }
    var con4={
        "icon":button,
        "h2":"Work better together"
    }
    var con5={
        "icon":support,
        "h2":"24/7 Live Customer Support"
    }
    var con6={
        "icon":paper,
        "h2":"Project Management"
    }
    var con7={
        "icon":wrkflow,
        "h2":"Workflow builder"
    }
    var con8={
        "icon":puzzle,
        "h2":"Bring your team in channels"
    }
    return (
        <div className="iconsdesc-container">
            <div className="icondesc-wrapper">
                {Featureicon(con1)}
                {Featureicon(con2)}
                {Featureicon(con3)}
                {Featureicon(con4)}
                {Featureicon(con5)}
                {Featureicon(con6)}
                {Featureicon(con7)}
                {Featureicon(con8)}

            </div>
            
        </div>
    )
}

export default Icondesc
