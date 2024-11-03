import { ReactNode } from "react";
import { IoIosSearch } from "react-icons/io";

interface InputSearchProps {
  placeholder?: string
  icon?: ReactNode
  width?: string
}

export default function InputSearch() {
  return (
    <>
      <div className="flex flex-row items-center bg-white h-8 w-[28rem] mt-4
      border-[1px] border-slate-400 rounded-[4px]">
        <div>

          <input
            type="text"
            placeholder="Pesquise no sistema"
            className="w-[26rem] h-[1.5rem] pl-3 text-slate-600 focus:outline-none text-[14px]"
          />

        </div>
        <div className="bg-slate-100 rounded-full h-6 w-6 flex items-center justify-center">
          <IoIosSearch size={18} />
        </div>
      </div>
    </>
  )
}
