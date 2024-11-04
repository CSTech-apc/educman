import React from 'react'
import Footer from '@/components/footer/Footer'
import List from '@/components/license/list/List'
import { IoIosArrowForward } from 'react-icons/io'

export default function License() {
  return (
    <>
      <main className="w-full h-full flex flex-col justify-start">
        <div className="h-10 flex flex-row p-6 text-[20px] items-center bg-slate-50 shadow">
          <span className="text-slate-600">Licenca</span>
          <IoIosArrowForward className="text-green-400" size={24} />
          <span className="text-slate-400">Lista de registros</span>
        </div>

        <List />
      </main>

      <Footer />
    </>
  )
}
