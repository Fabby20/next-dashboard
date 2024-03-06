import React from "react";
import man from "../image/maan.png";
import "./ContentTop.css";
const ContentTop = () => {
  return (
    <div>
      <section className="bg-light navcontainer mb-4">
        <div className="container">
          <nav
            class="navbar navbar-expand-lg navbar-dark "
            aria-label="Offcanvas navbar large"
          >
            <div class="container-fluid ">
              <a class="navbar-brand fw-bold dashboard" href="#">
                Dashboard
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar2"
                aria-controls="offcanvasNavbar2"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div
                class="offcanvas offcanvas-end text-bg-dark"
                tabindex="-1"
                id="offcanvasNavbar2"
                aria-labelledby="offcanvasNavbar2Label"
              >
                <div class="offcanvas-body text-center">
                  <div class="navbar-nav justify-content-center flex-grow-1 pe-5">
                    <form class="" role="search">
                      <input
                        class="form-control me-2 px-5 mx-4 "
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                      />
                    </form>
                  </div>
                  {/* image */}
                  <div className="rounded-circle d-flex align-items-center justify-content-center nav__imageText">
                    <img
                      src={man}
                      alt=""
                      className="nav__image rounded-circle img-fluid"
                    />
                    <span className="nav-search d-inine py-2 p-2 shadow fw-semibold rounded">
                      Hi, Welcome back
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          {/* <Card /> */}
        </div>
      </section>
    </div>
  );
};

export default ContentTop;
