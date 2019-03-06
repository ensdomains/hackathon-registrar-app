import { useEffect, useState } from "react"
import getENS, { getHackathonRegistrar } from "./ens"

export default function useENS(web3Loading) {
  const [loading, setLoading] = useState(true)
  const [ENS, setENS] = useState(undefined)
  const [readENS, setReadENS] = useState(undefined)
  const [registrar, setRegistrar] = useState(undefined)

  const fetchENS = async web3Loading => {
    if (web3Loading) return
    const { ENS, readENS } = await getENS()
    const { registrar } = await getHackathonRegistrar()

    setENS(ENS)
    setReadENS(readENS)
    setRegistrar(registrar)
    setLoading(false)
  }

  useEffect(() => {
    fetchENS(web3Loading)
  }, [web3Loading])

  return { ENS, readENS, hackathonRegistrar: registrar, loading }
}
