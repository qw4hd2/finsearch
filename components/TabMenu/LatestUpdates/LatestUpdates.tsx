'use client';

import Image from 'next/image';
import { IconX } from '@tabler/icons-react';
import { ActionIcon, Anchor, Card, Flex, Grid, Group, Stack, Text, Title } from '@mantine/core';
import BaseCard from '@/components/BaseCard/BaseCard';
import Tabbed from './Tabbed';

const latestDocuments = [
  {
    title: 'LATEST DOCUMENTS',
    viewAllLink: '#',
    documents: [
      { name: 'California Public Employee’s Retirement System', file: 'Tech requirements.pdf' },
      { name: 'California Public Employee’s Retirement System', file: 'Tech requirements.pdf' },
      { name: 'California Public Employee’s Retirement System', file: 'Tech requirements.pdf' },
      { name: 'California Public Employee’s Retirement System', file: 'Tech requirements.pdf' },
    ],
  },
  {
    title: 'LATEST MANDATES',
    viewAllLink: '#',
    documents: [
      { name: 'California Public Employee’s Retirement System', file: 'Tech requirements.pdf' },
      { name: 'California Public Employee’s Retirement System', file: 'Tech requirements.pdf' },
      { name: 'California Public Employee’s Retirement System', file: 'Tech requirements.pdf' },
      { name: 'California Public Employee’s Retirement System', file: 'Tech requirements.pdf' },
    ],
  },
];

const plans = [
  { name: "City of Gulfport Employees' Pension Plan", qtd: '-1.97%' },
  { name: "City of Gulfport Employees' Pension Plan", qtd: '-1.97%' },
  { name: "City of Gulfport Employees' Pension Plan", qtd: '-1.97%' },
  { name: "City of Gulfport Employees' Pension Plan", qtd: '-1.97%' },
];

export default function LatestUpdates() {
  return (
    <div>
      <Title order={2} mb="md" mt="lg">
        Latest Updates
      </Title>
      <Grid gutter="md" mb="md" mt="lg">
        {latestDocuments.map((data, index) => (
          <Grid.Col key={index} span={{ base: 12, sm: 6, lg: 4 }}>
            <BaseCard
              headerContent={
                <Group justify="space-between" mb="md">
                  <Text fw={700}>{data.title}</Text>
                  <Flex gap="sm" align="center">
                    <Anchor href={data.viewAllLink} size="sm">
                      View all
                    </Anchor>
                    <ActionIcon variant="subtle" color="gray">
                      <IconX size={16} />
                    </ActionIcon>
                  </Flex>
                </Group>
              }
              content={
                <Stack>
                  {data.documents.map((doc, index) => (
                    <Card key={index} shadow="xs" padding="sm" radius="md" withBorder>
                      <Flex direction="column" gap="sm">
                        <Text fw={600} size="sm">
                          {doc.name}
                        </Text>
                        <Flex gap="sm" align="center">
                          <Image src="/icons/File-type-icon.png" alt="PDF" width={20} height={20} />
                          <Text size="xs" color="gray">
                            {doc.file}
                          </Text>
                        </Flex>
                      </Flex>
                    </Card>
                  ))}
                </Stack>
              }
            />
          </Grid.Col>
        ))}

        <Grid.Col span={{ base: 12, sm: 6, lg: 4 }}>
          <BaseCard
            headerContent={
              <Group justify="space-between" mb="xs">
                <Text fw={600}>PLAN RETURNS</Text>
                <Anchor size="sm" href="#">
                  View all
                </Anchor>
              </Group>
            }
            content={
              <>
                {plans.map((plan, index) => (
                  <Card key={index} p="xs" radius="md" withBorder>
                    <Text fw={500}>{plan.name}</Text>
                    <Group justify="space-between" mt="xs">
                      <Text size="sm" color="dimmed">
                        QTD {plan.qtd}
                      </Text>
                      <Text size="sm" color="dimmed">
                        QTD {plan.qtd}
                      </Text>
                      <Text size="sm" color="dimmed">
                        QTD {plan.qtd}
                      </Text>
                    </Group>
                  </Card>
                ))}
              </>
            }
          />
        </Grid.Col>
      </Grid>
      <Tabbed />
    </div>
  );
}
