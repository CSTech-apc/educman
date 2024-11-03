import Card from '@/components/dashboard/card/Card'
import Footer from '@/components/footer/Footer'
import { FiUser } from 'react-icons/fi'
import { LiaCertificateSolid } from 'react-icons/lia'
import { LuUserCog } from 'react-icons/lu'

export default function Dashboard() {

  return (
    <div className={`w-full h-[100vh] flex flex-col justify-between`}>

      <main className='w-full h-full flex flex-col justify-start p-8'>

        <div className="flex h-10 w-full gap-4 mb-8">
          <div className="text-3xl text-slate-400 flex items-center w-full gap-2">
            <span>Dashboard</span>
          </div>
        </div>

        <div className="w-full h-0 flex gap-2 flex-wrap bg-slate-200 items-start justify-start">
          <Card label="Ativas___" backcolor="bg-sky-500" total={137} profile="MAN" icon={<LiaCertificateSolid />} />
          <Card label="Expiradas" backcolor="bg-yellow-500" total={37} profile="MAN" icon={<LiaCertificateSolid />} />
          <Card label="Suspensas" backcolor="bg-red-500" total={30} profile="MAN" icon={<LiaCertificateSolid />} />
          <Card label="Gerentes_" backcolor="bg-orange-500" total={30} profile="MAN" icon={<LuUserCog />} />
          <Card label="Admin__." backcolor="bg-green-500" total={30} profile="MAN" icon={<FiUser />} />
          <Card label="Academi__" backcolor="bg-red-500" total={30} profile="ADM" />
        </div>
      </main>

      <Footer />
    </div>
  )
}
