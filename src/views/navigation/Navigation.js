
import "./Navigation.scss"
import logo from "../logo.svg";
import { Link, NavLink } from 'react-router-dom';
const Navigation = () => {

    return (

        <nav className='Nav' >
            <div className='ctn-logo'>
                <img src={logo} className="Nav-logo" alt="logo" />
                <label>React</label>
            </div>
            <div className="topnav">
                <NavLink to="/home" activeClassName="active"  >Home</NavLink>
                <NavLink to="/todo" activeClassName="active" >Todo</NavLink>
                <NavLink to="/user" activeClassName="active">User</NavLink>
                <NavLink to="/adduser" activeClassName="active">ADD</NavLink>
                <NavLink to="/blog" activeClassName="active">Blog</NavLink>

            </div>
        </nav>
    );

}

export default Navigation;