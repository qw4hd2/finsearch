import { useState } from 'react';
import { Anchor, Divider, Group, Select, SimpleGrid, Text, Title } from '@mantine/core';
import BaseCard from '@/components/BaseCard/BaseCard';

const firmsCategories = [
  {
    title: 'TOP 5 RIA FIRMS',
    viewAllLink: '#',
    firms: [
      { name: 'Merrill Lynch, Pierce, Fenner & Smith Incorporated', aum: '$1.27T', link: '#' },
      { name: 'Captrust', aum: '$2.4T', link: '#' },
      { name: 'Ubs Financial Services Inc.', aum: '$623B', link: '#' },
      { name: 'Edward Jones', aum: '$290B', link: '#' },
      { name: 'Ameriprise Financial Services, LLC', aum: '$16.4T', link: '#' },
    ],
  },
  {
    title: 'TOP 5 PLANS',
    viewAllLink: '#',
    firms: [
      { name: 'Fidelity Investments', aum: '$4.3T', link: '#' },
      { name: 'Vanguard Group', aum: '$7.1T', link: '#' },
      { name: 'BlackRock', aum: '$10.0T', link: '#' },
      { name: 'Charles Schwab', aum: '$3.8T', link: '#' },
      { name: 'JP Morgan Asset Management', aum: '$2.6T', link: '#' },
    ],
  },
  {
    title: 'TOP 5 CONSULTS',
    viewAllLink: '#',
    firms: [
      { name: 'Deloitte Consulting', aum: '$550B', link: '#' },
      { name: 'McKinsey & Company', aum: '$890B', link: '#' },
      { name: 'Boston Consulting Group', aum: '$780B', link: '#' },
      { name: 'Bain & Company', aum: '$600B', link: '#' },
      { name: 'Accenture Strategy', aum: '$920B', link: '#' },
    ],
  },
];

export default function TopFirms() {
  const [selectedFilter, setSelectedFilter] = useState('$50 Billion+');

  return (
    <div>
      <Title order={2} mb="md" mt="lg">
        Top Firms
      </Title>
      <SimpleGrid cols={3} spacing="lg" mb="md" mt="lg">
        {firmsCategories.map((category, index) => (
          <BaseCard
            key={index}
            headerContent={
              <>
                <Group justify="space-between" mb="xs">
                  <Text fw={600}>{category.title}</Text>
                  <Select
                    data={['$50 Billion+', '$100 Billion+', '$1 Trillion+']}
                    value={selectedFilter}
                    onChange={(value) => setSelectedFilter(value ?? '')}
                    size="xs"
                    w={130}
                  />
                  <Anchor size="sm" href={category.viewAllLink}>
                    View all
                  </Anchor>
                </Group>
                <Group justify="space-between">
                  <Text fw={600} size="xs" c="gray.7">
                    FIRM
                  </Text>
                  <Text fw={600} size="xs" c="gray.7">
                    AUM
                  </Text>
                </Group>
              </>
            }
            content={
              <>
                {category.firms.map((firm, index) => (
                  <div key={index}>
                    <Group justify="space-between" py="xs">
                      <Anchor href={firm.link} size="sm" style={{ color: '#222' }}>
                        {firm.name}
                      </Anchor>
                      <Text fw={600}>{firm.aum}</Text>
                    </Group>
                    {index !== category.firms.length - 1 && <Divider />}
                  </div>
                ))}
              </>
            }
          />
        ))}
      </SimpleGrid>
    </div>
  );
}
