
import HeroImg1 from "../../assets/Image/Shofa/single-sofa-03.png";
import HeroImg2 from "../../assets/Image/Chair/arm-chair-06.png";
import {Row, Col} from "react-bootstrap"
import "./Hero.css";
import { NavLink } from "react-router-dom"
import "../../Styles/index.css";

const HeroSection = () => {
  return (
    <>
      <section
        id="home"
        className="py-md-5 d-flex align-items-center justify-content-center overflow-hidden bg-white"
      >
        <div className="mt-5 mt-lg-0">
          <Row className="g-md-4 g-3">
            <Col xs="6" lg="4"
              className="pe-md-5 align-content-start"
              data-aos="fade-down-right"
              data-aos-delay="300"
            >
              <div className="img-container me-auto d-flex justify-content-center align-items-center">
                <div className="img mx-auto">
                  <img src={HeroImg1} alt="Shofa Red" />
                </div>
              </div>
            </Col>
            <Col xs="12" lg="4"
              className="order-first order-lg-0 mx-auto"
              data-aos="zoom-in-down"
            >
              <div className="text-center hero__cta mb-5 mb-lg-0 px-md-5 px-lg-0">
                <h1 className="m-0 fw-bold fm-4">
                  MAKE SURE YOUR <br /> HOME SHAPES YOUR <br /> PERSONALITY
                </h1>
                <span className="mx-auto mt-2 mb-3 rounded-3 d-block"></span>
                <p className="mb-4 fm-2">
                  Incredible home decor tips for your nest`s design!{" "}
                  <b>Get inspired</b> & make the design of your <b>Dreams!</b>
                </p>
                <NavLink to="/shop"
                  className="nav-link max-content mx-auto text-bg-dark py-2 px-3 rounded-0 fm-2"
                >
                  SHOP NOW <i className="ri-arrow-right-circle-line ms-1"></i>
                </NavLink>
              </div>
            </Col>
            <Col xs="6" lg="4"
              className="ps-md-5 align-content-end"
              data-aos="fade-up-left"
              data-aos-delay="300"
            >
              <div className="img-container ms-auto d-flex justify-content-center align-items-start">
                <div className="img mx-auto">
                  <img src={HeroImg2} alt="Chair" />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
