import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import Logo from "@/components/logo/Logo";
import Menu from "@/components/menu/Menu";
import Session from "@/components/session/Session";
import Title from "@/components/title/Title";
import InputSearch from "@/components/ui/input/InputSearch";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

interface PrivateLayoutProps {
  children: ReactNode
}

export default async function PrivateLayout({ children }: PrivateLayoutProps) {
  const session = await getServerSession(nextAuthOptions)

  if (!session) {
    redirect('/')
  }

  return (
    <div className="flex w-full h-[100vh]">
      <div className='flex flex-col items-center gap-28 w-auto h-[100vh] relative'>

        <div className="h-full w-full bg-slate-950">
          <Menu verififyUser={session?.profile} />
        </div>

      </div>

      <div className="w-full h-full flex flex-col items-center">
        <Title />
        {children}
      </div>


      {/* <div className="h-auto"> */}
      {/*   <Session profile={session?.profile} name={session?.name} /> */}
      {/* </div> */}
    </div>
  )
}
