import { GithubLogo, LinkedinLogo } from "phosphor-react";
import { Link } from "react-router-dom";
import backgroundIMG from '../img/bg1.svg';
import { Header } from "./Header";


export function Home() {
  return (

      <div className="w-full flex absolute top-0 right-0 left-0 bottom-0">
        <Header />

        <img src={backgroundIMG} alt="Background" className="w-full max-w-[600px] m-auto block sm:hidden mx-2" />
        <div className="w-full max-w-[650px] flex flex-col justify-center m-auto items-start sm:items-center">
          <strong className="mt-10">Olá, eu sou</strong>
          <strong className="text-4xl py-3 font-bold animate-pulse text-violet-500 bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-pink-500">Diego Silva</strong>
          <strong>Desenvolvedor Front-end</strong>
          <div className="w-2/4 flex justify-self-auto my-4 gap-2 sm:block ">
            <a href="https://www.linkedin.com/in/diego-silva-96234318b/" className="w-full rounded-sm flex items-center p-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 sm:flex item-center justify-center mt-2">
              <LinkedinLogo weight="fill" size={25} className="mr-2" /> Linkdim
            </a>
            <a href="https://github.com/DiegoSilvadv" className="w-full flex rounded-sm items-center p-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 sm:flex item-center justify-center mt-2">
              <GithubLogo weight="fill" size={25} className="mr-2" />  Github
            </a>
          </div>
        </div>
      </div>
    

  )
}