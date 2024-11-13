import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import Hero from './components/hero'
import TechStack from './components/techStack'
import Projects from './components/projects'
import Footer from "./components/footer.jsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className='text-light-content font-primary
    container  mx-auto '>
            <div className='py-10 px-20'>
                <Header/>
                <Hero/>
                <TechStack/>
                <Projects/>
                <Footer/>
            </div>
        </div>

    )
}

export default App
