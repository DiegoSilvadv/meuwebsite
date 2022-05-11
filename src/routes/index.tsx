import {  Routes, Route, BrowserRouter } from 'react-router-dom'
import { About } from '../pages/About'
import { Header } from '../pages/Header'
import { Home } from '../pages/Home'
import { Projects } from '../pages/Projects'

export function AppRoutes() {

    return (
        <BrowserRouter>
            {/* <Header /> */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} /> 
            </Routes>
        </BrowserRouter>
    )

}

