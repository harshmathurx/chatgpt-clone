"use client"
import { Toaster } from "react-hot-toast"

type Props = {
    session: any
}
const ClientProvider = (props: Props) => {
  return (
    <>
        <Toaster position="top-right"  />
    </>
  )
}
export default ClientProvider