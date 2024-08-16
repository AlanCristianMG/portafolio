import React from 'react'
import './Main.css'
import Made from './sections/Made/Made'
import Welcome from './sections/Welcome/Welcome'
import Education from './sections/Education/Education'
import Skills from './sections/Skills/Skills'
import Badges from './sections/Badges/Badges'

function Main() {
    return (
        <main>
            <Welcome/>
            <Skills/>
            <Education/>
            <Badges/>
            <Made/>
        </main>
    )
}

export default Main
