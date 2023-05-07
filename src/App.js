import React from 'react';
import './App.css';
import VideoCarousel from './Components/carousel/VideoCarousel';
import NavScrollExample from "./Components/Navbar/Navbar";
import Info from "./Components/Info/Info";
import Services from "./Components/Services/Services"
import Footer from './Components/Footer/Footer';

class App extends React.Component {
  render() {
    return(
      <div>
        <div className="App">
          <NavScrollExample />
          <VideoCarousel />
          <Services />
          <Info />
          <Footer />
      </div>
    </div>
  );
}

}


export default App;
