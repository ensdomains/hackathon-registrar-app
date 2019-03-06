import React from 'react'
import styled from '@emotion/styled'
import bg from './heroBG.jpg'

const HeroContainer = styled('section')`
  background: ${p =>
    p.page === 'SEARCH'
      ? `url(${bg})`
      : `linear-gradient(28deg, #52E5FF 0%, #513EFF 100%);`};
  background-size: cover;
  padding: 60px 20px 20px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 20px 0;
  height: 100vh;
`

function Hero({ children, className, page }) {
  return (
    <HeroContainer page={page} className={className}>
      {children}
    </HeroContainer>
  )
}

export default Hero
