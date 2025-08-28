// @ts-ignore
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

// ... existing code ...
export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const btnRef = useRef<HTMLButtonElement | null>(null)
    const menuRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        function onDocClick(e: MouseEvent) {
            if (!menuOpen) return
            const target = e.target as Node
            if (
                btnRef.current &&
                menuRef.current &&
                !btnRef.current.contains(target) &&
                !menuRef.current.contains(target)
            ) {
                setMenuOpen(false)
            }
        }
        function onKey(e: KeyboardEvent) {
            if (e.key === 'Escape') setMenuOpen(false)
        }
        document.addEventListener('mousedown', onDocClick)
        document.addEventListener('keydown', onKey)
        return () => {
            document.removeEventListener('mousedown', onDocClick)
            document.removeEventListener('keydown', onKey)
        }
    }, [menuOpen])

    return (
        <header className="ml-navbar">
            <div className="ml-nav__inner">
                <div className="ml-nav__brand">
                    <Link to="/" aria-label="Missing-Link Home">missing-link</Link>
                </div>

                <nav className="ml-nav__links" aria-label="Primary">
                    <Link to="/features">Features</Link>
                    <Link to="/pricing">Pricing</Link>
                    <Link to="/about">About</Link>
                    <Link to="/docs">Docs</Link>
                </nav>

                <div className="ml-nav__user">
                    <button
                        ref={btnRef}
                        className="ml-userbtn"
                        aria-label="User menu"
                        aria-haspopup="menu"
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen(o => !o)}
                    >
                        <svg
                            width="18" height="18" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                        >
                            <path d="M12 12c2.761 0 5-2.462 5-5.5S14.761 1 12 1 7 3.462 7 6.5 9.239 12 12 12Z" stroke="currentColor" strokeWidth="1.6" />
                            <path d="M21.5 22c0-4.142-4.253-7.5-9.5-7.5S2.5 17.858 2.5 22" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                        </svg>
                    </button>
                    {menuOpen && (
                        <div
                            ref={menuRef}
                            className="ml-user-menu"
                            role="menu"
                            aria-label="User menu"
                        >
                            <Link
                                to="/login"
                                className="ml-user-menu__item"
                                role="menuitem"
                                onClick={() => setMenuOpen(false)}
                            >
                                Login
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </header>
    )
}