import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import styled from '@emotion/styled'
import { ecsign, toRpcSig } from 'ethereumjs-util'

import mq from '../mediaQuery'

import Unavailable from '../components/Unavailable'
import Registered from '../components/Registered'
import TxPending from '../components/TxPending'

import Layout from '../components/layout'
import Hero from '../components/library/Hero'
import NetworkInformationDefault from '../components/library/NetworkInformation/NetworkInformation'
import ENSLogo from '../components/library/Logo/ENSLogo.svg'
import { SearchLarge } from '../components/library/Search'
import useWeb3 from '../components/library/useWeb3'
import useENS from '../components/library/useENS'
import { getNamehash } from '../components/library/ens'
import Loader from '../components/library/Loader'

const LogoLarge = styled('img')`
  width: 50%;
  margin: 0 auto 50px;
  ${mq.medium`
    width: 223px;
  `}
`

const AnimatedContainer = styled(animated.div)`
  display: flex;
  flex-direction: column;
`

const LoaderContainer = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const NetworkInformation = styled(NetworkInformationDefault)`
  position: absolute;
  top: 20px;
  left: 20px;
  ${mq.small`
    left: 40px;
  `}
`

const Instructions = styled('h3')`
  font-family: Overpass;
  font-weight: 100;
  font-size: 42px;
  color: #ffffff;
  letter-spacing: 0;
  text-align: center;
  strong {
    font-weight: 400;
  }
`

async function handleRegister({ hackathonRegistrar, label, token, account }) {
  const hash = await hackathonRegistrar.hash(label, account).call()
  const privatekey = new Buffer(token, 'hex')
  const msg = new Buffer(hash.slice(2), 'hex')
  const signature = ecsign(msg, privatekey)
  const bytes = toRpcSig(signature.v, signature.r, signature.s)
  const tx = await hackathonRegistrar
    .register(label, account, bytes)
    .send({ from: account })
  return tx
}

function aOrAn(word) {
  const firstLetter = word[0]
  const vowels = ['a', 'e', 'i', 'o', 'u']
  return vowels.includes(firstLetter) ? 'an' : 'a'
}

const IndexPage = props => {
  const urlParams = new URLSearchParams(window.location.search)
  const token =
    urlParams.get('token') ||
    'f1bbe150341968e238e7ecabaa5dbec02662040e2c8f86a89c5708614a772c49'
  const domain = urlParams.get('domain')
  console.log(domain)

  const [page, setPage] = useState('SEARCH')
  const [searchInput, setSearchInput] = useState('')
  const { web3, account, loading } = useWeb3()
  const { readENS, hackathonRegistrar } = useENS(loading, domain)
  const springProps = useSpring({ opacity: 1, from: { opacity: 0 } })

  if (!web3) {
    return (
      <LoaderContainer>
        <Loader large />
      </LoaderContainer>
    )
  }
  return (
    <Layout>
      <Hero page={page}>
        <NetworkInformation />
        <AnimatedContainer style={springProps}>
          {page === 'SEARCH' && (
            <>
              <LogoLarge src={ENSLogo} />
              {domain ? (
                <>
                  <Instructions>
                    Register {aOrAn(domain)} <strong>{domain}</strong> subdomain
                  </Instructions>
                  <SearchLarge
                    buttonText="Register"
                    searchInput={searchInput}
                    placeholder={`Enter a label to register label.${domain}`}
                    onSubmit={async e => {
                      e.preventDefault()
                      const owner = await readENS
                        .owner(await getNamehash(`${searchInput}.${domain}`))
                        .call()

                      if (parseInt(owner, 16) !== 0) {
                        setPage('UNAVAILABLE')
                        return
                      }
                      if (token) {
                        handleRegister({
                          hackathonRegistrar,
                          label: searchInput,
                          token,
                          account
                        }).then(async () => {
                          setPage('REGISTERED')
                          readENS
                            .owner(
                              await getNamehash(`${searchInput}.${domain}`)
                            )
                            .call()
                            .then(console.log)
                        })

                        setPage('TX_PENDING')
                      } else {
                        console.log('No token detcted')
                      }
                    }}
                    onChange={e => setSearchInput(e.target.value)}
                  />
                </>
              ) : (
                <Instructions>No domain detected</Instructions>
              )}
            </>
          )}
          {page === 'TX_PENDING' && <TxPending setPage={setPage} />}
          {page === 'UNAVAILABLE' && (
            <Unavailable
              searchInput={searchInput}
              setPage={setPage}
              page={page}
            />
          )}
          {page === 'REGISTERED' && (
            <Registered
              searchInput={searchInput}
              setPage={setPage}
              page={page}
            />
          )}
        </AnimatedContainer>
      </Hero>
    </Layout>
  )
}

export default IndexPage
