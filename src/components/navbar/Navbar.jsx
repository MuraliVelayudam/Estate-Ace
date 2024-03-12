import { useState } from 'react'
import './navbar.scss'

export default function Navbar() {
    const [open, setOpen] = useState(false)

    const handle_Menu = () => {
        setOpen((prev) => !prev)
    }

    return (
        <nav>
            <div className="left">
                <a href="/" className="logo">
                    <img src="logo.png" alt="logo" />
                    <span>Estate-Ace</span>
                </a>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Contact</a>
                <a href="">Agents</a>
            </div>
            <div className="right">
                <a href="">SignIn</a>
                <a href="" className="register">
                    SignUp
                </a>
                <div className="menu-icon">
                    <img src="/menu.png" alt="menu-icon" onClick={handle_Menu} />
                </div>
                <div className={`${open ? 'menu active' : 'menu'}`}>
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Contact</a>
                    <a href="">Agents</a>
                    <a href="">Sign In</a>
                    <a href="">Sign Up</a>
                </div>
            </div>
        </nav>
    )
}
