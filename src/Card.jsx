import React from 'react';

function Card() {
  return (
    <>
      <div className="card-body p-4">
        <div className="card h-100">
          <img className="card-img-top" src="https://picsum.photos/200/300  " alt="..." />
          <div className="card-body p-4">
            <div className="text-center">
              <h5 className="fw-bolder">Fancy Product</h5>
              $40.00 - $80.00
            </div>
          </div>
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <button type="button" className="btn btn-dark">Add to cart</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
