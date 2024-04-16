import "../styles/Contact.css";

const ContactInfo = () => {
  return (
    <div className="container">
      <h1 className="title">Contacta con nosotros :</h1>

      <p className="paragraph ">
      No dude en ponerse en contacto con nosotros utilizando la información de contacto a continuación:
      </p>

      <ul>
        <li className="email">Email: vinoavinos@gmail.com</li>
        <li>Telefono: 55-5555-5555</li>
        <li>Direccion: 123 Street, City México, México</li>
      </ul>
    </div>
  );
};

export default ContactInfo;
