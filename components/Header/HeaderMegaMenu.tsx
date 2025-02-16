'use client';

import Image from 'next/image';
import { IconChevronDown } from '@tabler/icons-react';
import {
  Anchor,
  Box,
  Burger,
  Button,
  Center,
  Collapse,
  Divider,
  Drawer,
  Group,
  HoverCard,
  ScrollArea,
  SimpleGrid,
  Text,
  UnstyledButton,
  useMantineTheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
// import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
import classes from './HeaderMegaMenu.module.css';

//  mandates toggle menudata
const mandatesData = [
  {
    title: 'Mandates',
    description: 'Quis nunc lorem non tortor mattis velit. Erat felis lectus elit massa. Quam eu.',
  },
  {
    title: 'RFPs',
    description: 'Quis nunc lorem non tortor mattis velit. Erat felis lectus elit massa. Quam eu.',
  },
  {
    title: 'Manager Mandate Activity',
    description: 'Quis nunc lorem non tortor mattis velit. Erat felis lectus elit massa. Quam eu.',
  },
  {
    title: 'Mandate Documents',
    description: 'Quis nunc lorem non tortor mattis velit. Erat felis lectus elit massa. Quam eu.',
  },
];

//  firms toggle menudata
const firmsData = [
  {
    title: 'Plans',
    description: 'Quis nunc lorem non tortor mattis velit. Erat felis lectus elit massa. Quam eu.',
  },
  {
    title: 'Consultants',
    description: 'Quis nunc lorem non tortor mattis velit. Erat felis lectus elit massa. Quam eu.',
  },
  {
    title: 'RIAs',
    description: 'Quis nunc lorem non tortor mattis velit. Erat felis lectus elit massa. Quam eu.',
  },
  {
    title: 'Family Offices',
    description: 'Quis nunc lorem non tortor mattis velit. Erat felis lectus elit massa. Quam eu.',
  },
  {
    title: 'Fund of Funds',
    description: 'Quis nunc lorem non tortor mattis velit. Erat felis lectus elit massa. Quam eu.',
  },
  {
    title: 'Managers',
    description: 'Quis nunc lorem non tortor mattis velit. Erat felis lectus elit massa. Quam eu.',
  },
];

//  firms toggle menudata
const contactsData = [
  {
    title: 'Plan Contacts',
    description: 'Quis nunc lorem non tortor mattis velit. Erat felis lectus elit massa. Quam eu.',
  },
  {
    title: 'Consultant Contacts',
    description: 'Quis nunc lorem non tortor mattis velit. Erat felis lectus elit massa. Quam eu.',
  },
  {
    title: 'RIA Contacts',
    description: 'Quis nunc lorem non tortor mattis velit. Erat felis lectus elit massa. Quam eu.',
  },
  {
    title: 'Fund of Funds Contacts',
    description: 'Quis nunc lorem non tortor mattis velit. Erat felis lectus elit massa. Quam eu.',
  },
  {
    title: 'Family Office Contacts',
    description: '',
  },
  {
    title: 'Manager Contacts',
    description: '',
  },
  {
    title: 'People Moves',
    description: '',
  },
];

export function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [mandatesOpened, { toggle: toggleMandates }] = useDisclosure(false);
  const [firmsOpened, { toggle: toggleFirms }] = useDisclosure(false);
  const [contactsOpened, { toggle: toggleContacts }] = useDisclosure(false);
  const theme = useMantineTheme();

  const mandates = mandatesData.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group wrap="nowrap" align="flex-start">
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" c="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  const firms = firmsData.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group wrap="nowrap" align="flex-start">
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" c="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  const contacts = contactsData.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group wrap="nowrap" align="flex-start">
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" c="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  return (
    <Box pb={20} mt="sm">
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Image src="/finsearch-logo.png" alt="logo" width={100} height={40} />

          <Group h="100%" gap={0} visibleFrom="sm">
            <a href="#" className={classes.link}>
              Home
            </a>
            <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
              <HoverCard.Target>
                <a href="#" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Mandates
                    </Box>
                    <IconChevronDown size={16} color={theme.colors.blue[6]} />
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                <Group justify="space-between" px="md">
                  <Text fw={500}>Mandates</Text>
                  <Anchor href="#" fz="xs">
                    View all
                  </Anchor>
                </Group>
                <Divider my="sm" />
                <SimpleGrid cols={2} spacing="lg">
                  {mandates}
                </SimpleGrid>
              </HoverCard.Dropdown>
            </HoverCard>

            <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
              <HoverCard.Target>
                <a href="#" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Firms
                    </Box>
                    <IconChevronDown size={16} color={theme.colors.blue[6]} />
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                <Group justify="space-between" px="md">
                  <Text fw={500}>Firms</Text>
                  <Anchor href="#" fz="xs">
                    View all
                  </Anchor>
                </Group>
                <Divider my="sm" />
                <SimpleGrid cols={2} spacing="lg">
                  {firms}
                </SimpleGrid>
              </HoverCard.Dropdown>
            </HoverCard>

            <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
              <HoverCard.Target>
                <a href="#" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Contacts
                    </Box>
                    <IconChevronDown size={16} color={theme.colors.blue[6]} />
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                <Group justify="space-between" px="md">
                  <Text fw={500}>Contacts</Text>
                  <Anchor href="#" fz="xs">
                    View all
                  </Anchor>
                </Group>
                <Divider my="sm" />
                <SimpleGrid cols={2} spacing="lg">
                  {contacts}
                </SimpleGrid>
              </HoverCard.Dropdown>
            </HoverCard>
            <a href="#" className={classes.link}>
              Conferences
            </a>
            <a href="#" className={classes.link}>
              News
            </a>
            <a href="#" className={classes.link}>
              Maps
            </a>
            <a href="#" className={classes.link}>
              Documents
            </a>
            <a href="#" className={classes.link}>
              Tasks
            </a>
            <a href="#" className={classes.link}>
              Resources
            </a>
          </Group>

          <Group visibleFrom="sm">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
            {/* <ColorSchemeToggle /> */}
          </Group>

          <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h="calc(100vh - 80px" mx="-md">
          <Divider my="sm" />

          <a href="#" className={classes.link}>
            Home
          </a>
          <UnstyledButton className={classes.link} onClick={toggleMandates}>
            <Center inline>
              <Box component="span" mr={5}>
                Mandates
              </Box>
              <IconChevronDown size={16} color={theme.colors.blue[6]} />
            </Center>
          </UnstyledButton>

          <UnstyledButton className={classes.link} onClick={toggleFirms}>
            <Center inline>
              <Box component="span" mr={5}>
                Firms
              </Box>
              <IconChevronDown size={16} color={theme.colors.blue[6]} />
            </Center>
          </UnstyledButton>

          <UnstyledButton className={classes.link} onClick={toggleContacts}>
            <Center inline>
              <Box component="span" mr={5}>
                Contacts
              </Box>
              <IconChevronDown size={16} color={theme.colors.blue[6]} />
            </Center>
          </UnstyledButton>
          <Collapse in={mandatesOpened}>{mandates}</Collapse>
          <Collapse in={firmsOpened}>{firms}</Collapse>
          <Collapse in={contactsOpened}>{contacts}</Collapse>
          <a href="#" className={classes.link}>
            Learn
          </a>
          <a href="#" className={classes.link}>
            Academy
          </a>

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
