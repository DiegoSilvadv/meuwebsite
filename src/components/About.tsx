import { Footer } from "./Footer";
import { Header } from "./Header";
import { WhatsappButton } from "./WhatsappButton";

export function About() {
    return (
        <div className="w-full flex items-center flex-col">
            <WhatsappButton />
            <Header />
            <h1 className="text-violet-500 bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-pink-500 items-start font-bold text-3xl  py-2 mt-20 mb-5 sm:mt-15">Sobre</h1>


            <div className=" w-full max-w-[700px] flex justify-center items-center sm:flex-col">
                <img
                    className="w-30 h-30 rounded-full mr-5 border-violet-600 border sm: w-25 h-25 mt-5"
                    src="https://media-exp1.licdn.com/dms/image/C4D03AQHMMmGgQpQTaA/profile-displayphoto-shrink_200_200/0/1592606201989?e=1657756800&v=beta&t=9TnZn1Hrgn74CVaD1jDgSXCykZblTbyfdw2MfCuG6NE" alt="Imagem de perfil" />
                <p className="w-3/4 py-5 pl-2 border-l-2 border-violet-500">
                    Olá, me chamo Diego Silva moro em Tatuí-SP interior de São Paulo, tenho 22 anos de idade
                    Brasileiro, sempre tive interesse por tecnologia e games e em 2018 foi o
                    ano que eu caí de cabeça no mundo do desenvolvimento onde iniciei o
                    curso de desenvolvimento de sistema atualmente cursando o curso de Tecnólogo em Analise e desenvolvimento de sistemas onde até hoje estou nesse mundo dos devs.

                </p>
            </div>
        </div>
    )
}


