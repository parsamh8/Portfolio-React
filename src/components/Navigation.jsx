import { Link, useLocation } from 'react-router-dom';

export default function NavTabs() {
    const currentPage = useLocation().pathname;

    return (
        <ul>
            <div className='nav-button'>
                <div style={{ margin: 20 }}>
                    <Link to="/"
                        className={`${currentPage === '/' ? 'nav-link active' : 'nav-link'} vt323 vt323-size`}>
                        Home
                    </Link>
                </div>

                <div style={{ margin: 20 }}>
                    <Link to="/Projects"
                        className={`${currentPage === '/Projects' ? 'nav-link active' : 'nav-link'} vt323 vt323-size`}>
                        Projects
                    </Link>
                </div>

                <div style={{ margin: 20 }}>
                    <Link to="/About"
                        className={`${currentPage === '/About' ? 'nav-link active' : 'nav-link'} vt323 vt323-size`}>
                        About
                    </Link>
                </div>

                <div style={{ margin: 20 }}>
                    <Link to="/Contact"
                        className={`${currentPage === '/Contact' ? 'nav-link active' : 'nav-link'} vt323 vt323-size`}>
                        Contact
                    </Link>
                </div>
            </div>
        </ul>
    );
}