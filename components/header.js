import React from "react";

export default function Header() {
    const [menu, setMenu] = React.useState('navbar-collapse collapse');
    const toggleMenu = () => { menu.indexOf(' collapse')>-1 ? setMenu('navbar-collapse') : setMenu('navbar-collapse collapse'); }
    
    return (
        <header className="bg-light py-3">
            <section className="container">
                <nav className="navbar navbar-expand-lg p-0 bg-body-tertiary align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                        <img src="https://mdbcdn.b-cdn.net/img/new/avatars/5.webp" className="rounded-circle shadow-4" style={{width: '50px'}} />
                        <h4 className="m-0 ps-2 fw-bold font-cursive">Power Habits</h4>
                    </div>
                    <button className="navbar-toggler" type="button" onClick={toggleMenu}>
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={menu}>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/habits">Tracking my habits</a>
                            </li>
                            <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
                                <a className="btn btn-primary" aria-current="page" href="/new">New habbit</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </section>
        </header>
    )
}