import React from "react"
import styled from "@emotion/styled"

const ButtonContainer = styled("button")`
  font-family: Overpass;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  font-weight: 700;
  background: transparent;
  border: 2px solid #ffffff;
  border-radius: 90.72px;
  transition: 0.2s;

  &:hover {
    cursor: pointer;
    background: #2c46a6;
    border: 2px solid #2c46a6;
  }
`

function Button({ children, onClick }) {
  return <ButtonContainer onClick={onClick}>{children}</ButtonContainer>
}
export default Button
