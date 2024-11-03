import { GrStatusInfo } from "react-icons/gr"
import { IoIosAdd, IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

interface PaginationProps {
  totalRecords?: number
  totalPages?: number
  currentPage?: number
  nextPage?: () => void
  previousPage?: () => void
  width?: string
  height?: string
}

export default function Pagination({ width, height, currentPage, nextPage, previousPage, totalRecords, totalPages }: PaginationProps) {
  return (
    <div className={`${width} ${height} bg-slate-100 text-slate-800 border-dashed border-[1px] border-slate-400 rounded-md shadow p-3
        flex flex-col items-center justify-center`}
    >
      <div className="w-full flex flex-col gap-2 items-start">
        <div>
          <GrStatusInfo size={18} />
        </div>
        <div className="flex w-full justify-start items-center gap-2">
          <span className="text-[12px]">Total de registros:</span>
          <span className="text-[1rem]">{totalRecords}</span>
        </div>
        <div className="flex">
          <div className="flex w-full justify-start items-center gap-2">
            <span className="text-[12px]">Paginas:</span>
            <span className="text-[1rem]">{totalPages}</span>
            <IoIosArrowBack onClick={previousPage} className="bg-slate-900 text-white rounded-full
              w-6 h-6 p-[4px] hover:bg-slate-800 hover:cursor-pointer" />
            <IoIosArrowForward onClick={nextPage} className="bg-slate-900 text-white rounded-full
              w-6 h-6 p-[4px] hover:bg-slate-800 hover:cursor-pointer"/>
            <span className="text-[12px]">Atual:</span>
            <span className="text-[1rem]">{currentPage}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
