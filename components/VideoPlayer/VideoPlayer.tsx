'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { IconPlayerPause, IconPlayerPlay } from '@tabler/icons-react';
import { ActionIcon, Box, Card, Group, Slider, Stack, Text } from '@mantine/core';

interface VideoPlayerProps {
  src: string;
  poster?: string;
  title: string;
  date: string;
  captionsSrc?: string;
  captionsLang?: string;
}

export default function VideoPlayer({
  src,
  poster,
  title,
  date,
  captionsSrc,
  captionsLang = 'en',
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const setVideoDuration = () => setDuration(video.duration);
      const handleVideoEnd = () => {
        setIsPlaying(false);
        setCurrentTime(0);
        if (video){video.currentTime = 0;} 
      };

      // Add event listeners
      video.addEventListener('loadedmetadata', setVideoDuration);
      video.addEventListener('ended', handleVideoEnd);

      // Initial duration set (in case video is already loaded)
      if (video.readyState >= 1) {
        setDuration(video.duration);
      }

      return () => {
        video.removeEventListener('loadedmetadata', setVideoDuration);
        video.removeEventListener('ended', handleVideoEnd);
      };
    }
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const formatTime = (time: number) => {
    if (!time || isNaN(time)) {return '0:00'};
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  return (
    <Card padding={0} radius="md" style={{ width: '100%', position: 'relative' }}>
      <Box style={{ position: 'relative' }}>
        <video
          ref={videoRef}
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            aspectRatio: '16/9',
            objectFit: 'cover',
          }}
          onTimeUpdate={handleTimeUpdate}
          src={src}
          poster={poster}
        >
            <track
              kind="captions"
              src={captionsSrc}
              srcLang={captionsLang}
              label={captionsLang === 'en' ? 'English' : captionsLang}
              default
            />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <Box
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.3)',
          }}
        >
          {/* Share Button */}
          <ActionIcon
            variant="transparent"
            color="white"
            size="lg"
            style={{
              position: 'absolute',
              top: 16,
              right: 16,
            }}
          >
            <Image src="/icons/share-icon.png" alt="share-icon" width={24} height={24} />
          </ActionIcon>

          {/* Center Play Button */}
          <ActionIcon
            variant="transparent"
            color="white"
            size={64}
            onClick={togglePlay}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              opacity: isPlaying ? 0 : 1,
              transition: 'opacity 0.2s',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '50%',
            }}
          >
            {isPlaying ? <IconPlayerPause size={32} /> : <IconPlayerPlay size={32} />}
          </ActionIcon>

          {/* Info and Controls */}
          <Stack
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: 16,
              background: 'linear-gradient(transparent, rgba(0, 0, 0, 0.6))',
            }}
          >
            <Stack>
              <Text size="sm" c="white">
                {date}
              </Text>
              <Text size="xl" fw={700} c="white">
                {title}
              </Text>
            </Stack>

            <Group align="center">
              <ActionIcon variant="transparent" color="white" onClick={togglePlay}>
                {isPlaying ? <IconPlayerPause size={24} /> : <IconPlayerPlay size={24} />}
              </ActionIcon>

              <Box style={{ flex: 1 }}>
                <Slider
                  value={(currentTime / (duration || 1)) * 100}
                  onChange={(value) => {
                    if (videoRef.current && duration) {
                      const newTime = (value / 100) * duration;
                      videoRef.current.currentTime = newTime;
                      setCurrentTime(newTime);
                    }
                  }}
                  size="xs"
                  color="gray.0"
                  styles={{
                    root: {
                      cursor: 'pointer',
                      '&:hover [dataThumb]': {
                        display: 'block',
                      },
                    },
                    track: {
                      backgroundColor: 'rgba(255, 255, 255, 0.15)',
                      height: '4px',
                    },
                    bar: {
                      backgroundColor: 'white',
                      height: '4px',
                    },
                    thumb: {
                      display: 'none',
                      width: '12px',
                      height: '12px',
                      backgroundColor: 'white',
                      borderWidth: 0,
                    },
                  }}
                />
              </Box>

              <Text size="sm" c="white">
                {formatTime(currentTime)} / {formatTime(duration)}
              </Text>
            </Group>
          </Stack>
        </Box>
      </Box>
    </Card>
  );
}
