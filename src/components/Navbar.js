
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';

export const Navbar = (props) => {
    const modeColor = () => {
        return props.mode === 'dark' ? 'light': 'dark';
    }
    const [active, setActive] = useState(null);

    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="TextUtils/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link activeclassname="" className="nav-link" to="TextUtils/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link activeclassname="" className="nav-link" to="TextUtils/about">About</Link>
                    </li>
                </ul>
                <div className="btn-group color-paletes" role="group">
                    <button type="button" className="btn btn-danger" onClick={() => {props.themeMode('danger')}}></button>
                    <button type="button" className="btn btn-warning" onClick={() => {props.themeMode('warning')}}></button>
                    <button type="button" className="btn btn-success" onClick={() => {props.themeMode('success')}}></button>
                </div>
                <div className={`form-check form-switch text-${modeColor()}`}>
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
                    <label className={`form-check-label`} htmlFor="flexSwitchCheckDefault">Change Mode</label>
                </div>
                </div>
            </div>
            </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired
};

Navbar.defaultProps = {
    title: 'Set Title Here'
}