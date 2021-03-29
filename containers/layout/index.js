import { useState } from 'react'

import LayoutComponent from '../../components/layout'

export function LayoutContainer({ children }) {
    const [activeMenu, setActiveMenu] = useState(false)

    const handleActiveMenu = state => setActiveMenu(state)

    return <LayoutComponent
        children={children}
        activeMenu={activeMenu}
        onActiveMenu={handleActiveMenu}
    />
}