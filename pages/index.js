const { render } = require('react-dom')

import { EmptyState, Layout, Page } from '@shopify/polaris'

function Index() {
  return (
    <Page>
      <Layout>
        <EmptyState
          heading="Gerencie seus Produtos"
          action={{ content: 'Selecionar Produtos' }}
          image="https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg"
        >
          <p>Selecionar Produtos</p>
        </EmptyState>
      </Layout>
    </Page>
  )
}

export default Index
