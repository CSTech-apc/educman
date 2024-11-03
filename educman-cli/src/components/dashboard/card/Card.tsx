import Image from "next/image";

import folderBlue from "../../../../public/Folder-Invoices.png"
import { LiaCertificateSolid } from "react-icons/lia";
import { getServerSession } from "next-auth";
import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import { ReactNode } from "react";

interface CardProps {
  label?: string
  backcolor?: string
  total?: number
  profile?: string
  icon?: ReactNode
}

export default async function Card({ label, backcolor, total, profile, icon }: CardProps) {

  const session = await getServerSession(nextAuthOptions)

  return (
    <div className={`w-36 h-28 relative ${profile !== session?.profile && "hidden"}`}>

      <Image src={folderBlue} alt="folder box" priority />

      <div className={`absolute right-[1.8rem] top-10 flex flex-col h-auto justify-start`}>

        <div className="flex justify-center h-10 items-center -mb-1.5">
          <div className={`flex flex-col items-center justify-center text-[1.5rem]
              ${backcolor} text-slate-200 rounded-full w-6 h-6`}>
            <span className="text-[18px]">{icon}</span>
          </div>
          <div className="flex flex-col h-auto">
            <span className="text-[15px] ml-2">{label}</span>
          </div>
        </div>

        <div className="flex w-full">
          <span className="text-3xl w-full flex justify-center ml-2">{total}</span>
        </div>
      </div>

    </div>
  )
}
