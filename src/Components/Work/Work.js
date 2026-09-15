import React, { useState } from 'react';
import altamar from '../../assets/videos/altamar.mp4';
import habaneros from '../../assets/videos/habaneros.mp4';
import habaneros2 from '../../assets/videos/habaneros-2.mp4';
import altamarPoster from '../../assets/images/poster-altamar.jpg';
import habanerosPoster from '../../assets/images/poster-habaneros.jpg';
import habaneros2Poster from '../../assets/images/poster-habaneros-2.jpg';
import { PlayIcon } from '../Icons/Icons';
import './Work.css';

const projects = [
  { id: 'altamar', title: 'Altamar', subtitle: 'Cocktails', duration: '0:34', src: altamar, poster: altamarPoster },
  { id: 'habaneros', title: "Habanero's", subtitle: 'Kitchen', duration: '0:30', src: habaneros, poster: habanerosPoster },
  { id: 'habaneros-2', title: "Habanero's", subtitle: 'Bar', duration: '0:31', src: habaneros2, poster: habaneros2Poster },
];

const Work = () => {
  const [activeId, setActiveId] = useState(projects[0].id);
  // Only autoplay after the visitor picks a video, never on page load.
  const [userSelected, setUserSelected] = useState(false);
  const active = projects.find((p) => p.id === activeId);

  const select = (id) => {
    setActiveId(id);
    setUserSelected(true);
  };

  return (
    <section className="section work" id="work">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Past work</p>
          <h2>Recent projects</h2>
          <p>A few of the brand videos we've produced for local businesses.</p>
        </div>

        <div className="work__layout">
          <div className="work__stage">
            <div className="work__player">
              <video
                key={active.id}
                src={active.src}
                poster={active.poster}
                controls
                playsInline
                preload="metadata"
                autoPlay={userSelected}
              />
            </div>
            <div className="work__caption">
              <h3>
                {active.title} <span className="work__caption-sub">· {active.subtitle}</span>
              </h3>
              <p>Video by Ignis Productions</p>
            </div>
          </div>

          <ul className="work__list">
            {projects.map((project, index) => {
              const isActive = project.id === activeId;
              return (
                <li key={project.id}>
                  <button
                    type="button"
                    className={`work__item ${isActive ? 'is-active' : ''}`}
                    aria-pressed={isActive}
                    onClick={() => select(project.id)}
                  >
                    <span className="work__thumb">
                      <img src={project.poster} alt="" loading="lazy" />
                      <span className="work__thumb-play">
                        <PlayIcon />
                      </span>
                    </span>
                    <span className="work__item-text">
                      <span className="work__item-index">{String(index + 1).padStart(2, '0')}</span>
                      <span className="work__item-title">
                        {project.title} · {project.subtitle}
                      </span>
                      <span className="work__item-duration">{project.duration}</span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Work;
