import React from 'react';
import '../single-cart/cart.css';
import crd from '../assets/card-1.jpg';


function Cart() {
  return (
    <section className="py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <div className="d-flex border border-danger-subtle p-3">
              <i className="bi bi-box pe-2"></i>
              <h6 className="">
                Add <span style={{ color: 'red' }}>$254.12</span> to cart and get free shipping!
              </h6>
            </div>

            <div className="">
              <div className="names d-flex align-items-center justify-content-center pt-2">
                <h6 className="col-2"></h6>
                <h6 className="col-2 ps-2">Product</h6>
                <h6 className="col-2 text-end">Price</h6>
                <h6 className="col-2 text-end">Quantity</h6>
                <h6 className="col-2 text-end">Subtotal</h6>
                <h6 className="col-2"></h6>
              </div>

              <div className="values d-flex align-items-center justify-content-center">
                <h6 className="col-2">
                  <img src={crd} className="w-75" alt="" />
                </h6>
                <h6 className="col-2 ps-2">
                  <b>Adjustable shoulder bag</b>
                </h6>
                <h6 className="col-2 text-end">
                  <b>$45.88</b>
                </h6>
                <h6 className="col-2 text-end">
                  <b className="border p-1">
                    <span className="px-1">-</span>
                    <span className="px-1">1</span>
                    <span className="px-1">+</span>
                  </b>
                </h6>
                <h6 className="col-2 text-end">
                  <b>$45.88</b>
                </h6>
                <i className="col-2 bi bi-x text-end"></i>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="p-2 border" style={{ backgroundColor: '#ebeef0' }}>
              <div>
                <h6><b>CART TOTALS</b></h6>
              </div>
              <div className="d-flex names pt-2">
                <h6 className="col-6">Subtotal</h6>
                <h6 className="col-6 text-end text-dark"><b>$45.88</b></h6>
              </div>
              <hr />
              <div className="d-flex align-items-center">
                <div className="col-6 names">
                  <h6>Shipping</h6>
                </div>
                <div className="col-6 text-end">
                  <div className="text-end values">
                    <h6>
                      Flat rate: $15.00
                      <span>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                      </span>
                    </h6>
                  </div>

                </div>
              </div>
              <hr />
              <div className="d-flex">
                <div className="col-6 names">
                  <h6>Total</h6>
                </div>
                <div className="col-6 values text-end">
                  <h6 className="fw-bold"><b>$60.88</b></h6>
                </div>
              </div>
              <div className="text-center py-1">
                <h6 className="border border-danger bg-danger text-white p-2">
                  Proceed to Checkout
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
