import React from 'react'

export default function Hero() {
  return (
     <section className="hero">
            <div className="container px-5 py-5">
                <div className="row">
                    <div className="col-lg-6 col-sm-12 hero-content">
                        <h1 className="hero-title">20 years of digital transformation in
                            public service delivery </h1>
                        <span>It's possible.</span>
                        <p className="hero-text">
                            Catalysts. Ecosystem enablers. Problem Solvers.
                            At eGov, we're driven by the power of open digital infrastructure and ecosystems to enable
                            governments deliver accessible, inclusive and transparent services to every citizen.
                        </p>
                        <div className="hero-buttons">
                            <button className="btn btn-primary">Our Approach</button>
                            <button className="btn btn-outline-dark">Our Impact</button>
                        </div>

                    </div>
                    <div className="col-lg-6 col-sm-12 hero-image">
                        <img src="https://placehold.co/600x500?text=Hero+Image" className="img-fluid" alt="hero"/>
                    </div>
                </div>

            </div>
        </section>
  )
}
