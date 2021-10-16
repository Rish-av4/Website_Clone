import React from "react";
import c3 from "../images/c3.png";
import c2 from "../images/c2.webp";
import c4 from "../images/c4.webp";

export default function Carousel() {
  return (
    <>
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src={c3} className="d-block w-100" alt="" />
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={c2} className="d-block w-100" alt="" />
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
          <div className="carousel-item">
            <img src={c4} className="d-block w-100" alt="" />
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
        </div>
        {/* <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button> */}
        {/* <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button> */}
      </div>

      <form className="d-flex my-3">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-primary" type="submit">
          Search
        </button>
      </form>

      <button type="button" class="btn btn-primary mx-2  ">
        Primary
      </button>
      <button type="button" class="btn btn-secondary mx-2">
        Secondary
      </button>
      <button type="button" class="btn btn-success mx-2">
        Success
      </button>
      <button type="button" class="btn btn-danger mx-2">
        Danger
      </button>
      <button type="button" class="btn btn-warning mx-2">
        Warning
      </button>
      <button type="button" class="btn btn-info mx-2">
        Info
      </button>
      {/* <button type="button" class="btn btn-light">Light</button> */}
      <button type="button" class="btn btn-dark mx-2">
        Dark
      </button>

      {/* <button type="button" class="btn btn-link">Link</button> */}
    </>
  );
}
