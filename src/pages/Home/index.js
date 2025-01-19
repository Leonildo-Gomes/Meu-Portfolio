
import 'remixicon/fonts/remixicon.css';
import './home.css';
function Home() {
    return (
       <section className="home animated">
        <div className="home-detail">
            <h1>Leonildo Gomes</h1>
            <h2> Software Developer</h2>
            <p>I'm a passionate developer with a strong background in software engineering. I'm always eager to learn and improve my skills.</p>

            <div className="download-socail">
                <a href="#" className="btn">Download CV</a>
                <div className="social-icons">
                    <a href="#"><i className="ri-github-fill"></i></a>
                    <a href="#"><i className="ri-linkedin-fill"></i></a>
                    <a href="#"><i className="ri-facebook-circle-fill"></i></a>  
                    <a href="#"><i className="ri-youtube-fill"></i></a>
                </div>
            </div>
        </div>
        <div className="home-img">
            <div className='img-box'>
                <img src='/img/logo/leo-profile.jpg'alt="" />
            </div>

        </div>

       </section>
    );
}

export default Home;