import React from 'react'
import styled from '@emotion/styled'

import Heading from './Heading'
import Message from './Message'
import Button, { buttonStyles } from './Button'

const RegisteredContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const LinkToManager = styled('a')`
  margin-top: 20px;
  text-decoration: none;
  ${buttonStyles}
`

function Registered({ searchInput, setPage, page = { page } }) {
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
      </LinkToManager>
    </RegisteredContainer>
  )
}
export default Registered
