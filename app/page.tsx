import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { Flex, SimpleGrid, Skeleton } from '@mantine/core';
import TabMenu from '@/components/TabMenu/TabMenu';

const VideoPlayer = dynamic(() => import('@/components/VideoPlayer/VideoPlayer'), {
  loading: () => <Skeleton height={200} radius="md" animate={false} />,
});

const videos = [
  {
    src: '/videos/video1.mp4',
    poster: '/video1.png',
    title: 'Watch our latest news videos',
    date: 'Feb 3, 2025',
  },
  {
    src: '/videos/video2.mp4',
    poster: '/video2.png',
    title: 'Breaking news coverage',
    date: 'Feb 3, 2025',
  },
  {
    src: '/videos/video3.mp4',
    poster: '/video-thumbnail3.png',
    title: 'Special report',
    date: 'Feb 3, 2025',
  },
];

export default function HomePage() {
  return (
    <Flex direction="column" py="sm" gap="lg">
      {/* video section */}
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg" verticalSpacing="lg" py="lg">
        {videos.map((video, index) => (
          <Suspense key={index} fallback={<Skeleton height={200} radius="md" animate={false} />}>
            <VideoPlayer {...video} captionsSrc="/path-to-your-captions.vtt" captionsLang="en" />
          </Suspense>
        ))}
      </SimpleGrid>

      {/* tab Menu section */}
      <TabMenu />
    </Flex>
  );
}
