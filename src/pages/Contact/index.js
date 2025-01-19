

import './contact.css';
function Contact() {
    return (
        <section className="contacto">
            <h1>Contact Us</h1>
            <div className="containe-contact">
            
            <div className="formulario">
                <form>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <textarea placeholder="Message" rows="5"></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div className="contact">
                <p>Email: leogomescv@gmail.com</p>
                <p>Phone: +1 (123) 456-7890</p>
            </div>
           
        </div>
        </section>
    );
}



export default Contact;

