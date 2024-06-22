"use client";

import React, { useRef } from "react";
import {
  MediaCanPlayDetail,
  MediaCanPlayEvent,
  MediaPlayer,
  MediaPlayerInstance,
  MediaProvider,
  MediaProviderAdapter,
  MediaProviderChangeEvent,
  Poster,
  Track,
  isHLSProvider,
} from "@vidstack/react";
import { VideoLayout } from "./video-layout";

const textTracks = [
  // Subtitles
  {
    src: "https://files.vidstack.io/sprite-fight/subs/english.vtt",
    label: "English",
    language: "en-US",
    kind: "subtitles",
    default: true,
  },
  {
    src: "https://files.vidstack.io/sprite-fight/subs/spanish.vtt",
    label: "Spanish",
    language: "es-ES",
    kind: "subtitles",
  },
  // Chapters
  {
    src: "https://files.vidstack.io/sprite-fight/chapters.vtt",
    kind: "chapters",
    language: "en-US",
    default: true,
  },
] as const;

interface PlayerProps {
  className?: string;
}

export function Player({ className }: PlayerProps) {
  const player = useRef<MediaPlayerInstance>(null);

  function onCanPlay(
    detail: MediaCanPlayDetail,
    nativeEvent: MediaCanPlayEvent
  ) {
    //..
  }

  function onProviderChange(
    provider: MediaProviderAdapter | null,
    nativeEvent: MediaProviderChangeEvent
  ) {
    // Provider configurations
    if (isHLSProvider(provider)) {
      provider.config = {};
    }
  }

  return (
    <div className={`${className}`}>
      <MediaPlayer
        className="w-full aspect-video bg-zinc-700 text-white overflow-hidden rounded-lg ring-media-focus data-[focus]:ring-4"
        title="Sprite Fight"
        src="https://files.vidstack.io/sprite-fight/720p.mp4"
        crossOrigin
        playsInline
        onCanPlay={onCanPlay}
        ref={player}
      >
        <MediaProvider>
          <Poster
            className="absolute inset-0 block h-full w-full rounded-lg opacity-0 object-cover transition-opacity data-[visible]:opacity-100"
            src="https://files.vidstack.io/sprite-fight/poster.webp"
            alt="Girl walks into campfire with gnomes surrounding her friend ready for theri next meal!"
          />
          {textTracks.map((track) => (
            <Track key={track.src} {...track} />
          ))}
        </MediaProvider>
        <VideoLayout thumbnails="https://files.vidstack.io/sprite-fight/thumbnails.vtt" />
      </MediaPlayer>
    </div>
  );
}
