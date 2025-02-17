import { Anchor, Avatar, Divider, Grid, Group, Table, Text, Title } from '@mantine/core';
import BaseCard from '@/components/BaseCard/BaseCard';

const data = [
  {
    id: '1',
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png',
    name: 'Robert Wolfkisser',
    job: 'Engineer',
    email: 'rob_wolf@gmail.com',
  },
  {
    id: '2',
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png',
    name: 'Jill Jailbreaker',
    job: 'Engineer',
    email: 'jj@breaker.com',
  },
  {
    id: '3',
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png',
    name: 'Henry Silkeater',
    job: 'Designer',
    email: 'henry@silkeater.io',
  },
  {
    id: '4',
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png',
    name: 'Bill Horsefighter',
    job: 'Designer',
    email: 'bhorsefighter@gmail.com',
  },
  {
    id: '5',
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-10.png',
    name: 'Jeremy Footviewer',
    job: 'Manager',
    email: 'jeremy@foot.dev',
  },
];

const contacts = [
  { name: 'New York University', count: '1999', link: '#' },
  { name: 'University of Wisconsin - Madison', count: '1612', link: '#' },
  { name: 'University of Phoenix', count: '1939', link: '#' },
  { name: 'Pennsylvania State University', count: '1289', link: '#' },
  { name: 'Arizona State University', count: '955', link: '#' },
];

export default function ContactHighlights() {
  const rows = data.map((item) => {
    return (
      <Table.Tr key={item.id}>
        <Table.Td>
          <Group gap="sm">
            <Avatar size={26} src={item.avatar} radius={26} />
            <Text size="sm" fw={500}>
              {item.name}
            </Text>
          </Group>
        </Table.Td>
        <Table.Td>{item.email}</Table.Td>
        <Table.Td>{item.job}</Table.Td>
      </Table.Tr>
    );
  });

  return (
    <div>
      <Title order={2} mb="lg" mt="lg">
        Contact Highlights
      </Title>
      <Grid gutter="md">
        <Grid.Col span={{ base: 12, sm: 8, lg: 8 }}>
          <BaseCard
            headerContent={
              <Group justify="space-between" mb="md">
                <Text fw={700}>Contact Highlights</Text>
                <Anchor href="#" size="sm">
                  View all
                </Anchor>
              </Group>
            }
            content={
              <Table.ScrollContainer minWidth={500}>
                <Table>
                  <Table.Thead>
                    <Table.Tr>
                      <Table.Th>User</Table.Th>
                      <Table.Th>Email</Table.Th>
                      <Table.Th>Job</Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>{rows}</Table.Tbody>
                </Table>
              </Table.ScrollContainer>
            }
          />
        </Grid.Col>

        <Grid.Col span={{ base: 12, sm: 4, lg: 4 }}>
          <BaseCard
            headerContent={
              <>
                <Group justify="space-between" mb="xs">
                  <Text fw={600}>Top 5 MOST POPULAR SCHOOLS</Text>
                  <Anchor size="sm" href="#">
                    View all
                  </Anchor>
                </Group>
                <Group justify="space-between">
                  <Text fw={600} size="xs" c="gray.7">
                    EDUCATION
                  </Text>
                  <Text fw={600} size="xs" c="gray.7">
                    COUNT
                  </Text>
                </Group>
              </>
            }
            content={
              <>
                {contacts.map((contact, index) => (
                  <div key={index}>
                    <Group justify="space-between" py="xs">
                      <Anchor href={contact.link} size="sm" style={{ color: '#222' }}>
                        {contact.name}
                      </Anchor>
                      <Text fw={600}>{contact.count}</Text>
                    </Group>
                    {index !== contacts.length - 1 && <Divider />}
                  </div>
                ))}
              </>
            }
          />
        </Grid.Col>
      </Grid>
    </div>
  );
}
