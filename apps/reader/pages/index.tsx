import { RecoilRoot } from 'recoil'

import { Layout } from '../src/components/Layout'
import { ReaderGridView } from '../src/components/Reader'

export default function HomePage() {
  return (
    <RecoilRoot>
      <Layout>
        <ReaderGridView />
      </Layout>
    </RecoilRoot>
  )
}
