// next

// react

// components

// libraries others

// icons
import { GrSystem } from "react-icons/gr";
import { MdPeopleOutline } from "react-icons/md";
import { RiAdminLine } from "react-icons/ri";
import { TfiMore } from "react-icons/tfi";
import SignIn from "../signin/SignIn";
import Image from "next/image";

import algaworks from "../../../public/algaworks.png"
import alura from "../../../public/alura.jpeg"
import behance from "../../../public/behance.png"
import petrobras from "../../../public/petrobras.jpeg"
import postoipiranga from "../../../public/postoipiranga.png"
import rocketseat from "../../../public/rocketseat.png"
import shell from "../../../public/shell.png"

export default function Card() {
  return (
    <section className='grid grid-cols-3 gap-2 h-96'>

      <div className='bg-gray-50 w-72 flex flex-col items-start h-96 shadow-md rounded-md p-6'>
        <div className='flex items-center h-8 gap-4'>
          <div className='bg-blue-800 w-12 h-12 rounded-full flex items-center justify-center text-white'>
            <GrSystem size={24} />
          </div>
          <h4 className="text-2xl">Sobre o sistema</h4>
        </div>
        <div className='p-4 h-80'>
          <p className='indent-6 text-justify text-[14px]'>
            Um software para gestão de universidades não só é importante para professores e gestores,
            como também é uma peça chave para a excelência nas aulas.
            Neste artigo, o Educman vai te ajudar a entender mais sobre os módulos que
            compõem todo o sistema de gestão para Unidades de Ensino.
          </p>
        </div>
        <div className='flex items-center h-8 gap-4 w-full justify-center'>
          <div className='bg-gray-400 w-8 h-8 rounded-full  flex items-center justify-center text-white'>
            <TfiMore size={16} />
          </div>
        </div>
      </div>

      <div className="grid grid-rows-4 gap-2 h-96">

        <div className='bg-gray-50 row-span-2 w-72 h-auto shadow-md rounded-md p-6'>
          <div className='flex items-center h-8 gap-4'>
            <div className='bg-blue-800 w-12 h-12 rounded-full flex items-center justify-center text-white'>
              <MdPeopleOutline size={28} />
            </div>
            <h4 className="text-2xl">Parceiros</h4>
          </div>
          <div className='grid grid-cols-4 gap-3 mt-6 ml-4 w-auto'>
            <Image src={algaworks} alt="parceiro" className="w-8 h-8 rounded-full" />
            <Image src={alura} alt="parceiro" className="w-8 h-8 rounded-full" />
            <Image src={behance} alt="parceiro" className="w-8 h-8 rounded-full" />
            <Image src={petrobras} alt="parceiro" className="w-8 h-8 rounded-full" />
            <Image src={rocketseat} alt="parceiro" className="w-8 h-8 rounded-full" />
            <Image src={shell} alt="parceiro" className="w-8 h-8 rounded-full" />
            <Image src={postoipiranga} alt="parceiro" className="w-8 h-8 rounded-full" />
            <div className='bg-gray-400 w-8 h-8 rounded-full  flex items-center justify-center text-white'>
              <TfiMore size={16} />
            </div>
          </div>
        </div>

        <div className='bg-gray-50 w-72 row-span-2 h-auto shadow-md rounded-md p-6'>
          <div className='flex items-center h-8 gap-4'>
            <div className='bg-blue-800 w-12 h-12 rounded-full  flex items-center justify-center text-white'>
              <MdPeopleOutline size={28} />
            </div>
            <h4 className="text-2xl">Clientes</h4>
          </div>
          <div className='grid grid-cols-4 gap-3 mt-6 ml-4 w-auto'>
            <Image src={algaworks} alt="parceiro" className="w-8 h-8 rounded-full" />
            <Image src={alura} alt="parceiro" className="w-8 h-8 rounded-full" />
            <Image src={behance} alt="parceiro" className="w-8 h-8 rounded-full" />
            <Image src={petrobras} alt="parceiro" className="w-8 h-8 rounded-full" />
            <Image src={rocketseat} alt="parceiro" className="w-8 h-8 rounded-full" />
            <Image src={shell} alt="parceiro" className="w-8 h-8 rounded-full" />
            <Image src={postoipiranga} alt="parceiro" className="w-8 h-8 rounded-full" />
            <div className='bg-gray-400 w-8 h-8 rounded-full  flex items-center justify-center text-white'>
              <TfiMore size={16} />
            </div>
          </div>
          <div className='flex items-center h-full gap-4 w-full justify-between'>
          </div>
        </div>
      </div>

      <div className='text-gray-100 bg-gradient-to-b from-indigo-400 via-purple-400 to-pink-400 w-72 flex flex-col items-start h-96 shadow-md rounded-md p-6'>
        <div className='flex items-center h-8 gap-4'>
          <div className='bg-blue-800 w-12 h-12 rounded-full  flex items-center justify-center text-white'>
            <RiAdminLine size={28} />
          </div>
          <h4 className="text-2xl">Login</h4>
        </div>
        <div className='p-4 h-80'>
          <SignIn />
        </div>
        <div className='flex items-center h-8 gap-4 w-full justify-center'>
          <div className='bg-gray-400 w-8 h-8 rounded-full  flex items-center justify-center text-white'>
            <TfiMore size={16} />
          </div>
        </div>
      </div>
    </section>
  )
}
