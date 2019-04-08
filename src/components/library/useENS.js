import { useEffect, useState } from 'react'
import getENS, { getHackathonRegistrar, getNamehash } from './ens'

export default function useENS(web3Loading, domain) {
  const [loading, setLoading] = useState(true)
  const [ENS, setENS] = useState(undefined)
  const [readENS, setReadENS] = useState(undefined)
  const [registrar, setRegistrar] = useState(undefined)

  const fetchENS = async (web3Loading, domain) => {
    if (web3Loading) return
    console.log(1)
    const { ENS, readENS } = await getENS()
    console.log(2)
    console.log(domain)
    const hackathonRegistrarAddress = await readENS
      .owner(await getNamehash(domain))
      .call()
    console.log(3)
    console.log(hackathonRegistrarAddress)
    const { registrar } = await getHackathonRegistrar(hackathonRegistrarAddress)

    setENS(ENS)
    setReadENS(readENS)
    setRegistrar(registrar)
    setLoading(false)
  }

  useEffect(() => {
    fetchENS(web3Loading, domain)
  }, [web3Loading])

  return { ENS, readENS, hackathonRegistrar: registrar, loading }
}
