import { ReactNode } from "react";

interface InputBasicFormProps {
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

export default function InputBasicForm({
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
  type }: InputBasicFormProps) {
  return (
    <>
      <div className={`w-full flex flex-col -mb-1.5
        border-t-[0px] border-dashed border-slate-400 rounded-lg ${top} ${right} ${absolute}`}>
        <span className="text-slate-500 mt-2 ml-3">{title}</span>
        <div className={`flex flex-row items-center bg-white h-8 ${widthdiv}
           ${border} rounded-[4px] mt-2 ml-6`}>
          <div className="flex w-full justify-start">
            <span className="text-slate-800 text-[14px]">{labelYear}</span>
            <form onSubmit={onSubmit} className="flex ">
              <input
                type={type}
                placeholder={placeholder}
                className={`${widthinput} h-[1rem] pl-3 text-slate-600 focus:outline-none text-[14px]`}
                onKeyUp={onKeyUp}
                value={value}
                onChange={onChange}
                readOnly={readOnly}
              />
            </form>
          </div>
          <div className="flex items-center gap-2 w-full justify-end pr-3">
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
