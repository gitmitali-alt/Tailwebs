import React from 'react'

export default function Footer() {
  return (
    <footer className="container-fluid mt-5 py-5 px-5 footer-section">
        <div className="row">
            <div className="col-lg-4 col-sm-12">
                <h2 className="logo p-2">MyLogo</h2>
                <p className="p-2">Catalysing digital transformation in public service delivery at speed & scale.</p>
                <div className="icons">
                    <button className="btn btn-outline-dark"><i className="bi bi-facebook"></i></button>
                    <button className="btn btn-outline-dark"><i className="bi bi-twitter-x"></i></button>
                    <button className="btn btn-outline-dark"><i className="bi bi-linkedin"></i></button>
                    <button className="btn btn-outline-dark"><i className="bi bi-youtube"></i></button>
                </div>
            </div>
            <div className="col-lg-4 col-sm-12">
                <div className="row">
                    <h5 className="p-2">Useful Links</h5>
                </div>
                <div className="row">
                    <div className="col">
                        <ul>
                            <li>Home</li>
                            <li>Our Impact</li>
                            <li>DIGIT Sandbox</li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul>
                            <li>Our People</li>
                            <li>Financials</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-sm-12">
                <h5 className="p-2">Subscribe Now</h5>
                <p>Receive regular updates of our monthly newsletter DOT - in your inbox.</p>
                <form>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Enter Your Email"/>
                        <span className="input-group-text"><i className="bi bi-envelope-paper"></i></span>
                    </div>
                </form>
            </div>


        </div>
    </footer>
  )
}
