import { Link } from 'react-router-dom';
import { Popover, Transition } from '@headlessui/react'

export function Header() {

    return (
        <Popover className="w-full h-12 flex absolute top-0 transition ease-in-out delay-150">
            <Popover.Button className="invisible sm:visible space-y-2 ml-10 mt-10 ">
                <div className="w-8 h-0.5 bg-violet-500"></div>
                <div className="w-8 h-0.5 bg-violet-500"></div>
                <div className="w-8 h-0.5 bg-violet-500"></div>
            </Popover.Button>


            <nav className="w-full flex items-center justify-center visible sm:invisible">
                <Link to="/" className=" font-bold text-lg decoration-violet-600 decoration-2 mx-5 text-zinc-100 hover:text-zinc-300 transition all duration-500 hover:underline">Home</Link>
                <Link to="/projects" className=" font-bold text-lg decoration-violet-600 decoration-2 mx-5 text-zinc-100 hover:text-zinc-300 transition all duration-500 hover:underline">Projetos</Link>
                <Link to="/about" className=" font-bold text-lg decoration-violet-600 decoration-2 mx-5 text-zinc-100 hover:text-zinc-300 transition all duration-500 hover:underline" >Sobre</Link>
                <Link to="/contact" className=" font-bold text-lg decoration-violet-600 decoration-2 mx-5 text-zinc-100 hover:text-zinc-300 transition all duration-500 hover:underline" >Contato</Link>
            </nav>

            <Popover.Panel className=" z-50 font-bold absolute w-60 h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-purple-400 flex flex-col">
                <Popover.Button className="absolute right-2 top-2">X</Popover.Button>
                <Link to="/" className="p-3 mx-5 text-zinc-100 hover:text-zinc-300 transition all duration-500 hover:underline">Home</Link>
                <Link to="/projects" className="p-3 mx-5 text-zinc-100 hover:text-zinc-300 transition all duration-500 hover:underline">Projetos</Link>
                <Link to="/about" className="p-3 mx-5 text-zinc-100 hover:text-zinc-300 transition all duration-500 hover:underline" >Sobre</Link>
                <Link to="/contact" className="p-3 mx-5 text-zinc-100 hover:text-zinc-300 transition all duration-500 hover:underline" >Contato</Link>
            </Popover.Panel>
        </Popover>
    )
}