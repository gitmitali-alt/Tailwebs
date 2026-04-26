import React from 'react'

export default function Navbar() {
  return (
    
    <nav className="navbar navbar-expand-lg bg-light">
            <div className="container">
                <a className="navbar-brand logo" href="#">MyLogo</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto  mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#">About Us</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">Area of work</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Productions & Solutions</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Our Platform</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Ecosystem</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Resourses</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i class="bi bi-search"></i></a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    
  )
}
