import React from 'react';

function Navbar(props) {
    return (
        <>
        <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand">Bred Hat
             <img src="" id="logo" width="135" alt=""/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link item" href="#">Productos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link item" href="#">Soluciones</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link item" href="#">Aprendizaje y soporte</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link item" href="#">Recursos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link item" href="#">Bred Hat y el open source</a>
                        </li>
                    </ul>
                </div>
    </nav>
    </>
    )
}
export default Navbar;