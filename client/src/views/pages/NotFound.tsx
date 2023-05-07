import styled from '@emotion/styled'
import React from 'react'
import Container from '../../components/UI/Layout/Container'
import Button from '../../components/UI/Button'
import { useNavigate } from 'react-router-dom'

function NotFound(): JSX.Element {
  const navigate = useNavigate()

  function navigateBack(): void {
    navigate(-1)
  }

  return (
    <Container>
      <Button variant='contained' onClick={navigateBack} sx={{ marginTop: '2rem' } }>
        Back
      </Button>
      <Content>Oops! This page NotFound.</Content>
    </Container>
  )
}

export default NotFound

const Content = styled.div`
  display: grid;
  justify-content: center;
  margin-top: 5rem;
  height: 100vh;
  font-size: 2rem;
`
