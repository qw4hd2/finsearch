import { Anchor, Card, Group, Stack, Table, Text, Title } from '@mantine/core';

const data = [
  {
    id: '1',
    firm: 'Gateway Wealth Partners, LLC',
    date: '02/11/2025',
    subjectLine: 'RESEARCH OVERVIEW',
  },
  {
    id: '2',
    firm: 'Carnegie Investment Counsel',
    date: '02/11/2025',
    subjectLine: 'RESEARCH OVERVIEW',
  },
  {
    id: '3',
    firm: 'Osaic Advisory Services, LLC',
    date: '02/11/2025',
    subjectLine: 'RESEARCH OVERVIEW',
  },
  {
    id: '4',
    firm: 'Cetera Investment Advisers LLC',
    date: '02/11/2025',
    subjectLine: 'RESEARCH OVERVIEW',
  },
];

export default function ResearchNotes() {
  const rows = data.map((item) => {
    return (
      <Table.Tr key={item.id}>
        <Table.Td>
          <Text size="sm" fw={500}>
            {item.firm}
          </Text>
        </Table.Td>
        <Table.Td>{item.date}</Table.Td>
        <Table.Td>{item.subjectLine}</Table.Td>
      </Table.Tr>
    );
  });

  return (
    <div>
      <Title order={2} mb="md" mt="lg">
        Research Notes
      </Title>
      <Card shadow="md" radius="md" padding="lg">
        <Group justify="space-between" mb="md">
          <Text fw={700}>Research Notes</Text>
          <Anchor href="#" size="sm">
            View all
          </Anchor>
        </Group>

        <Stack>
          <Table miw={800} verticalSpacing="sm">
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Firm</Table.Th>
                <Table.Th>Date</Table.Th>
                <Table.Th>Subject Line</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
        </Stack>
      </Card>
    </div>
  );
}
