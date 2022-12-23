import { Link, useLocation } from 'react-router-dom'
import logo from '../images/logo.jpg';

const NavBar = ({ admin }) => {

    const location = useLocation()

    const homeClass = location.pathname.match(/^\/home/) ? "flex-lg-fill text-lg-center nav-link fs-4 active" : "flex-lg-fill text-lg-center nav-link fs-4";
    const searchClass = location.pathname.match(/^\/search/) ? "flex-lg-fill text-lg-center nav-link fs-4 active" : "flex-lg-fill text-lg-center nav-link fs-4";
    const contractClass = location.pathname.match(/^\/contract/) ? "flex-lg-fill text-lg-center nav-link fs-4 active" : "flex-lg-fill text-lg-center nav-link fs-4";

    if (admin) {
        return (<nav className="nav nav-pills flex-column flex-sm-row bg-light">
            <Link className="navbar-brand" to="/home">
                <img src={logo} alt="Bootstrap" width="130" height="90" />
            </Link>
            <Link className={homeClass} aria-current="page" to="/homeAdmin">Manage Users</Link>
            <Link className={searchClass} to="/search">Manage Dogs</Link>
            <Link className="flex-lg-fill text-lg-center nav-link fs-4" to="/">Log out</Link>
        </nav>);

    } else {
        return (<nav className="nav nav-pills flex-column flex-sm-row bg-light">
            <Link className="navbar-brand" to="/home">
                <img src={logo} alt="Bootstrap" width="130" height="90" />
            </Link>
            <Link className={homeClass} aria-current="page" to="/home">Home</Link>
            <Link className={searchClass} to="/search">Search</Link>
            <Link className={contractClass} to="/contract">Contract</Link>
            <Link className="flex-lg-fill text-lg-center nav-link fs-4" to="/">Log out</Link>
        </nav>);
    }
}

export default NavBar;