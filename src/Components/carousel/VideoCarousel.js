import "./VideoCarousel.css";
import React, { useRef } from "react";
import { Carousel } from "react-bootstrap";
import Vid1 from "../videos/vid1.mp4";
import Vid2 from "../videos/vid2.mp4";
import Vid3 from "../videos/vid3.mp4";
import ReactPlayer from "react-player";
import "bootstrap/dist/css/bootstrap.css";



const VideoCarousel = () => {
  const [activePlay, setActivePlay] = useState(0);

  const handleSelect = (selectedIndex, e) => {
  setActivePlay(selectedIndex);
  };
  const videoProperties = [
    {
      id: 1,
      title: "Altamar",
      src: Vid1,
      credit: "Video by Ignis Productions",
    },
    {
      id: 2,
      title: "Habanero's",
      src: Vid2,
      credit: "Video by Ignis Productions",
    },
    {
      id: 3,
      title: "Habanero's 2",
      src: Vid3,
      credit: "Video by Ignis Productions",
    },

    
  ];


  return (
    <div className="carousel">
      <div className="pastwork">
        <a>Past Work</a>
      </div>
      <Carousel >
        {videoProperties.map((videoObj) => {
          return (
            <Carousel.Item key={videoObj.id}>
              <ReactPlayer
                url={videoObj.src}
                pip={false}
                controls={true}
                playing={activePlay !== key ? false : true}
              />
              <Carousel.Caption>
                <h3>{videoObj.title}</h3>
                <p>{videoObj.credit}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default VideoCarousel;

