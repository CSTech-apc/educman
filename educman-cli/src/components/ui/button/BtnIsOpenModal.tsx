import { IoIosAdd } from "react-icons/io";

interface BtnIsOpenModalProps {
  isOpenModal?: () => void
  hight?: string
  width?: string
}

export default function BtnIsOpenModal({ isOpenModal, hight, width }: BtnIsOpenModalProps) {
  return (
    <>
      <button className={`${width} ${hight} bg-green-100 border-dashed border-[1px] border-green-400 rounded-md shadow p-3
        flex flex-col items-center justify-center hover:bg-green-200 hover:cursor-pointer`}
        onClick={isOpenModal}>
        <span className="flex flex-col items-center justify-center text-[1.5rem]
          text-white bg-green-600 border-solid border-[1px] rounded-full w-8 h-8"
        >
          <IoIosAdd size={28} />
        </span>
      </button>
    </>
  )
}
