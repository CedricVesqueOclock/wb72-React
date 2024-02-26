import "../style/Navbar.css";

function Navbar() {
    return (
        <nav className="wb72-navbar">
            <ul>
                <li className="wb72-navbar-link"><a>Accueil</a></li>
                <li className="wb72-navbar-link"><a>Présentation</a></li>
                <li className="wb72-navbar-link"><a>Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;