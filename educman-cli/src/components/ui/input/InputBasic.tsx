import { ReactNode } from "react";

interface InputBasicProps {
  onKeyUp?: () => void
  onChange?: (e: any) => void | any
  onSubmit?: (e: any) => void | any
  widthdiv?: string
  widthinput?: string
  icon?: ReactNode
  placeholder?: string
  title?: string
  value?: string
  type?: string
  bgcolor?: string
  icocolor?: string
  message?: string
  colormessage?: string
  hovercolor?: string
  border?: string
  labelYear?: string
  readOnly?: boolean
  top?: string
  right?: string
  absolute?: string
}

export default function InputBasic({
  onKeyUp,
  onChange,
  onSubmit,
  top,
  right,
  absolute,
  hovercolor,
  colormessage,
  message,
  bgcolor,
  icocolor,
  title,
  widthdiv,
  widthinput,
  icon,
  placeholder,
  value,
  border,
  labelYear,
  readOnly,
  type }: InputBasicProps) {
  return (
    <>
      <div className={`flex rounded-lg ${top} ${right} ${absolute}`}>
        <span className="text-slate-500 mt-0 ml-0">{title}</span>
        <div className={`flex flex-row items-center bg-white h-[1.8rem] ${widthdiv}

           ${border} rounded-[4px] mt-0 ml-0`}>
          <div className="flex w-auto justify-start">
            <span className="text-slate-800 text-[14px]">{labelYear}</span>
            <input
              type={type}
              placeholder={placeholder}
              className={`${widthinput} h-[1rem] pl-3 text-slate-600 focus:outline-none text-[14px]`}
              onKeyUp={onKeyUp}
              value={value}
              onChange={onChange}
              readOnly={readOnly}
            />
          </div>
          <div className="flex items-center gap-2 w-full justify-end pr-2">
            <span className={`${colormessage} text-[12px]`}>{message}</span>
            <div className={`rounded-full ${bgcolor} ${hovercolor} ${icocolor} h-6 w-6 flex items-center justify-center`}>
              {icon}
            </div>
          </div>
        </div>

      </div >
    </>
  )
}
