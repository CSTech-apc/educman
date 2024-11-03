"use client"

import Image from "next/image"

import userImg from "../../../public/user.jpeg"
import brasaoImg from "../../../public/brasao03.png"
import { IoIosMore } from "react-icons/io"
import { PiNotification } from "react-icons/pi"
import { useState } from "react"
import { RiLogoutBoxRLine } from "react-icons/ri"
import { IoChevronBack, IoTimeOutline } from "react-icons/io5"
import Link from "next/link"

interface SessionProps {
  name?: string
  surname?: string
  nri?: string
  profile?: string
}

export default function Session({ name, profile }: SessionProps) {

  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <>
      <div className={`${isOpen &&
        "w-full flex flex-col h-full bg-orange-100 items-center justify-center opacity-60 absolute right-[320px] top-0"}
duration-500`} onClick={() => setIsOpen(!isOpen)}>
      </div>

      <section className={`${isOpen ? "w-[20rem] flex-col shadow-2xl bg-white" :
        "w-14 pr-0 flex-col items-center"} pt-0 flex duration-200 h-full`}>

        <div className={`${isOpen ? "flex w-[18rem] items-center gap-1.5 p-4" :
          "w-16 h-36 flex flex-col gap-1.5 pt-4 mr-4 items-center justify-start"}`}>

          <Image src={userImg} alt="user image" className={`${isOpen ? "w-14 h-14" :
            "w-10 h-10 mb-0"} shadow-2xl rounded-full duration-500`} />

          <button className="flex flex-col items-center justify-center text-[1.5rem]
              bg-gray-800 text-gray-200 rounded-full w-8 h-8 hover:bg-gray-700 hover:cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <IoChevronBack size={20} /> : <IoIosMore size={20} />}
          </button>

          <button className="flex flex-col items-center justify-center text-[1.5rem]
              bg-gray-800 text-gray-200 rounded-full w-8 h-8 hover:bg-gray-700 hover:cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}>
            <PiNotification size={20} />
          </button>

        </div>

        <div className="flex flex-col w-full h-full items-center mt-0">
          {isOpen &&
            <>
              <div className="flex flex-col border-b-[1px] border-gray-200 w-[18rem] pb-4">
                <span className="text-[1rem] -mb-0">{name}</span>
                {profile === "MAN" && <span className="text-[12px]">Gerente</span>}
                {profile === "ADM" && <span>Administrador</span>}
              </div>

              <div className="w-full mt-4 flex flex-col gap-2 pl-4">
                <div className="w-[6rem] h-[6rem]">
                  <Image src={brasaoImg} alt="image university" className="rounded-full shadow-2xl" />
                </div>
                <div className=" flex flex-col border-b-[1px] border-gray-200 mr-4 pb-4">
                  <span className="text-[1rem] -mb-0">Universidade Federal de Brasilia</span>
                  <span className="text-[12px]">Instituto de Ensino</span>
                </div>
              </div>

              <div className="w-full mt-4 flex flex-col gap-2 pl-4">
                <div>
                  <IoTimeOutline size={25} />
                </div>
                <div className=" flex flex-col mr-4 pb-4">
                  <span className="text-[1rem]">Hoje - 2h e 47m de atividade</span>
                  <span className="text-[12px] -mb-0">Resumo da sessao - tempo de trabalho:</span>
                </div>
              </div>

              <div className="w-full h-full mt-4 flex flex-col gap-2 pl-4 justify-between items-center">
                <div></div>
                <Link href={{ pathname: "/pages/logout" }} onClick={() => setIsOpen(!isOpen)}>
                  <button className={`${!isOpen && "hidden"} flex flex-col mb-8 items-center justify-center text-[1.5rem]
              bg-orange-500 text-gray-200 rounded-full w-8 h-8 hover:bg-orange-400 hover:cursor-pointer`}>
                    <RiLogoutBoxRLine size={20} />
                  </button>
                </Link>
              </div>
            </>
          }
        </div>
      </section>
    </>
  )
}
