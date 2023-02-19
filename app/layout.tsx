import SessionProvider from "../components/SessionProvider"
import SideBar from "../components/Sidebar"

import "../styles/globals.css"
import { getServerSession } from "next-auth"
import Login from "../components/Login"
import { authOptions } from "../pages/api/auth/[...nextauth]"
import ClientProvider from "../components/ClientProvider"


export default async function RootLayout({children}: {children: React.ReactNode}){
  const session = await getServerSession(authOptions);

  return (
    <html>
      <head />
      <body>
        <SessionProvider session={session!}>
          {!session ? (
            <Login />
          ) : (
            <div className="flex">
              <div className="bg-[#202123] max-w-xs h-screen md:overflow-y-auto md:min-w-[15rem] lg:min-w-[20rem]">
                <SideBar />
              </div>

              <ClientProvider session={session} />

              <div className="bg-[#343541] flex-1">
                {children}
              </div>
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  )
}
