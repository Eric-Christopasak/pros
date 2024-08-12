import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
import LG from '../assets/logo.png';
import pay from '../assets/payment.png';

const Footer = () => {
  return (
    <section className="py-5 bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-2">
            <div>
              <i className="bi bi-facebook fs-5 px-1"></i>
              <i className="bi bi-youtube fs-5 px-1"></i>
              <i className="bi bi-linkedin fs-5 px-1"></i>
              <i className="bi bi-pinterest fs-5 px-1"></i>
              <i className="bi bi-twitter fs-5 px-1"></i>
            </div>
          </div>
          <div className="col-md-4 mb-2">
            <div className="f-logo">
              <img src={LG} alt="Logo" />
            </div>
          </div>
          <div className="col-md-4">
            <div>
              <p>Lorem Ipsum is simply dummy text of the printing and has been industry's standard dummy text ever since the 1500s.</p>
            </div>
          </div>
          <hr />
          <div className="col-md-3 mb-2">
            <div className="py-2 footer-menu">
              <h6 className="mt-2">Useful links</h6>
              <ul className="list-unstyled">
                <li>
                  <a href="/" className="text-decoration-none text-white">
                    Track Order
                  </a>
                </li>
                <li>
                  <a href="/" className="text-decoration-none text-white">
                    Cancellation Order
                  </a>
                </li>
                <li>
                  <a href="/" className="text-decoration-none text-white">
                    Store
                  </a>
                </li>
                <li>
                  <a href="/" className="text-decoration-none text-white">
                    FAQ's
                  </a>
                </li>
                <li>
                  <a href="/" className="text-decoration-none text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/" className="text-decoration-none text-white">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="py-2 footer-menu">
              <h6 className="mt-2">Accounts</h6>
              <ul className="list-unstyled">
                <li>
                  <a href="/" className="text-decoration-none text-white">
                    Track Order
                  </a>
                </li>
                <li>
                  <a href="/" className="text-decoration-none text-white">
                    Cancellation Order
                  </a>
                </li>
                <li>
                  <a href="/" className="text-decoration-none text-white">
                    Store
                  </a>
                </li>
                <li>
                  <a href="/" className="text-decoration-none text-white">
                    FAQ's
                  </a>
                </li>
                <li>
                  <a href="/" className="text-decoration-none text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/" className="text-decoration-none text-white">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="py-2 footer-menu">
              <h6 className="mt-2">Store Location</h6>
              <div className="d-flex align-items-center">
                <div className="pe-2">
                  <i className="bi bi-geo-alt-fill"></i>
                </div>
                <div className="p-0">
                  <span>Demo store on road 10 United States</span>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div className="pe-2">
                  <i className="bi bi-telephone-fill"></i>
                </div>
                <div className="p-0">
                  <span>+6494461709</span>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div className="pe-2">
                  <i className="bi bi-envelope"></i>
                </div>
                <div className="p-0">
                  <span>demo@demo.com</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="py-2 footer-menu">
              <h6 className="mt-2">News Letter</h6>
              <div>
                <span>Subscribe to get important updates</span>
                <div className="pt-2">
                  <input
                    placeholder="Email your address"
                    className="inputs"
                    name="email"
                    type="email"
                  />
                  <button className="buttons">Sign up</button>
                </div>
              </div>
              <div className="pt-3">
                <h6>Payment</h6>
                <img className="w-100" src={pay} alt="Payment Methods" />
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="justify-content-center align-items-center d-flex">
              <h6>
                &copy; Copyright 2024{" "}
                <span style={{ color: "red" }}>Unique Garments</span>. All rights
                reserved Designed and Maintained by{" "}
                <a
                  href="https://bhoomitechzone.in"
                  className="text-decoration-none text-white"
                >
                  <span style={{ color: "red" }}>BTPL</span>
                </a>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
