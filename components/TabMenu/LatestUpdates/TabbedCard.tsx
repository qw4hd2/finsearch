import Image from 'next/image';
import { Anchor, Card, Flex, Group, ScrollArea, Tabs, Text } from '@mantine/core';

export interface TabContent {
  title: string;
  date?: string;
  description?: string;
  subtitle?: string;
  link?: string;
}

export interface Tab {
  label: string;
  type: string;
  content: TabContent[];
}

export interface TabbedCardProps {
  title: string;
  viewAllLink: string;
  tabs: Tab[];
}
export default function TabbedCard({ title, viewAllLink, tabs }: TabbedCardProps) {
  return (
    <Card shadow="sm" radius="md">
      {/* Header */}
      <Group justify="space-between" mb="xs">
        <Text fw={600}>{title}</Text>
        <Anchor size="sm" href={viewAllLink}>
          View all
        </Anchor>
      </Group>

      {/* Tab Menu */}
      <Tabs defaultValue={tabs[0]?.label}>
        <Tabs.List>
          {tabs.map((tab) => (
            <Tabs.Tab key={tab.label} value={tab.label}>
              {tab.label}
            </Tabs.Tab>
          ))}
        </Tabs.List>

        {/* Tab Content */}
        {/* Scrollable Content Area */}
        <ScrollArea style={{ maxHeight: '180px', overflowY: 'auto' }} className="scroll-bar">
          {tabs.map((tab) => (
            <Tabs.Panel key={tab.label} value={tab.label} pt="xs">
              <Group gap="xs">
                {tab.content.map((item, index) => (
                  <Card key={index} p="xs" radius="md" withBorder>
                    {tab.type === 'news' && (
                      <>
                        <Text fw={500}>{item.title}</Text>
                        <Text size="sm" color="dimmed">
                          {item.date}
                        </Text>
                        <Text size="sm">{item.description}</Text>
                      </>
                    )}
                    {tab.type === 'tasks' && (
                      <>
                        <Text fw={500}>{item.title}</Text>
                        <Flex align="center" mt="sm" justify="space-between">
                          <Anchor
                            href={item.link}
                            size="sm"
                            underline="always"
                            style={{ color: '#222' }}
                          >
                            {item.subtitle}
                          </Anchor>
                          <Image
                            src="/icons/arrow-up-right.png"
                            alt="arrow-up-right"
                            width={16}
                            height={16}
                          />
                        </Flex>
                      </>
                    )}
                    {tab.type === 'favorites' && (
                      <Flex align="center" justify="space-between">
                        <Anchor
                          href={item.link}
                          size="sm"
                          underline="always"
                          style={{ color: '#222' }}
                        >
                          {item.title}
                        </Anchor>
                        <Image
                          src="/icons/arrow-up-right.png"
                          alt="arrow-up-right"
                          width={16}
                          height={16}
                        />
                      </Flex>
                    )}
                  </Card>
                ))}
              </Group>
            </Tabs.Panel>
          ))}
        </ScrollArea>
      </Tabs>
    </Card>
  );
}
