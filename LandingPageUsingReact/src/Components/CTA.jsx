import React from 'react'

export default function CTA() {
  return (
   <section className="container-fluid Call-To-Action py-5">
        <div className="container mt-4">
            <div className="row">
                <div className="col-lg-6 col-sm-12 content-box ">
                    <h2>Our open source</h2>
                    <h1>technology-for-good platform</h1>
                    <p>DIGIT, short for Digital Infrastructure for Governance, Inclusion and Transformation is eGov's
                        open-source platform with reusable building blocks and shared data registries that can be used
                        to
                        build solutions in multiple sectors.</p>
                    <button className="btn btn-light explore-btn mt-4">Explore the platform</button>
                </div>
                <div className="col-lg-6 col-sm-12 ">
                    <img src="https://placehold.co/600x500" alt="" className="img-fluid"/>
                </div>
            </div>

        </div>
    </section>
  )
}
