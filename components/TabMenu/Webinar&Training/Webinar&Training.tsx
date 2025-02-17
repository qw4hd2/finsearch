import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { Card, Flex, Grid, Skeleton, Text, Title } from '@mantine/core';

const VideoPlayer = dynamic(() => import('@/components/VideoPlayer/VideoPlayer'), {
  loading: () => <Skeleton height={200} radius="md" animate={false} />,
});
export default function Webinar() {
  return (
    <Grid gutter="md" mb="md" mt="lg">
      <Grid.Col span={{ base: 12, sm: 6, lg: 7 }} mb="md" mt="lg">
        <Title order={2} mb="md">
          Watch Our Latest Webinar Replay
        </Title>

        <Suspense fallback={<Skeleton height={200} radius="md" animate={false} />}>
          <VideoPlayer
            src="/videos/video3.mp4"
            poster="/webinar.png"
            title="Watch our latest news videos"
            date="Feb 3, 2025"
            captionsSrc="/path-to-your-captions.vtt"
            captionsLang="en"
          />
        </Suspense>
      </Grid.Col>

      <Grid.Col span={{ base: 12, sm: 6, lg: 5 }} mb="md" mt="lg">
        <Title order={2} mb="md">
          Schedule a Training Session
        </Title>

        <Card radius="md" style={{ backgroundColor: '#0D395C', color: 'white', height: '420px' }}>
          <Flex align="center" direction="column" px="lg" py="sm" gap="md">
            <Title order={3}>Schedule a Training Session</Title>
            <Text size="sm" color="white">
              Id sed pharetra morbi in tempus dignissim imperdiet metus eget. Risus semper senectus
              orci neque nulla netus ultrices est ut. Varius semper.
            </Text>
          </Flex>
        </Card>
      </Grid.Col>
    </Grid>
  );
}
