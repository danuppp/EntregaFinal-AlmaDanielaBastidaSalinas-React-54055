import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-links">
          <a href="/">Inicio</a>
          <a href="/">Nosotros</a>
          <a href="/contact">Contacto</a>
        </div>
        <div className="footer-info">
          &copy;2024 Vino a vinos | Todos los derechos reservados
        </div>
      </div>
    </footer>
  );
};

export default Footer;
