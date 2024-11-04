import Image from "next/image"

import logo from '../../../public/logo.png'

export default function Logo() {
  return (
    <div className="w-auto h-auto flex items-center justify-center mt-4">
      <Image src={logo} alt="logo - educman" className="w-10 h-10" />
    </div>
  )
}
