import Logo from "../logo/Logo";
import Card from "./Card";

import Welcome from "./Welcome";

export default function HomePage() {
  return (
    <>
      <header className="p-6">
        {/* logo - beginning */}
        <Logo />

        {/* logo - end */}      </header>

      <main className='w-full h-auto pl-0 flex flex-col items-center'>
        {/* Welcome - beginning */}
        <Welcome />
        {/* Welcome - end */}

        {/* cards - beginning */}
        <Card />
        {/* cards - end */}
      </main>

      {/* footer - beginning */}
      {/* <Footer /> */}
      {/* footer - end */}
    </>
  )
}
