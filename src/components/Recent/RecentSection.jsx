import { Container, Row, Col, Button, Carousel} from "react-bootstrap";
import ImgProject1 from "../../assets/Image/Slide/img_project1.jpg";
import ImgProject2 from "../../assets/Image/Slide/img_project2.jpg";
import ImgProject3 from "../../assets/Image/Slide/img_project3.jpg";
import "./Recent.css";
import { useState } from "react";

const RecentSection = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleButtonClick = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <section id="recent" className="py-4 bg-white overflow-hidden">
      <Container className="my-5">
        <div
          className="title text-uppercase max-content mx-auto mb-5"
          data-aos="fade-down"
        >
          <p className="py-1 px-2 border border-secondary max-content mx-auto fm-1 fs-7 fw-bold fst-italic mb-1">
            Recently
          </p>
          <h3 className="fm-2 fs-4 fw-bold">Recent Project</h3>
        </div>
        <Row md="2" className="align-items-center">
          <Col md="6" data-aos="fade-right">
            <div className="recent__project">
              <div className="recent__button fm-3 h-max-content border-bottom border-secondary-subtle">
                <Button
                  variant="base"
                  className="border-0 rounded-0 border-top border-secondary-subtle d-flex justify-content-between w-100 py-2 py-lg-3 fw-medium"
                  onClick={() => handleButtonClick(0)}
                >
                  <div className="d-flex gap-2">
                    <span>01.</span>
                    <p className="m-0 text-start">GUEST SITTING ROOM</p>
                  </div>
                  <i className="ri-arrow-right-up-fill"></i>
                </Button>
                <Button
                  variant="base"
                  className="border-0 rounded-0 border-top border-secondary-subtle d-flex justify-content-between w-100 py-2 py-lg-3 fw-medium"
                  onClick={() => handleButtonClick(1)}
                >
                  <div className="d-flex gap-2">
                    <span>02.</span>
                    <p className="m-0 text-start">CONVENTION HALL DECORATION</p>
                  </div>
                  <i className="ri-arrow-right-up-fill"></i>
                </Button>
                <Button
                  variant="base"
                  className="border-0 rounded-0 border-top border-secondary-subtle d-flex justify-content-between w-100 py-2 py-lg-3 fw-medium"
                  onClick={() => handleButtonClick(2)}
                >
                  <div className="d-flex gap-2">
                    <span>03.</span>
                    <p className="m-0 text-start">
                      RYLIC INTERIOR STUDIO SETUP
                    </p>
                  </div>
                  <i className="ri-arrow-right-up-fill"></i>
                </Button>
              </div>
            </div>
          </Col>
          <Col md="6" className="d-flex align-items-end" data-aos="fade-left">
            <Carousel
              style={{ width: "100%" }}
              className="mx-auto"
              activeIndex={selectedImageIndex}
              onSelect={setSelectedImageIndex}
            >
              <Carousel.Item>
                <img
                  className="d-block w-100 h-100 object-fit-cover"
                  src={ImgProject1}
                  alt="Image Project 1"
                />
                <Carousel.Caption className="fm-3 bg-dark py-1 px-2">
                  <p className="m-0">01. GUEST SITTING ROOM</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 h-100 object-fit-cover"
                  src={ImgProject2}
                  alt="Image Project 2"
                />
                <Carousel.Caption className="fm-3 bg-dark py-1 px-2">
                  <p className="m-0">02. CONVENTION HALL DECORATION</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 h-100 object-fit-cover"
                  src={ImgProject3}
                  alt="Image Project 3"
                />
                <Carousel.Caption className="fm-3 bg-dark py-1 px-2">
                  <p className="m-0">03. RYLIC INTERIOR STUDIO SETUP</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            {/* <div
              className="recent__project bg-dark d-flex align-items-center flex-column overflow-hidden"
              style={{ height: "19.5rem" }}
            >
              <div className="recent__img position-relative">
                <Image
                  src={ImgProject1}
                  className={`d-block w-100 object-fit-contain ${
                    activeImage === 0 ? "border-warning" : "border-white"
                  }`}
                  ref={(el) => (imageRefs.current[0] = el)}
                />
                <span className="fm-3 text-white position-absolute">01.</span>
              </div>
              <div className="recent__img position-relative">
                <Image
                  src={ImgProject2}
                  className={`d-block w-100 object-fit-contain ${
                    activeImage === 1 ? "border-warning" : "border-white"
                  }`}
                  ref={(el) => (imageRefs.current[1] = el)}
                />
                <span className="fm-3 text-white position-absolute">02.</span>
              </div>
              <div className="recent__img position-relative">
                <Image
                  src={ImgProject3}
                  className={`d-block w-100 object-fit-contain ${
                    activeImage === 2 ? "border-warning" : "border-white"
                  }`}
                  ref={(el) => (imageRefs.current[2] = el)}
                />
                <span className="fm-3 text-white position-absolute">03.</span>
              </div>
            </div> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default RecentSection;
