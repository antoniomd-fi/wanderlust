import { ActionIcon, AppShell, Group, Title } from '@mantine/core';
import { IconBrandGithub, IconChefHat } from '@tabler/icons-react';
import Link from 'next/link';
import ColorSchemeToggle from '../ColorSchemeToggle/ColorSchemeToggle';

export default function Shell({ children }: { children: React.ReactNode }) {
  return (
    <AppShell header={{ height: 60 }} padding="0">
      <AppShell.Header>
        <Group h="100%" px="md">
          <Group justify="space-between" style={{ flex: 1 }}>
            <Group wrap="nowrap" style={{ cursor: 'pointer' }}>
              <IconChefHat size={32} />
              <Title order={2}>Chef GPT</Title>
            </Group>
            <Group ml="xl" gap="lg">
              <Link
                href="https://github.com/antoniomd-fi/Wanderlust"
                rel="no-referrer noopener"
                target="_blank"
              >
                <ActionIcon variant="default" color="gray" size="xl" radius="md">
                  <IconBrandGithub />
                </ActionIcon>
              </Link>
              <ColorSchemeToggle />
            </Group>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
