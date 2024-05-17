import "./productEditModule.scss";

import React, { Fragment } from "react";

import axios from "../../api";

const ProductEditModule = ({ setData, data, setReload }) => {
  const handleUpdatedProduct = (e) => {
    e.preventDefault();
    let updateProduct = {
      name: data.name,
      cost: data.cost,
    };

    axios
      .put(`products/${data.id}`, updateProduct)
      .then((res) => {
        setData(null);
        setReload((prev) => !prev);
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <Fragment>
      <div>
        <div className="overlay" onClick={() => setData(null)}></div>
        <form action="" className="edit-model" onSubmit={handleUpdatedProduct}>
          <h2>Edit product</h2>
          <input
            required
            value={data.name}
            onChange={(e) =>
              setData((prev) => ({ ...prev, name: e.target.value }))
            }
            type="text"
          />
          <input
            required
            value={data.cost}
            onChange={(e) =>
              setData((prev) => ({ ...prev, cost: e.target.value }))
            }
            type="number"
          />

          <button>Save</button>
          <button onClick={() => setData(null)}>Close</button>
        </form>
      </div>
    </Fragment>
  );
};

export default ProductEditModule;
