import React from 'react';
import videoProduction from '../../assets/images/video-production.jpg';
import videoEditing from '../../assets/images/video-editing.jpg';
import marketing from '../../assets/images/marketing.jpg';
import './Services.css';

const services = [
  {
    title: 'Video Production',
    description:
      'Commercials, social spots, and brand films, planned and shot on location with professional cameras, lighting, and audio.',
    image: videoProduction,
    alt: 'Camera operator filming inside a car',
  },
  {
    title: 'Video Editing',
    description:
      'Cutting, color grading, motion graphics, and sound, delivered in every format your channels need.',
    image: videoEditing,
    alt: 'Editing timeline for the Altamar video',
  },
  {
    title: 'Experimental Marketing',
    description:
      'Creative campaigns that put your product in front of real customers, online and in person.',
    image: marketing,
    alt: 'Styled product shot of a coffee cocktail',
  },
];

const Services = () => (
  <section className="section services" id="services">
    <div className="container">
      <div className="section-header">
        <p className="eyebrow">Services</p>
        <h2>Everything you need to get your vision out there</h2>
      </div>

      <ul className="services__grid">
        {services.map((service, index) => (
          <li key={service.title} className="service-card">
            <div className="service-card__media">
              <img src={service.image} alt={service.alt} loading="lazy" />
            </div>
            <div className="service-card__body">
              <span className="service-card__index">{String(index + 1).padStart(2, '0')}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Services;
