import styled from '@emotion/styled'
import React from 'react'
import { useLocation } from 'react-router-dom'
import { menus } from './Layout/Header/NavMenu'

interface PageTitleProps {
  id?: string | undefined
}

function PageTitle({ id }: PageTitleProps): JSX.Element | null {
  const { pathname } = useLocation()

  const pageTitle = id
    ? `Artwork id: ${id}`
    : menus.find((menu) => menu.path === pathname)?.label

  if (!pageTitle) return null

  return (
    <Title id={id}>
      {pageTitle}
    </Title>
  )
}

export default PageTitle

const Title = styled.h1<{ id: string | undefined }>`
  font-size: ${(props) => (props.id ? '8vw' : '12vw')};
  opacity: 0.2;
  margin-top: 2rem;
  line-height: 10rem;
  z-index: -1;

  ${(props) => props.theme.breakpoints.down('lg')} {
    font-size: ${(props) => (props.id ? '10vw' : '20vw')};
    line-height: 17vw;
  }
`
