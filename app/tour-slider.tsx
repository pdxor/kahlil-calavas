'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel';
import { tours } from './tours';

export default function TourSlider() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    if (!api) return;
    const update = () => setCurrent(api.selectedScrollSnap());
    update();
    api.on('select', update);
    api.on('reInit', update);
    return () => { api.off('select', update); api.off('reInit', update); };
  }, [api]);

  return (
    <Carousel setApi={setApi} opts={{ align: 'start', loop: true }} className="world-slider" aria-label="Recent digital twins from Future Lens" tabIndex={0}>
      <CarouselContent className="world-track">
        {tours.map((tour, index) => (
          <CarouselItem className="world-slide" key={tour.slug} aria-label={`${index + 1} of ${tours.length}: ${tour.name}`}>
            <a className="world-image" href={tour.url} target="_blank" rel="noopener noreferrer" aria-label={`Explore ${tour.name} — opens the digital twin in a new tab`} tabIndex={current === index ? 0 : -1}>
              <Image src={tour.image} alt={tour.alt} width={1600} height={1000} loading="lazy" unoptimized draggable="false" style={tour.slug === 'oya' ? { objectPosition: '50% 75%' } : undefined} />
              <span className="world-enter" aria-hidden="true">Step inside <span>↗</span></span>
              <span className="world-type">{tour.kind}</span>
            </a>
            <div className="world-caption"><div><p className="eyebrow">{tour.location}</p><h3><a href={tour.url} target="_blank" rel="noopener noreferrer" tabIndex={current === index ? 0 : -1}>{tour.name}</a></h3></div><p className="world-note">{tour.note}</p></div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="slider-footer wrap"><p className="slider-count" aria-live="polite" aria-atomic="true"><span>{String(current + 1).padStart(2, '0')}</span><span className="count-line" aria-hidden="true"/><span>{String(tours.length).padStart(2, '0')}</span><span className="sr-only"> — {tours[current].name}</span></p><div className="slider-controls"><CarouselPrevious className="slider-arrow" aria-label="Previous digital twin"/><CarouselNext className="slider-arrow" aria-label="Next digital twin"/></div></div>
    </Carousel>
  );
}
