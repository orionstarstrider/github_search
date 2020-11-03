import React from 'react'
import Container from '../Container'
import Header from '../Header'
import Content from '../Content'
import Search from '../Search'

const MainPage = () => (
  <Container>
    <Header />
    <Content>
      <Search />
    </Content>
  </Container>
)

export default MainPage