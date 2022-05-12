import { Voicemail } from "phosphor-react";
import { Header } from "./Header";

export function Contact() {
    return (
        <div>
            <Header />

            <h1 className="text-center text-violet-500 text-2xl py-2 mt-20 sm:mt-15">Sobre</h1>
            <div>
                <p>Email: digssilva2000@gmail.com</p>
                <a href="https://www.linkedin.com/in/diego-silva-96234318b/">Linkedin</a>
                <a href="https://www.linkedin.com/in/diego-silva-96234318b/">Github</a>
            </div>
        </div>
    )
}