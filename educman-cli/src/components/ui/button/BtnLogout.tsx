"use client"

import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { RiLogoutBoxRLine } from 'react-icons/ri'

export default function BtnLogout() {

  const router = useRouter()

  async function logout() {
    await signOut({
      redirect: false
    })

    router.replace("/")
  }

  return (
    <button className={`flex flex-col items-center justify-center text-[1.5rem]
              bg-orange-500 text-gray-200 rounded-full w-8 h-8 hover:bg-orange-400 hover:cursor-pointer`}>
      <RiLogoutBoxRLine size={20} onClick={logout} />
    </button>
  )
}
