import React from 'react'
import styled from '@emotion/styled'

import Heading from './Heading'
import Message from './Message'
import Button from './Button'
import { ReactComponent as UnstyledRightArrow } from './icons/rightArrow.svg'

const RegisteredContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const RightArrow = styled(UnstyledRightArrow)`
  margin-left: 5px;

  path {
    transition: 0.2s;
  }
`

const LinkToManager = styled('a')`
  margin-top: 20px;
  text-decoration: none;
  font-family: Overpass-Bold;
  font-size: 14px;
  color: #ffffff;
  letter-spacing: 0.58px;
  transition: 0.2s;

  &:hover {
    font-size: 14px;
    color: #2c46a6;

    path {
      fill: #2c46a6;
    }
  }
`

function Registered({ searchInput, setPage, page }) {
  return (
    <RegisteredContainer>
      <Message message="Congratulations" page={page} />
      <Heading
        text="You've registered"
        name={`${searchInput}.ethglobal.eth`}
        page={page}
      />
      <Button onClick={() => setPage('SEARCH')}>Enter another name</Button>
      <LinkToManager
        href={`https://manager.ens.domains/name/${searchInput}.ethglobal.eth`}
      >
        Check out your new domain on the ENS manager
        <RightArrow />
      </LinkToManager>
    </RegisteredContainer>
  )
}
export default Registered
