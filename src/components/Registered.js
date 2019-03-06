import React from 'react'
import styled from '@emotion/styled'

import Heading from './Heading'
import Message from './Message'
import Button from './Button'

const RegisteredContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
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
    </RegisteredContainer>
  )
}
export default Registered
