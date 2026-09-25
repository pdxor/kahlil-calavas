'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel';

export type TimelineVideo = {
  id: string;
  title: string;
  views: number;
  url: string;
  poster: string;
  videoSrc?: string;
};

// Supply only videos cleared for public playback, ordered by lifetime views.
export default function TimelineSlider({ videos }: { videos: readonly TimelineVideo[] }) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState<string | null>(null);

  useEffect(() => {
    if (!api) return;
    const update = () => { setCurrent(api.selectedScrollSnap()); setPlaying(null); };
    update();
    api.on('select', update);
    api.on('reInit', update);
    return () => { api.off('select', update); api.off('reInit', update); };
  }, [api]);

  if (!videos.length) return null;

  return <Carousel setApi={setApi} opts={{ align: 'start', loop: true }} className="timeline-slider" aria-label="From the timeline — most-viewed Facebook videos" tabIndex={0}>
    <CarouselContent className="world-track">
      {videos.map((video, index) => <CarouselItem className="timeline-slide" key={video.id} aria-label={`${index + 1} of ${videos.length}: ${video.title}`}>
        <div className="timeline-player">
          {/* oxlint-disable-next-line jsx-a11y/media-has-caption -- Imported originals may have no separate caption track; do not fabricate one. */}
          {playing === video.id && video.videoSrc ? <video controls autoPlay playsInline poster={video.poster} aria-label={video.title}><source src={video.videoSrc} type="video/mp4" /></video> : playing === video.id ? <iframe src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(video.url)}&show_text=false&width=640`} title={video.title} allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" /> : <button type="button" className="timeline-play" onClick={() => setPlaying(video.id)} aria-label={`Play ${video.title}`} tabIndex={current === index ? 0 : -1}><Image src={video.poster} alt="" width={960} height={720} unoptimized loading="lazy" draggable="false" /><span className="timeline-play-icon" aria-hidden="true">▶</span><span className="timeline-play-label">Watch video</span></button>}
        </div>
        <div className="timeline-caption"><p className="eyebrow">{video.views.toLocaleString('en-US')} views</p><h3>{video.title}</h3><a className="text-link" href={video.url} target="_blank" rel="noopener noreferrer" tabIndex={current === index ? 0 : -1}>Watch on Facebook <span aria-hidden="true">↗</span></a></div>
      </CarouselItem>)}
    </CarouselContent>
    <div className="slider-footer wrap"><p className="slider-count" aria-live="polite" aria-atomic="true"><span>{String(current + 1).padStart(2, '0')}</span><span className="count-line" aria-hidden="true" /><span>{String(videos.length).padStart(2, '0')}</span><span className="sr-only"> — {videos[current]?.title}</span></p><div className="slider-controls"><CarouselPrevious className="slider-arrow" aria-label="Previous timeline video" /><CarouselNext className="slider-arrow" aria-label="Next timeline video" /></div></div>
  </Carousel>;
}
