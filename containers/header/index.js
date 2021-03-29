import { useState, useEffect } from 'react'

import HeaderComponent from '../../components/header'

export function HeaderContainer({ onActiveMenu = () => undefined }) {
    const [active, setActive] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    const handleMenu = () => {
        if (!active) {
            setActive(true)
            onActiveMenu(true)
            document.getElementById('super_overlay').addEventListener('click', () => {
                setActive(false)
                onActiveMenu(false)
            })
        } else {
            setActive(false)
            onActiveMenu(false)
            document.getElementById('super_overlay').removeEventListener('click', undefined)
        } 
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 91) setScrolled(true)
            else setScrolled(false)
        })
        return () => window.removeEventListener('scroll', undefined)
    }, [])

    return <HeaderComponent
        active={active}
        scrolled={scrolled}
        handleMenu={handleMenu}
    />
}