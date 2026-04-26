import React from 'react'

export default function Approaches() {
  return (
    <section className="container-fluid approaches-section">
        <div className="container approaches-content col-lg-9 col-sm-12 p-5">
            <div className="row">
                <div className="col-sm-12 col-lg-5">
                    <h1 className="text-title p-3">Big problems need <span className="text-bold"> bold approaches</span>
                    </h1>
                    <div className="approaches-button  d-grid gap-2 col mx-auto">
                        <button className="btn btn-primary">Public Health</button>
                        <button className="btn btn-outline-dark">Public Finance</button>
                        <button className="btn btn-outline-dark">Local Governance</button>
                        <button className="btn btn-outline-dark">Water & Sanitation</button>
                    </div>
                </div>
                <div className="col-sm-3 col-lg-3  img1">
                </div>
                <div className="col-sm-3 col-lg-3 img2">
                </div>
            </div>
        </div>
    </section>

  )
}
