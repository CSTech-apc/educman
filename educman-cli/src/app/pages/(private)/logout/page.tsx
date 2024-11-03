import Footer from '@/components/footer/Footer'
import BtnLogout from '@/components/ui/button/BtnLogout'
import { BsQuestionSquare } from 'react-icons/bs'

export default function Logout() {
  return (
    <div className={`w-full h-[100vh] flex flex-col justify-between`}>

      <main className='w-full h-full flex flex-col justify-start p-8'>

        <div className="flex h-10 w-full gap-4 mb-8">
          <div className="text-3xl text-slate-400 flex items-center w-full gap-2">
            <span>Logout</span>
          </div>
        </div>

        <div className="flex w-full items-center gap-4">
          <div>
            <span className="text-[1rem]">Deseja sair do sistema?</span>
          </div>
          <div>
            <BtnLogout />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
