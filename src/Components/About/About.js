import React from 'react';
import './About.css';

const steps = [
  {
    title: 'Tell us your vision',
    description: "Share what you're selling, who it's for, and where it will run.",
  },
  {
    title: 'We plan and shoot',
    description: 'We handle the concept, the shot list, and the production day.',
  },
  {
    title: 'We edit and deliver',
    description: 'You get polished videos, ready to post, air, or put on your website.',
  },
];

const About = () => (
  <section className="section about" id="about">
    <div className="container about__layout">
      <div>
        <p className="eyebrow">About us</p>
        <h2 className="about__title">
          Small crew.
          <br />
          <span className="text-gradient">Big picture.</span>
        </h2>
        <p className="about__text">
          We're a small company based out of McAllen, Texas. We work directly with local
          businesses to take the idea in your head and get it in front of the world, from the first
          conversation to the final cut.
        </p>
      </div>

      <ol className="about__steps">
        {steps.map((step, index) => (
          <li key={step.title} className="about__step">
            <span className="about__step-number">{index + 1}</span>
            <div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default About;
