import React from 'react'

export default function Navbar(props) {
    const { sidebarCollapse } = props

    return (
        <nav className="navbar">

            <button id="checkSidebar" onClick={sidebarCollapse}>
                <i className="fas fa-bars"></i>
            </button>
        </nav>
    )
}
