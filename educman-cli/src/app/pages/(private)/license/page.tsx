import React from 'react'
import Footer from '@/components/footer/Footer'
import List from '@/components/license/list/List'
import { IoIosArrowForward } from 'react-icons/io'

export default function License() {
  return (
    <>
      <main className="w-full h-full flex flex-col">
        <div className="h-20 flex flex-row pl-4 pt-4 text-[18px] items-center">
          <span className="text-slate-700">Licenca</span>
          <IoIosArrowForward className="text-green-400" size={20} />
          <span className="text-slate-400">Lista de registros</span>
        </div>

        <List />
      </main>

      <Footer />
    </>
  )
}
