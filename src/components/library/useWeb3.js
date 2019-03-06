import { useEffect, useState } from "react"
import getWeb3, { getAccount, getNetwork } from "./web3"

export default function useWeb3() {
  const [loading, setLoading] = useState(true)
  const [web3, setWeb3] = useState(null)
  const [account, setAccount] = useState(null)
  const [network, setNetwork] = useState(null)

  const fetchWeb3 = async () => {
    const web3 = await getWeb3()
    setWeb3(web3)
    setAccount(await getAccount())
    setNetwork(await getNetwork())
    setLoading(false)
  }

  useEffect(() => {
    fetchWeb3()
  }, [])

  return { web3, account, network, loading }
}
