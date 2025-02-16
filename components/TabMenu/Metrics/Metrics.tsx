import { Anchor, Divider, Grid, Group, Stack, Text, Title } from '@mantine/core';
import BaseCard from '@/components/BaseCard/BaseCard';

const metricsData = [
  {
    title: 'RIA FIRMS',
    viewAllLink: '#',
    stats: [
      { label: 'Total # RIA Firms', value: '2,345' },
      { label: 'Updated Last 7 Days', value: '177' },
      { label: 'Total Assets', value: '$16.4T' },
    ],
  },
  {
    title: 'PLANS',
    viewAllLink: '#',
    stats: [
      { label: 'Total # of Plans', value: '1,647' },
      { label: 'Updated Last 7 Days', value: '128' },
      { label: 'Total Assets', value: '2.4B' },
    ],
  },
  {
    title: 'CONSULTANTS',
    viewAllLink: '#',
    stats: [
      { label: 'Total # of Consultants', value: '2,345' },
      { label: 'Updated Last 7 Days', value: '177' },
      { label: 'Total Assets', value: '$16.4T' },
    ],
  },
  {
    title: 'RIA CONTACTS',
    viewAllLink: '#',
    stats: [
      { label: 'Total # of Contacts', value: '411,990' },
      { label: 'Updated Last 7 Days', value: '678' },
      { label: 'Added Last 7 Days', value: '2,739' },
    ],
  },
  {
    title: 'PLAN CONTACTS',
    viewAllLink: '#',
    stats: [
      { label: 'Total # of Contacts', value: '411,990' },
      { label: 'Updated Last 7 Days', value: '678' },
      { label: 'Added Last 7 Days', value: '2,739' },
    ],
  },
  {
    title: 'CONSULTANT CONTACTS',
    viewAllLink: '#',
    stats: [
      { label: 'Total # of Contacts', value: '411,990' },
      { label: 'Updated Last 7 Days', value: '678' },
      { label: 'Added Last 7 Days', value: '2,739' },
    ],
  },
];

export default function Metrics() {
  return (
    <div>
      <Title order={2} mb="md" mt="lg">
        Metrics
      </Title>
      <Grid gutter="md" mb="md" mt="lg">
        {metricsData.map((data, index) => (
          <Grid.Col key={index} span={{ base: 12, sm: 6, lg: 4 }}>
            <BaseCard
              headerContent={
                <Group justify="space-between" mb="xs">
                  <Text fw={600}>{data.title}</Text>

                  <Anchor size="sm" href={data.viewAllLink}>
                    View all
                  </Anchor>
                </Group>
              }
              content={
                <Stack>
                  {data.stats.map((stat, index) => (
                    <div key={index}>
                      <Group justify="space-between" w="100%">
                        <Text size="sm">{stat.label}</Text>
                        <Text fw={600}>{stat.value}</Text>
                      </Group>
                      {index !== data.stats.length - 1 && <Divider />}
                    </div>
                  ))}
                </Stack>
              }
            />
          </Grid.Col>
        ))}
      </Grid>
    </div>
  );
}
