'use client';

import { IconMoon, IconSun } from '@tabler/icons-react';
import { ActionIcon, Group, useMantineColorScheme } from '@mantine/core';

export function ColorSchemeToggle() {
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  return (
    <Group justify="center">
      <ActionIcon
        variant="default"
        size="lg"
        onClick={() => setColorScheme(colorScheme === 'dark' ? 'light' : 'dark')}
      >
        {colorScheme === 'dark' ? <IconSun size="1.2rem" /> : <IconMoon size="1.2rem" />}
      </ActionIcon>
    </Group>
  );
}
