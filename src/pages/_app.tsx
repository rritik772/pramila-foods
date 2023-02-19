import '@/styles/globals.css'
import { AppShell, MantineProvider } from '@mantine/core'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: 'light'
      }}
    >
      <AppShell
        padding='md'
      >
        <Component {...pageProps} />
      </AppShell>
    </MantineProvider>
  )
}
