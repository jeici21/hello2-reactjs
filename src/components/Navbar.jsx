import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="nav-container">
            <NavLink to="/" activeClassName="active" exact>{/*especificando la ruta de cada opción de la barra de navegación*/}
                Home
            </NavLink>
            <NavLink to="/about" activeClassName="active">
                About
            </NavLink>
            <NavLink to="/contact" activeClassName="active">
                Contact
            </NavLink>
        </div>
    );
};

export default Navbar;