import React from "react";
import './Info.css'

class Info extends React.Component{
  render(){ 
    return (
        <div className="info"> 
        <div id="about" className="infor">
        <a>We are a small company based out of McAllen Tx</a><br/>
        <a>let us provide you the services you need to get your vision to the world</a>
      </div><br/>
        <div id="contact" className="infor">
        Let us shoot you a quote
        contact us by email
        ignis.productions@hotmail.com
      </div>
      </div>
      )
}
}

export default Info;
