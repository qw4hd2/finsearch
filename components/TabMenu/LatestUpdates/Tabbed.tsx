import { Grid } from '@mantine/core';
import TabbedCard from './TabbedCard';

export default function Tabbed() {
  const newsTabs = [
    {
      label: 'All',
      type: 'news',
      content: [
        {
          title: 'News Heading',
          date: 'Feb 5, 2025',
          description:
            'Id sed pharetra morbi in tempus dignissim imperdiet metus eget. Risus semper senectus orci neque nulla netus ultrices est ut. Varius semper.',
        },
        {
          title: 'News Heading',
          date: 'Feb 5, 2025',
          description:
            'Id sed pharetra morbi in tempus dignissim imperdiet metus eget. Risus semper senectus orci neque nulla netus ultrices est ut. Varius semper.',
        },
        {
          title: 'News Heading',
          date: 'Feb 5, 2025',
          description:
            'Id sed pharetra morbi in tempus dignissim imperdiet metus eget. Risus semper senectus orci neque nulla netus ultrices est ut. Varius semper.',
        },
      ],
    },
    { label: 'Consultants', type: 'news', content: [] },
    { label: 'Managers', type: 'news', content: [] },
  ];

  const tasksTabs = [
    {
      label: 'All',
      type: 'tasks',
      content: [
        {
          title: 'California Public Employee’s Retirement System',
          subtitle: 'Porter County Government',
        },
        {
          title: 'California Public Employee’s Retirement System',
          subtitle: 'Porter County Government',
        },
      ],
    },
    { label: 'Today', type: 'tasks', content: [] },
    { label: 'This Month', type: 'tasks', content: [] },
  ];

  const favoritesTabs = [
    {
      label: 'All',
      type: 'favorites',
      content: [
        { title: 'Porter County Government Charitable Nonprofit Foundation' },
        { title: 'Porter County Government Charitable Nonprofit Foundation' },
      ],
    },
    { label: 'Consultants', type: 'favorites', content: [] },
    { label: 'Managers', type: 'favorites', content: [] },
  ];

  return (
    <Grid gutter="md">
      <Grid.Col span={{ base: 12, sm: 6, lg: 4 }}>
        <TabbedCard title="LATEST NEWS" viewAllLink="/news" tabs={newsTabs} />
      </Grid.Col>
      <Grid.Col span={{ base: 12, sm: 6, lg: 4 }}>
        <TabbedCard title="TASKS" viewAllLink="/tasks" tabs={tasksTabs} />
      </Grid.Col>
      <Grid.Col span={{ base: 12, sm: 6, lg: 4 }}>
        <TabbedCard title="FAVOURITES" viewAllLink="/favorites" tabs={favoritesTabs} />
      </Grid.Col>
    </Grid>
  );
}
