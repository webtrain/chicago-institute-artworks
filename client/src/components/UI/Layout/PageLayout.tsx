import React from 'react'
import Header from './Header/Header'
import styled from '@emotion/styled'

interface LayoutProps {
  children: React.ReactNode
}

function PageLayout({ children }: LayoutProps): JSX.Element {
  return (
    <Layout>
      <Header />
      <main>
        {children}
      </main>
    </Layout>
  )
}

export default PageLayout

const Layout = styled.div`
  display: flex;
  flex-direction: column;
`
