'use client';

import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import technologies from './technologies.json';

export default function TechnologySlider() {
  return (
    <section id="technologies" className="section technology-section" aria-labelledby="technology-title">
      <Carousel
        opts={{ align: 'start', loop: true, slidesToScroll: 'auto' }}
        className="technology-slider"
        aria-label="Technologies I work with"
        tabIndex={0}
      >
        <div className="wrap technology-heading">
          <h2 id="technology-title">Tools I work with.</h2>
          <div className="slider-controls">
            <CarouselPrevious className="slider-arrow" aria-label="Previous technologies" />
            <CarouselNext className="slider-arrow" aria-label="Next technologies" />
          </div>
        </div>
        <CarouselContent className="technology-track">
          {technologies.map((technology, index) => (
            <CarouselItem
              key={technology.id}
              className="technology-slide"
              aria-label={`${index + 1} of ${technologies.length}: ${technology.name}`}
            >
              <div className="technology-logo">
                <Image
                  src={technology.logo}
                  alt=""
                  width={112}
                  height={56}
                  unoptimized
                  loading="lazy"
                  draggable={false}
                  className={`technology-mark technology-mark-${technology.treatment}`}
                />
              </div>
              <p>{technology.name}</p>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
