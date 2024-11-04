"use client"

import Link from "next/link"
import { useState } from "react"
import { FaRegCalendar } from "react-icons/fa"
import { FiUser } from "react-icons/fi"
import { LiaCertificateSolid } from "react-icons/lia"
import { MdOutlineSpaceDashboard } from "react-icons/md"
import { TbReportAnalytics } from "react-icons/tb"
import Logo from "../logo/Logo"
import { HiOutlineMenu } from "react-icons/hi"

interface MenuProps {
  verififyUser?: string
}

export default function Menu({ verififyUser }: MenuProps) {

  const [link, setLink] = useState<number>(0)
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false)

  const listItems = [
    { id: 1, "icon": <MdOutlineSpaceDashboard />, label: "Dashboard", url: "/pages/dashboard", profile: "MAN", main: true },
    { id: 2, "icon": <FaRegCalendar />, label: "Periodo", url: "/pages/period", profile: "MAN", main: false },
    { id: 3, "icon": <LiaCertificateSolid />, label: "Licenca", url: "/pages/license", profile: "MAN", main: false },
    { id: 4, "icon": <FiUser />, label: "Usuario", url: "/pages/dashboard", profile: "MAN", main: false },
    { id: 5, "icon": <TbReportAnalytics />, label: "Relatorio", url: "/pages/dashboard", profile: "MAN", main: false },
  ]

  function handleMenu(select: number) {
    setLink(select)
  }

  return (
    <ul className={`flex flex-col h-full shadow ${isOpenMenu ? "w-[16rem] items-start pl-0" : "w-[4rem] items-center"} duration-300`}>

      <HiOutlineMenu className={`bg-green-800 w-8 h-8 p-1 hover:bg-green-700 hover:cursor-pointer border-[2px] border-white rounded-full text-white absolute top-[3.2rem] -right-[1.4rem]
        ${isOpenMenu ? "" : "rotate-180"} duration-500`} onClick={() => setIsOpenMenu(!isOpenMenu)} />

      <div className={`w-full flex mb-8 ${isOpenMenu ? "justify-start ml-3" : "justify-center"}`}>
        <Link href={{ pathname: "/pages/dashboard" }}>
          <Logo />
        </Link>
      </div>
      {listItems.map((item) => (
        <Link href={{ pathname: item.url }} key={item.id} onClick={() => handleMenu(item.id)}>

          <div className={`flex  ${isOpenMenu ? "w-[16rem]" : ""}
            ${!isOpenMenu && item.main ? "mb-14 text-green-700 h-10 hover:bg-slate-500 rounded-full" : "mb-1 hover:bg-slate-100 h-8"}
            ${isOpenMenu && item.main ? "mb-14 text-green-700 h-10 hover:bg-slate-50" : "mb-1 hover:bg-slate-100 h-8"}
            ${isOpenMenu && item.id === link ? "border-r-4 border-r-green-600 bg-green-100" : ""}`}>

            {/* {item.profile === "ADM" && */}
            {/*   <IoLockClosedSharp /> */}
            {/* } */}


            {item.profile === verififyUser &&
              <li className={`flex items-center gap-4 ${item.main ? "font-inter text-[15px]" : "font-inter text-[15px] text-slate-800 "}
                ${!isOpenMenu && "mb-14 text-slate-800 hover:bg-slate-200 rounded-full h-8 w-8 flex items-center justify-center"}
                ${!isOpenMenu && item.id === link && "bg-green-200 text-slate-800 rounded-full h-8 w-8 flex items-center justify-center"}
                ${isOpenMenu ? "ml-3" : "ml-0"}`}>
                <span className={`${!isOpenMenu && item.main ? "text-green-700 text-[26px]" : "text-[1.3rem]"}`}>{item.icon}</span>
                <span className={`${isOpenMenu ? "" : "hidden"}`}>{item.label}</span>
              </li>
            }

          </div>

        </Link>
      ))}
    </ul>
  )
}
