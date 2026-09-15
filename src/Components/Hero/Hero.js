import React, { useEffect, useRef } from 'react';
import reel from '../../assets/videos/altamar.mp4';
import poster from '../../assets/images/poster-hero.jpg';
import { PlayIcon } from '../Icons/Icons';
import './Hero.css';

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      video.pause();
    }
  }, []);

  return (
    <section className="hero" id="top">
      <video
        ref={videoRef}
        className="hero__video"
        src={reel}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      <div className="hero__overlay" />

      <div className="container hero__content">
        <p className="eyebrow">
          <span className="rec-dot" /> Video production · McAllen, TX
        </p>
        <h1 className="hero__title">
          Stories that set your brand <span className="text-gradient">on fire.</span>
        </h1>
        <p className="hero__lead">
          We're Ignis Productions, a small crew that shoots, edits, and markets video for
          businesses ready to be seen.
        </p>
        <div className="hero__actions">
          <a href="#contact" className="btn btn--primary">
            Get a quote
          </a>
          <a href="#work" className="btn btn--ghost">
            <PlayIcon /> Watch our work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
