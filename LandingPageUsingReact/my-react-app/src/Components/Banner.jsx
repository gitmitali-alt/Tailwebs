import React from 'react'

export default function Banner() {
  return (
     <section className="container-fluid banner-section col-sm-12 p-5">
        <div className="row">
            <div className="col">
                <h1 className="banner-text">1,000,000,100+</h1>
            </div>
            <div className="col-lg-4 col-sm-12">
                <p className="p-3"> Citizens availing public services through eGov's Digital Public Goods (DPG)</p>
            </div>

        </div>
        <div className="row">
            <div className="col">
                <h3>1.1 Billion+</h3>
                <p>Public services delivered</p>

            </div>
            <div className="col">
                <h3>50+ partners</h3>
                <p>From technology,
                    governments and NGOs</p>
            </div>
        </div>

    </section>
  )
}
