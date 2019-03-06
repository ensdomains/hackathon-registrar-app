import React from 'react'
import styled from '@emotion/styled'
import Button from './Button'
import Message from './Message'
import Heading from './Heading'

const UnavailableContainer = styled('div')`
  display: flex;
  align-items: center;
  flex-direction: column;
`

function Unavailable({ searchInput, setPage, page }) {
  console.log(searchInput)
  return (
    <UnavailableContainer>
      <Message message="We're sorry" page={page} />
      <Heading
        name={`${searchInput}.ethglobal.eth`}
        text="is unavailable"
        page={page}
      />
      <Button onClick={() => setPage('SEARCH')}>Search another name</Button>
    </UnavailableContainer>
  )
}
export default Unavailable
