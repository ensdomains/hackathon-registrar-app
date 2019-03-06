import React from 'react'
import styled from '@emotion/styled'

const HeadingContainer = styled('h2')`
  font-family: Overpass;
  font-size: 42px;
  color: #ffffff;
  text-align: center;
  line-height: 55px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Name = styled('span')`
  font-weight: 500;
`

const Text = styled('span')`
  font-weight: 300;
`

function getContent({ name, text, page }) {
  const content = {
    UNAVAILABLE: (
      <>
        <Name>{name}</Name>
        <Text>{text}</Text>
      </>
    ),
    REGISTERED: (
      <>
        <Text>{text}</Text>
        <Name>{name}</Name>
      </>
    )
  }
  return content[page]
}

function Heading(props) {
  return <HeadingContainer>{getContent(props)}</HeadingContainer>
}
export default Heading
