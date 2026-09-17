import "./navbar.css"

export default function Navbar() {
    return (
        <nav className="navbar">
            <a href="/">
                Home
            </a>
            <a href="/content" className="active">
                Content
            </a>
            <a href="/contact">
                Contact
            </a>
        </nav>
    )
}