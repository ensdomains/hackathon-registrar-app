import React from 'react'
import styled from '@emotion/styled'
import searchIcon from './search.svg'
import mq from '../../../mediaQuery'

const SearchForm = styled('form')`
  display: flex;
  position: relative;
  z-index: 10000;

  &:before {
    content: '';
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translate(0, -50%);
    display: block;
    width: 27px;
    height: 27px;
    background: url(${searchIcon}) no-repeat;
  }

  input {
    padding: 20px 0 20px 55px;
    width: 100%;
    border: none;
    border-radius: 0;
    font-size: 14px;
    font-family: Overpass;
    font-weight: 100;
    ${mq.medium`
      width: calc(100% - 162px);
      font-size: 28px;
    `}

    &:focus {
      outline: 0;
    }

    &::-webkit-input-placeholder {
      /* Chrome/Opera/Safari */
      color: #ccc;
    }
  }

  button {
    background: #5284ff;
    color: white;
    font-size: 22px;
    font-family: Overpass;
    padding: 20px 0;
    height: 90px;
    width: 162px;
    border: none;
    display: none;
    ${mq.medium`
      display: block;
    `}

    &:hover {
      cursor: pointer;
    }
  }
`

function Search({
  className,
  onSubmit,
  onChange,
  buttonText,
  placeholder = 'Search'
}) {
  let input
  return (
    <SearchForm action="#" onSubmit={onSubmit} className={className}>
      <input
        placeholder={placeholder}
        ref={el => (input = el)}
        onChange={onChange}
      />
      <button type="submit">{buttonText}</button>
    </SearchForm>
  )
}
export default Search

export const SearchLarge = styled(Search)`
  min-width: 90%;
  ${mq.medium`
    min-width: 780px;
  `}

  button {
    border-radius: 0 6px 6px 0;
  }

  input {
    width: 100%;
    border-radius: 6px;
    ${mq.small`
      border-radius: 6px 0 0 6px;
      font-size: 28px;
    `}
  }
`
