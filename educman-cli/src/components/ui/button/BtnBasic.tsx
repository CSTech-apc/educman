import { ReactNode } from "react";

interface BtnBasicProps {
  bgcolor?: string
  bghover?: string
  icon?: ReactNode
  isOpenModal?: () => void
}

export default function BtnBasic({ bgcolor, bghover, icon, isOpenModal }: BtnBasicProps) {
  return (
    <>
      <button className="flex-col items-center justify-center"
        onClick={isOpenModal}>
        <span className={`flex flex-col items-center justify-center text-[1.5rem]
          ${bghover} text-white ${bgcolor} border-solid border-[1px] rounded-full w-8 h-8`}
        >
          {icon}
        </span>
      </button>
    </>
  )
}
