import { Link, useLocation } from 'react-router-dom';
import './Navigation.css'; // Import the CSS file below

export default function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <nav className="nav-container">
      <ul className="nav-list">
        <li className="nav-item">
          <Link 
            to="/"
            className={`${currentPage === '/' ? 'nav-link active' : 'nav-link'} vt323 vt323-size`}
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link 
            to="/Projects"
            className={`${currentPage === '/Projects' ? 'nav-link active' : 'nav-link'} vt323 vt323-size`}
          >
            Projects
          </Link>
        </li>
        <li className="nav-item">
          <Link 
            to="/About"
            className={`${currentPage === '/About' ? 'nav-link active' : 'nav-link'} vt323 vt323-size`}
          >
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link 
            to="/Contact"
            className={`${currentPage === '/Contact' ? 'nav-link active' : 'nav-link'} vt323 vt323-size`}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
