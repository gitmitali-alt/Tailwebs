
import { useState } from "react";
import products from "../data/products";

export default function Latest() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

 
  const filteredProducts = products.filter((item) => {
    return (
      item.name.toLowerCase().includes(search.toLowerCase()) &&
      (category === "" || item.category === category)
    );
  });

  return (
    <section className="container latest py-5">

      <h2 className="p-3">
        Latest at <span>eGov</span>
      </h2>

      <div className="row mb-4">

        <div className="col-lg-6 col-sm-12 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="col-lg-6 col-sm-12">
          <select
            className="form-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="Governance">Governance</option>
            <option value="Finance">Finance</option>
            <option value="Health">Health</option>
          </select>
        </div>

      </div>

      <div className="row">

        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <div className="col-lg-4 col-sm-12 mb-4" key={item.id}>
              <div className="card h-100">

                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.name}
                />

                <div className="card-body">
                  <h6 className="p-2">{item.name}</h6>

                  <p className="px-2">₹{item.price}</p>

                  <button className="btn btn-sm btn-light">
                    {item.category}
                  </button>
                </div>

              </div>
            </div>
          ))
        ) : (
          <p>No products found</p>
        )}

      </div>

    </section>
  );
}

