import { At, DeviceMobile, GithubLogo, LinkedinLogo, Voicemail } from "phosphor-react";
import { Header } from "./Header";
import { WhatsappButton } from "./WhatsappButton";

export function Contact() {
    return (
        <div className="w-full flex flex-col justify-center">
            <WhatsappButton />
            <Header />

            <div className="w-full max-w-[350px] m-auto sm:w-full flex flex-col justify-center items-center">
                <h1 className="text-violet-500 bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-pink-500 items-start font-bold text-3xl  py-2 mt-20 mb-5 sm:mt-15">Contato</h1>

                <p className="w-[95%] my-3 flex justify-content items-center"><At className="mr-2 text-violet-500" size={32} weight="bold" /> digssilva2000@gmail.com</p>
                <p className="w-[95%] my-3 flex justify-content items-center"><DeviceMobile className="mr-2 text-violet-500" size={32} weight="bold" /> (015) 99628-9240</p>
                <a className="w-[95%] my-3 flex justify-content items-center hover:text-violet-500 transition all delay-150 ease-in-out" href="https://www.linkedin.com/in/diego-silva-96234318b/">
                    <LinkedinLogo className="mr-2 text-violet-500" size={32} weight="bold" /> 
                    linkedin.com/in/diego-silva-96234318b
                </a>
                <a className="w-[95%] my-3 flex justify-content items-center hover:text-violet-500 transition all delay-150 ease-in-out" href="https://www.linkedin.com/in/diego-silva-96234318b/">
                    <GithubLogo className="mr-2 text-violet-500" size={32} weight="bold" /> 
                    github.com/DiegoSilvadv
                </a>
            </div>
        </div>
    )
}