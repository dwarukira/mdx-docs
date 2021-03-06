import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'
import {
  Layout,
  SideNav,
  Pagination
} from 'mdx-docs'
import components from '../src/components'

const routes = [
  { name: 'MDX Docs', path: '/' },
  { name: 'Theming', path: '/theming' },
  { name: 'Components', path: '/components' },
  { name: 'Custom Setup', path: '/custom-setup' },
  { name: 'Migrating from x0', path: '/migrating-from-x0' },
  { name: 'GitHub', path: 'https://github.com/jxnblk/mdx-docs' },
]

export default class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let page = {}

    if (Component.getInitialProps) {
      page = await Component.getInitialProps(ctx)
    }

    return { page }
  }

  render () {
    const { Component, page } = this.props

    return (
      <Container>
        <Head>
          <title>MDX Docs</title>
        </Head>
        <Layout
          components={components}
          routes={routes}
          {...this.props}>
          <Layout.MenuToggle />
          <Layout.Sidebar>
            <SideNav routes={routes} />
          </Layout.Sidebar>
          <Layout.Main>
            <Component {...page} />
            <Pagination routes={routes} />
          </Layout.Main>
        </Layout>
      </Container>
    )
  }
}
