import React from 'react'
import styled from '@emotion/styled'

import mq from '../../../mediaQuery'

import UnstyledBlockies from '../Blockies'
import useWeb3 from '../useWeb3'
import ReverseRecord from '../ReverseRecord'
import NoAccountsModal from '../NoAccounts/NoAccountsModal'

const NetworkInformationContainer = styled('div')`
  font-family: Overpass Mono;
  position: relative;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding-bottom: 20px;
  ${mq.medium`
    margin-bottom: 50px;
    display: block;
    border: none;
  `}
`

const Blockies = styled(UnstyledBlockies)`
  border-radius: 50%;
  position: absolute;
  left: 10px;
  top: 10px;
  ${mq.medium`
    box-shadow: 3px 5px 24px 0 #d5e2ec;
  `}
`

const NetworkStatus = styled('div')`
  color: #fff;
  font-size: 14px;
  font-family: Overpass;
  text-transform: capitalize;
  font-weight: 100;
  margin-top: -2px;
  margin-left: 1px;
  display: flex;
  align-items: center;

  &:before {
    content: '';
    display: flex;
    width: 6px;
    height: 6px;
    border-radius: 3px;
    background: #fff;
    margin-right: 5px;
  }
`

const Account = styled('div')`
  color: #fff;
  font-size: 18px;
  font-weight: 200;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const AccountContainer = styled('div')`
  padding: 10px 10px 10px 65px;
  position: relative;
  ${mq.medium`
    transform: translate(-25px, 5px);
    width: 200px;
    &:hover {
      width: 550px;
      background: white;
      box-shadow: -4px 18px 70px 0 rgba(108, 143, 167, 0.32);
      border-radius: 6px;
      .account {
        overflow: visible;
        white-space: normal;
        color: #2b2b2b;
      }

      .network {
        color: #2b2b2b;

        &:before {
          background: #5284ff;
        }
      }
    }
  `}
`

function NetworkInformation({ className }) {
  const { account, network } = useWeb3()
  return (
    <NetworkInformationContainer
      className={className}
      hasAccount={account && account.length > 0}
    >
      {account && account.length > 0 ? (
        <AccountContainer>
          <Blockies address={account} imageSize={47} />
          <Account data-testid="account" className="account">
            {account}
          </Account>
          <NetworkStatus className="network">{network} network</NetworkStatus>
        </AccountContainer>
      ) : (
        <NoAccountsModal colour={'#F5A623'} />
      )}
    </NetworkInformationContainer>
  )
}
export default NetworkInformation
