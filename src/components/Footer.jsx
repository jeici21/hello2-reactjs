import PropTypes from 'prop-types';
const Footer = (props) => {//recibiendo los parámetros de App
    return (
        <footer className="footer-container">
            <p className="footer-text">Creado por {props.name}</p>
            <p className="footer-text">Mi contacto es: {props.contact}</p>
            <p className="footer-text">Mi correo es: {props.email}</p>
            <p className="footer-text">Mi usuario es: {props.user}</p>
        </footer>
    );
};

export default Footer;//exportando pie de página

Footer.propTypes = {
    name: PropTypes.string.isRequired,
    contact: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired
};//verificando si los parámetros del footer existen
Footer.defaultProps = {
    name: 'Kruger',
    contact: 593999999999,
    email: 'jorge@jorge.com',
    user: '@jorge'
};//si no existen, éstos aparecerán por defecto