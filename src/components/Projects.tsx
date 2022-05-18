import { Header } from "./Header";
import letmeask from '../img/letmeask.png';
import Gorestaurant from '../img/gorestaurant.jpg';
import widget from '../img/widget.png'
import { Code } from "phosphor-react";
import { Footer } from "./Footer";



export function Projects() {
    return (
        <div className="projects">
          <Header />

          <h1 className="text-3xl py-3 text-center mt-20 font-bold text-violet-500 bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-pink-500">Projetos</h1>
          <p className="w-full text-center mb-10">Esses são alguns projetos desenvolvidos por mim.</p>

          <div className="w-[95%] max-w-[1280px] grid grid-cols-3 gap-4 md:grid-cols-2 m-auto sm:grid-cols-1 m-auto">
            <div className="flex flex-col justify-center rounded-b-lg  bg-zinc-700" >
              <img className="w-full h-[300px] rounded-t-lg  sm:h-auto " src={letmeask} />
              <footer className=" rounded-b-lg p-5">
                <p className="my-3">LetMeAsk uma aplicação simple, leve e perfomatica com autenticação do google para criar salas de perguntas e respostas</p>
                <a href="https://github.com/DiegoSilvadv/nlw-together" className="p-2 w-30 rounded-sm flex justify-center items-center bg-violet-700 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  ">
                  <Code size={25} className="mr-2" weight="fill" /> Acessar </a>
              </footer>
            </div>
            <div className="flex flex-col justify-center rounded-b-lg  bg-zinc-700" >
              <img className="w-full h-[300px] rounded-t-lg  sm:h-auto " src={Gorestaurant} />
              <footer className=" rounded-b-lg p-5">
                <p className="my-3">LetMeAsk uma aplicação simple, leve e perfomatica com autenticação do google para criar salas de perguntas e respostas</p>
                <a href="https://github.com/DiegoSilvadv/go-restaurant" className="p-2 w-30 rounded-sm flex justify-center items-center bg-violet-700 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                  <Code size={25} className="mr-2" weight="fill" /> Acessar </a>
              </footer>
            </div>
            <div className="flex flex-col justify-center rounded-b-lg  bg-zinc-700" >
              <img className="w-full h-[300px] rounded-t-lg  sm:h-auto " src={widget} />
              <footer className=" rounded-b-lg p-5">
                <p className="my-3">LetMeAsk uma aplicação simple, leve e perfomatica com autenticação do google para criar salas de perguntas e respostas</p>
                <a href="https://nlw-return-web-phi.vercel.app/" className="p-2 w-30 rounded-sm flex justify-center items-center bg-violet-700 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
                  <Code size={25} className="mr-2" weight="fill" /> Acessar </a>
              </footer>
            </div>
          </div>
          <a href="https://github.com/DiegoSilvadv" className="p-2 my-5 block m-auto w-full max-w-[150px] rounded-sm flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:scale-125 transition-all delay-150 ease-in-out duration-500">
              {/* <Code size={25} className="mr-2" weight="fill" />  */}
              Ver mais 
            </a>
          <Footer />
        </div>
    )
}

   
