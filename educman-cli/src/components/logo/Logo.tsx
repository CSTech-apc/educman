import Image from "next/image"

import logo from '../../../public/logo.png'

export default function Logo() {
  return (
    <div className="w-10 h-10 bg-gray-700 rounded-md flex items-center justify-center mt-4">
      <Image src={logo} alt="logo - educman" className="w-8 h-8" />
    </div>
  )
}
