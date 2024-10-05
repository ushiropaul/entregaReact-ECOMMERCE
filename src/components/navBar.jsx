    import { useState } from 'react';
    import './navBar.css';

    function NavBar({ Bgcolor, Display, Flow, direction, Zindex, position, width, top, children }) {
    
    
        const [isMenuOpen, setIsMenuOpen] = useState(false);
    const displayMenu = () => {
        // Cambia el estado del menú (abierto/cerrado)
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
        <header className="navBar"
            style={{
            backgroundColor: Bgcolor,
            display: Display,
            flexFlow: Flow,
            flexDirection: direction,
            zIndex: Zindex,
            position: position,
            width: width,
            top: top,
            }}
        >
            <div className="containerLogo">
            <img src="./vite.svg" alt="logo" className="logo" />
            <h2>NIZEN TECNNO</h2>
            </div>

            <nav className={isMenuOpen ? 'active' : ''}>
            <span>Nuestras categorías</span>
            <button className="menuHamburger" onClick={displayMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
            </svg>
            </button>
            <ul className="navBarUl">
                <li><a href="">Todos los productos</a></li>
                <li><a href="">Laptops</a></li>
                <li><a href="">PC armadas</a></li>
                <li><a href="">Componentes</a></li>
                <li><a href="">Accesorios</a></li>
                <li><a href="">Contacto</a></li>
            </ul>
            </nav>

            {children}
        </header>
        </>
    );
    }

    export default NavBar;
