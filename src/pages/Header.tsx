import { Link } from 'react-router-dom';
import Logo from '../img/DIEGOSILVA.png';

export function Header() {
    
    return (
        <div className="w-full h-12 bg-violet-600 flex absolute top-0">
            <nav className="w-full flex items-center justify-center">
                
                <Link to="/" className="mx-5 text-zinc-100 hover:text-zinc-300 transition all duration-500 hover:underline">Home</Link> 
                <Link to="/projects" className=" mx-5 text-zinc-100 hover:text-zinc-300 transition all duration-500 hover:underline">Projetos</Link> 
                <Link to="/about" className="mx-5 text-zinc-100 hover:text-zinc-300 transition all duration-500 hover:underline" >Sobre</Link>
            </nav>
        </div>
    )
}