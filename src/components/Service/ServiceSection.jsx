import "./Services.css";
import "../../Styles/index.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import ListServices from "../../assets/data/ListService.jsx"
import PropTypes from "prop-types"

const CardService = (props) => {
  return (
    <Col data-aos="fade-up" data-aos-delay={props.delay}>
      <Card className="w-100 p-3 bg-secondary-subtle fm-2 border-0" style={{ width: "100%" }}>
        <div className="d-flex align-items-start justify-content-center gap-3 flex-column flex-lg-row">
          <div className="icon__service p-3 text-bg-dark d-flex align-items-center justify-content-center rounded-circle">
            <i className={props.icons}></i>
          </div>
          <Card.Body className="p-0">
            <Card.Title className="fw-semibold fs-6">{props.title}</Card.Title>
            <Card.Text className="fs-7">{props.description}</Card.Text>
          </Card.Body>
        </div>
      </Card>
    </Col>
  );
};

CardService.propTypes = {
  icons: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  delay: PropTypes.number.isRequired,
};

const ServiceSection = () => {
  return (
    <>
      <section
        id="service"
        className="py-4 bg-white overflow-hidden"
      >
        <Container>
          <div
            className="title text-uppercase max-content ms-auto mb-4"
            data-aos="fade-left"
          >
            <p className="py-1 px-2 border border-secondary max-content ms-auto fm-1 fs-7 fw-bold fst-italic mb-1">
              Service
            </p>
            <h3 className="fm-2 fs-4 fw-bold">Our Service</h3>
            <span className="d-block bg-warning"></span>
          </div>
          <Row md="3" xs="2" lg="4" className="g-2">
            {ListServices.map((service) => (
              <CardService
                icons={service.icons}
                title={service.title}
                description={service.description}
                delay={service.delay}
                key={service.id}
              />
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ServiceSection;
