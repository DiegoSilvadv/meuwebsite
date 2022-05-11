import { Header } from "./Header";
import QeA from '../img/Q&A.jpg';
import RocketShoes from '../img/rocketshoes.jpeg';
import Gorestaurant from '../img/gorestaurant.jpg';
import Chamado from '../img/chamados.jpg';
import Financas from '../img/financas.jpg'
import { Link } from "react-router-dom";
import { Code } from "phosphor-react";



export function Projects() {
    return (
        <div className="projects">
          <Header />

          <h1 className="text-2xl py-3 text-center mt-10 font-bold text-violet-500 bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-pink-500">Projetos</h1>
          <p className="w-full text-center mb-10">Esses são alguns projetos desenvolvidos</p>

          <div className="w-[90%] grid grid-cols-3 gap-4 sm:grid-cols-1 m-auto">
            <div className=" flex flex-col justify-center rounded-t-lg rounded-b-lg" >
              <img className="rounded-t-lg w-full h-[300px] sm:h-auto" src={QeA} />
              <footer className="bg-zinc-700 rounded-b-lg">
                <p >Ecommerce desenvovido teste</p>
                <a href="https://" className="flex justify-center items-center bg-violet-700 pt-3 pb-3">
                  <Code size={20} weight="fill" /> Acessar </a>
              </footer>
            </div>
            <div className=" flex flex-col justify-center rounded-t-lg rounded-b-lg" >
              <img className="rounded-t-lg w-full h-[300px] sm:h-auto" src={RocketShoes} />
              <footer className="bg-zinc-700 rounded-b-lg">
                <p >Ecommerce desenvovido teste</p>
                <a href="https://" className="flex justify-center items-center bg-violet-700 pt-3 pb-3">
                  <Code size={20} weight="fill" /> Acessar </a>
              </footer>
            </div>





            <div className=" flex flex-col justify-center rounded-t-lg rounded-b-lg" >
              <img className="rounded-t-lg w-full h-[300px] sm:h-auto " src={Gorestaurant} />
              <footer className="bg-zinc-700 rounded-b-lg">
                <p >Ecommerce desenvovido teste</p>
                <a href="https://" className="flex justify-center items-center bg-violet-700 pt-3 pb-3">
                  <Code size={20} weight="fill" /> Acessar </a>
              </footer>
            </div>





            <div className=" flex flex-col justify-center rounded-t-lg rounded-b-lg" >
              <img className="rounded-t-lg w-full h-[300px] sm:h-auto" src={Chamado} />
              <footer className="bg-zinc-700 rounded-b-lg">
                <p >Ecommerce desenvovido teste</p>
                <a href="https://" className="flex justify-center items-center bg-violet-700 pt-3 pb-3">
                  <Code size={20} weight="fill" /> Acessar </a>
              </footer>
            </div>
            <div className=" flex flex-col justify-center rounded-t-lg rounded-b-lg" >
              <img className="rounded-t-lg w-full h-[300px] sm:h-auto" src={Financas} />
              <footer className="bg-zinc-700 rounded-b-lg">
                <p >Ecommerce desenvovido teste</p>
                <a href="https://" className="flex justify-center items-center bg-violet-700 pt-3 pb-3">
                  <Code size={20} weight="fill" /> Acessar </a>
              </footer>
            </div>





            
          </div>
        </div>
    )
}

   
