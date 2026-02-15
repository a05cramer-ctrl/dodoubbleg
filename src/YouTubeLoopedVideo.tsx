import { useEffect, useRef } from 'react'

declare global {
  interface Window {
    YT: {
      Player: new (element: HTMLElement, options: Record<string, unknown>) => {
        seekTo: (s: number, b: boolean) => void
        playVideo: () => void
        unMute: () => void
      }
    }
    onYouTubeIframeAPIReady?: () => void
  }
}

const VIDEO_ID = 'UNjIzrLs9tU'
const START_TIME = 12
const YT_ENDED = 0
const YT_PLAYING = 1

export function YouTubeLoopedVideo() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const loadPlayer = () => {
      if (!window.YT?.Player || !containerRef.current) return

      const player = new window.YT.Player(containerRef.current, {
        videoId: VIDEO_ID,
        playerVars: {
          autoplay: 1,
          mute: 1,
          start: START_TIME,
        },
        events: {
          onStateChange: (event: { data: number }) => {
            if (event.data === YT_ENDED) {
              player.seekTo(START_TIME, true)
              player.playVideo()
            } else if (event.data === YT_PLAYING) {
              player.unMute()
            }
          },
        },
      })
    }

    if (window.YT?.Player) {
      loadPlayer()
      return
    }

    const tag = document.createElement('script')
    tag.src = 'https://www.youtube.com/iframe_api'
    const firstScriptTag = document.getElementsByTagName('script')[0]
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag)

    window.onYouTubeIframeAPIReady = () => {
      loadPlayer()
    }

    return () => {
      window.onYouTubeIframeAPIReady = () => {}
    }
  }, [])

  return <div ref={containerRef} className="video-iframe" />
}
