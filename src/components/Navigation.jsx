import { Link, useLocation } from 'react-router-dom';

export default function NavTabs() {
const currentPage = useLocation().pathname;

return (
    <ul>
        <div className='nav-button'>
            <div style={{margin : 20}}>
            <Link to="/"
            className={currentPage === '/' && '/Home' ? 'mav-link active' : 'nav-link'}>
                Home
            </Link>
            </div>

            <div style={{margin : 20}}>
            <Link to="/Portfolio"
            className={currentPage === '/Portfolio' ? 'mav-link active' : 'nav-link'}>
                Portfolio
            </Link>
            </div>

            <div style={{margin : 20}}>
            <Link class="nav-link" href="#" to="/About"
            className={currentPage === '/About' ? 'mav-link active' : 'nav-link'}>
                About
            </Link>
            </div>

            <div style={{margin : 20}}>
            <Link to="/Contact"
            className={currentPage === '/Contact' ? 'mav-link active' : 'nav-link'}>
                Contact
            </Link>
            </div>
        </div>
    </ul>

)
};