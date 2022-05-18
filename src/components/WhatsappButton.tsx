import { WhatsappLogo } from "phosphor-react";

export function WhatsappButton() {
    return (
        <a href="https://api.whatsapp.com/send?phone=5515996289420&text=Ol%C3%A1%2C%20bem%20legal%20seu%20webapp" className="absolute bottom-3 right-3"><WhatsappLogo size={40} weight="light" color='green' /></a>
    )
}