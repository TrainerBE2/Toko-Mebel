import "./Customize.css";
import "../../Styles/index.css";
import { Container, Row, Col, Button, Card, Image } from "react-bootstrap";
import CustomizeImg1 from "../../assets/Image/Chair/arm-chair-01-blue.png";
import CustomizeImg2 from "../../assets/Image/Chair/arm-chair-01-green.png";
import CustomizeImg3 from "../../assets/Image/Chair/arm-chair-01-grey.png";
import CustomizeImg4 from "../../assets/Image/Chair/arm-chair-01-red.png";
import SketchImg from "../../assets/Image/sketch.jpg";
import { useState } from "react";

const CustomSection = () => {

   const [currentImage, setCurrentImage] = useState(CustomizeImg1);

   const handleChange = (color) => {
     switch (color) {
       case "blue":
         setCurrentImage(CustomizeImg1);
         break;
       case "green":
         setCurrentImage(CustomizeImg2);
         break;
       case "grey":
         setCurrentImage(CustomizeImg3);
         break;
       case "red":
         setCurrentImage(CustomizeImg4);
         break;
       default:
         setCurrentImage(CustomizeImg1);
     }
   };
  return (
    <>
      <section id="customize" className="py-5 bg-white overflow-hidden">
        <Container className="mt-5">
          <Row className="gap-4 gap-md-5 gap-lg-0 align-items-end">
            <Col xs="12" md="12" lg="6">
              <Row className="g-4 align-items-end">
                <Col
                  xs="6"
                  md="6"
                  className="d-flex flex-column justify-content-start align-items-start gap-3 gap-md-4 gap-lg-5"
                  data-aos="fade-down-right"
                >
                  <div className="title">
                    <p className="box fm-1 fw-bold fst-italic fs-7 py-1 px-2 border border-secondary max-content text-uppercase">
                      Customize
                    </p>
                    <h5 className="fw-bold text-uppercase m-0 fm-2">
                      Design Material and Color
                    </h5>
                    <p className="m-0 fm-2 fw-medium">
                      Choose the color you want
                    </p>
                  </div>
                  <div className="color__pick fm-1 w-100">
                    <Button
                      variant="primary"
                      size="md"
                      className="w-100 fw-medium mb-2 rounded-0"
                      onClick={() => handleChange("blue")}
                    >
                      Blue
                    </Button>
                    <Button
                      variant="success"
                      size="md"
                      className="w-100 fw-medium mb-2 rounded-0"
                      onClick={() => handleChange("green")}
                    >
                      Green
                    </Button>
                    <Button
                      variant="secondary"
                      size="md"
                      className="w-100 fw-medium mb-2 rounded-0"
                      onClick={() => handleChange("grey")}
                    >
                      Grey
                    </Button>
                    <Button
                      variant="danger"
                      size="md"
                      className="w-100 fw-medium mb-2 rounded-0"
                      onClick={() => handleChange("red")}
                    >
                      Red
                    </Button>
                  </div>
                </Col>
                <Col xs="6" md="6"
                  data-aos="fade-down-left"
                  data-aos-delay="300"
                >
                  <Card
                    style={{ width: "100%", height: "max-content" }}
                    className="rounded-0 border-dark"
                  >
                    <Card.Img
                      variant="top"
                      src={currentImage}
                      style={{ width: "100%" }}
                      className="mx-auto d-block img__card"
                    />
                    <Card.Footer className="d-flex align-items-center justify-content-between fm-2 p-0 border-dark">
                      <p className="m-0 fw-semibold ps-lg-4 ps-md-3 ps-3">
                        Your Customize
                      </p>
                      <Button
                        variant="warning"
                        size="md"
                        className="rounded-0 px-md-4 px-3 fw-bold"
                      >
                        <i className="ri-shopping-cart-2-line fs-6"></i>
                      </Button>
                    </Card.Footer>
                  </Card>
                </Col>
              </Row>
            </Col>

            <Col xs="12" md="12" lg="6" data-aos="fade-up" data-aos-delay="600">
              <div className="position-relative d-flex">
                <Image
                  src={SketchImg}
                  thumbnail
                  className="border-dark border-4 rounded-4 mx-auto object-fit-contain"
                  style={{ width: "max-content", height: "max-content" }}
                />
                <div className="position-absolute top-0 start-50 translate-middle text-bg-dark fm-4 py-1 px-2">
                  <p className="m-0 fs-7">Sketching</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default CustomSection;
