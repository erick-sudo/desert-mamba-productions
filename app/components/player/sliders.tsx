import { TimeSlider, VolumeSlider } from "@vidstack/react";

export function Volume() {
  return (
    <VolumeSlider.Root className="volume-slider group relative mx-[7.5px] inline-flex w-full h-10 max-w-[80px] cursor-pointer touch-none select-none items-center outline-none aria-hidden:hidden">
      <VolumeSlider.Track className="relative ring-media-focus z-0 h-[5px] w-full rounded-sm bg-cyan-400/40 group-data-[focus]:ring-[3px]">
        <VolumeSlider.TrackFill className="bg-cyan-400 absolute h-full w-[var(--slider-fill)] rounded-sm will-change-[width]" />
      </VolumeSlider.Track>

      <VolumeSlider.Preview
        className="flex flex-col items-center opacity-0 transition-opacity duration-200 data-[visible]:opacity-100 pointer-events-none"
        noClamp
      >
        <VolumeSlider.Value className="rounded-md text-sm font-medium bg-black/50 ring-1 ring-cyan-400/50 text-cyan-400 px-2 py-1" />
      </VolumeSlider.Preview>

      <VolumeSlider.Thumb className="absolute left-[var(--slider-fill)] top-1/2 z-20 h-[15px] w-[15px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-500 bg-cyan-950 ring-cyan-400/40 opacity-0 transition-opacity group-data-[active]:opacity-100 group-data-[dragging]:ring-4 will-change-[left]" />
    </VolumeSlider.Root>
  );
}

export interface TimeSliderProps {
  thumbnails?: string;
}

export function Time({ thumbnails }: TimeSliderProps) {
  return (
    <TimeSlider.Root className="time-slider group relative mx-[7.5px] inline-flex h-8 w-full cursor-pointer touch-none select-none items-start outline-none">
      <TimeSlider.Chapters className="relative flex h-full w-full items-center rounded-[1px]">
        {(cues, forwardRef) =>
          cues.map((cue) => (
            <div
              className="mr-0.5 last-child:mr-0 relative flex h-full w-full items-center rounded-[1px]"
              style={{ contain: "layout style" }}
              key={cue.startTime}
              ref={forwardRef}
            >
              <TimeSlider.Track className="relative ring-media-focus z-0 h-[5px] w-full rounded-sm bg-cyan-300/30 group-data-[focus]:ring-[3px]">
                <TimeSlider.TrackFill className="absolute h-full w-[var(--chapter-fill)] rounded-sm will-change-[width]" />
                <TimeSlider.Progress className="absolute z-10 h-full w-[var(--chapter-progress)] rounded-sm bg-cyan-400/50 will-change-[width]" />
              </TimeSlider.Track>
            </div>
          ))
        }
      </TimeSlider.Chapters>

      <TimeSlider.Thumb className="absolute left-[var(--slider-fill)] top-1/2 z-20 h-[15px] w-[15px] bg-cyan-400 rounded-full -translate-x-1/2 -translate-y-1/2 border border-cyan-400 ring-cyan-400/40 opacity-0 transition-opacity group-data-[active]:opacity-100 group-data-[dragging]:ring-4 will-change-[left]" />

      <TimeSlider.Preview className="flex flex-col items-center transition-opacity duration-200 opacity-0 data-[visible]:opacity-100 pointer-events-none">
        {thumbnails ? (
          <TimeSlider.Thumbnail.Root
            src={thumbnails}
            className="bloch h-[var(--thumbnail-height)] max-h-[160px] min-h-[80px] w-[var(--thumnail-width)] min-w-[120px] max-w-[180px] overflow-hidden ring-1 ring-cyan-500/50 shadow shadow-cyan-500/50 rounded-md bg-black"
          >
            <TimeSlider.Thumbnail.Img />
          </TimeSlider.Thumbnail.Root>
        ) : null}

        <TimeSlider.ChapterTitle className="mt-2 text-sm font-semibold text-cyan-400" />
        <TimeSlider.Value className="text-[13px] text-cyan-300" />
      </TimeSlider.Preview>
    </TimeSlider.Root>
  );
}
