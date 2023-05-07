import React from "react";
import './Footer.css';

class Footer extends React.Component{
    render() {
      return(
      <div className="footer">
      <a href="https://instagram.com/ignis.productions?igshid=YmMyMTA2M2Y=" target="_blank" rel="noopener">
      <img src="87390.png" id="social" href=""/>
      </a>
      <a href="https://www.facebook.com/profile.php?id=100083416443628" target="_blank" rel="noopener">
      <img src="20673.png" id="social" href=""/>
      </a>
      <div className="inner">
        <div className="rights">
        <p>ALL RIGHTS RESERVED Ignis Productions. </p><br/>
        <p>POWERED BY Ignins DevOps</p>
        </div>
        <div className="socials">
          <h4><a href="https://www.instagram.com/direct/t/17851536095787794">Message us on instagram</a></h4><br />
          <h4><a href="https://www.facebook.com/messages/t/103403292436482">Message us on facebook</a></h4><br />
        </div>
        </div>
      </div>
       ) 
      }
}

export default Footer;