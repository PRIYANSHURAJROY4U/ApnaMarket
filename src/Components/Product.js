import React from "react";

export default function Product(props) {
  return (
    <div className="row">
      <div className="col-5">
        <h2>
          {props.product.name}
          <span class="badge bg-secondary"> ₹{props.product.price}</span>
        </h2>
      </div>

      <div className="col-3">
        <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button" class="btn bg-secondary">
            Left
          </button>
          <button type="button" class="btn btn-secondary">
            {props.product.qty}
          </button>
          <button type="button" class="btn bg-secondary" onClick={() => {
             props.incrementquantity(props.index);
          }} >
            Right
          </button>
        </div>
      </div>
       
       
       <div className="col-4">
        {props.product.qty*props.product.price}


       </div>

    </div>
  );
}
