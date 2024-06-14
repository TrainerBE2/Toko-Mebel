import { Nav, Card } from "react-bootstrap"
import { useState } from "react"
import PropTypes from "prop-types"

const NavDescription = ({description}) => {
  const [activeTab, setActiveTab] = useState("description");
  return (
    <>
      <Nav
        fill
        variant="tabs"
        defaultActiveKey="description"
        className="fm-4 fw-semibold"
      >
        <Nav.Item>
          <Nav.Link
            eventKey="description"
            className="text-dark border-0"
            active={activeTab === "description"}
            onClick={() => setActiveTab("description")}
          >
            Description
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="reviews"
            className="text-dark border-0"
            active={activeTab === "reviews"}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews
          </Nav.Link>
        </Nav.Item>
      </Nav>
      {activeTab === "description" && (
        <Card
          className={`p-3 border-0 border-top-0 rounded-0 rounded-bottom ${
            activeTab === "description" ? "rounded-end" : ""
          }`}
        >
          <Card.Body>
            <Card.Text className="fm-2">{ description }</Card.Text>
          </Card.Body>
        </Card>
      )}
      {activeTab === "reviews" && (
        <Card
          className={`p-3 border-0 border-top-0 rounded-0 rounded-bottom ${
            activeTab === "reviews" ? "rounded-start" : ""
          }`}
        >
          <Card.Body>
            <Card.Text className="fm-2">No reviews yet. Be the first to review!</Card.Text>
          </Card.Body>
        </Card>
      )}
    </>
  );
}

NavDescription.propTypes = {
  description: PropTypes.string.isRequired,
}

export default NavDescription