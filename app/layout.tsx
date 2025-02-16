import '@mantine/core/styles.css';
import './globals.css';

import {
  ColorSchemeScript,
  Container,
  Flex,
  mantineHtmlProps,
  MantineProvider,
} from '@mantine/core';
import { HeaderMegaMenu } from '@/components/Header/HeaderMegaMenu';

// import { theme } from '../theme';

export const metadata = {
  title: 'Fin Seacrh',
  description: 'I am using Mantine with Next.js!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>
          <Flex bg="#f5f5f5">
            <Container size="xl">
              <HeaderMegaMenu />
              <main>{children}</main>
            </Container>
          </Flex>
        </MantineProvider>
      </body>
    </html>
  );
}
