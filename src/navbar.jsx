import React from 'react';

function Navbar() {
  return (
    <>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
          <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
          <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="#!">All Products</a></li>
              <li><hr className="dropdown-divider"></hr></li>
              <li><a className="dropdown-item" href="#!">Popular Items</a></li>
              <li><a className="dropdown-item" href="#!">New Arrivals</a></li>
            </ul>
          </li>
        </ul>
        <form className="d-flex">
          <button className="btn btn-outline-dark" type="submit">
            <i className="bi-cart-fill me-1"></i>
            Cart
            <span className="badge bg-dark text-white ms-1 rounded-pill">0</span>
          </button>
        </form>
      </div>
    </>
  );
}

export default Navbar;
