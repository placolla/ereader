import '../styles.css' // becomes valid only if styles.css is in apps/reader/styles.css
import 'react-photo-view/dist/react-photo-view.css'

import { LiteralProvider } from '@literal-ui/core'
import { ErrorBoundary } from '@sentry/nextjs'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { RecoilRoot } from 'recoil'

import { Layout, Theme } from '../components'
import ForceTailwindInjection from '../force-tailwind-classes'

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  if (router.pathname === '/success') return <Component {...pageProps} />

  return (
    <ErrorBoundary fallback={<Fallback />}>
      <LiteralProvider>
        <RecoilRoot>
          <Theme />
          <Layout>
            <Component {...pageProps} />
            <ForceTailwindInjection />
          </Layout>
        </RecoilRoot>
      </LiteralProvider>
    </ErrorBoundary>
  )
}

const Fallback: React.FC = () => {
  return <div>Something went wrong.</div>
}
