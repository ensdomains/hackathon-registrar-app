import React from "react"
import styled from "@emotion/styled"

import Button from "./Button"
import Loader from "./library/Loader"

const TxPendingContainer = styled("div")`
  display: flex;
  flex-direction: column;
`

const LoaderContainer = styled("div")`
  font-family: Overpass;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  span {
    margin-right: 10px;
  }
`

function TxPending({ setPage }) {
  return (
    <TxPendingContainer>
      <LoaderContainer>
        <span>Tx Pending </span>
        <Loader color={"#fff"} />
      </LoaderContainer>
      <Button onClick={() => setPage("SEARCH")}>Enter another name</Button>
    </TxPendingContainer>
  )
}
export default TxPending
