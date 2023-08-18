
import "./Navigation.scss"
import logo from "../logo.svg";
import { Link, NavLink, useHistory } from 'react-router-dom';
const Navigation = () => {
    let history = useHistory()
    const Back = () => {
        history.goBack();
    }
    const Forward = () => {
        history.goForward();
    }
    return (

        <nav className='Nav' >
            <div className='ctn-logo'>
                <img src={logo} className="Nav-logo" alt="logo" />
                <label>React</label>
            </div>
            <div className="Back">
                <span onClick={() => Back()} >
                    &#9668;
                </span>
                <span onClick={() => Forward()} >
                    &#9658;
                </span>

            </div>
            <div className="topnav">
                <NavLink to="/home" activeClassName="active"  >Home</NavLink>
                <NavLink to="/todo" activeClassName="active" >Todo</NavLink>
                <NavLink to="/user" activeClassName="active">User</NavLink>
                <NavLink to="/blog" activeClassName="active">Blog</NavLink>
                <NavLink to="/search" activeClassName="active">Search YTB</NavLink>
            </div>
        </nav>
    );

}

export default Navigation;