'use client';
import YT, { YouTubeProps } from 'react-youtube';

export function YouTubeComponent(props: YouTubeProps) {
  return (
    <div className="relative w-full h-0 pb-[56.25%] my-6">
      <YT
        opts={{
          height: '100%',
          width: '100%',
        }}
        {...props}
        className="absolute top-0 left-0 w-full h-full"
      />
    </div>
  );
}
