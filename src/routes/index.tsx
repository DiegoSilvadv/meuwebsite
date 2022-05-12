import {  Routes, Route, BrowserRouter } from 'react-router-dom'
import { About } from '../components/About'
import { Contact } from '../components/Contact'
import { Home } from '../components/Home'
import { Projects } from '../components/Projects'

export function AppRoutes() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} /> 
                <Route path="/contact" element={<Contact />} /> 
            </Routes>
        </BrowserRouter>
    )

}

