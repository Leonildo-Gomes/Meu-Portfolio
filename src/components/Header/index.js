
import './header.css';
function Header () {
    return (
        <header className='animated'>
            <a  className="logo" href="/">Portfolio.</a>
            <nav className="navbar">
            <a  className ="active" href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
            { /*<ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>*/}
            </nav>
        </header>
    )
}

export default Header;