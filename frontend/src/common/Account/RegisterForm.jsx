import "../../styles/index.css";
import { Form, Button, Card } from "react-bootstrap";
import PropTypes from "prop-types"
import { useState } from "react";
import imgsignup from "../../assets/Image/signup-img.svg"

export const RegisterForm = ({ toggleCard }) => {
  const [isPassword, setIsPassword] = useState(true);
  const [isConfirmPassword, setIsConfirmPassword] = useState(true);

  const handleEyePassword = () => {
    setIsPassword(!isPassword);
  };
  const handleEyeConfirmPassword = () => {
    setIsConfirmPassword(!isConfirmPassword);
  };
  return (
    <Card className="bg-light p-3 mx-auto text-bg-dark border-0 w-100" data-aos="zoom-in">
      <Card.Img 
        className="d-block mx-auto my-3"
        style={{width: '300px'}}
        src={imgsignup}
      />
      
      <Card.Title className="fm-1 text-center fw-bold text-dark-dark">
        Create your account
      </Card.Title>
      <Card.Body>
        <Form>
          <Form.Group className="mb-3" controlId="completedName">
            <Form.Control
              type="text"
              className="fm-2 "
              placeholder="Enter Complete Name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Control
              type="email"
              className="fm-2 "
              placeholder="Enter email/no. telp"
            />
          </Form.Group>
          <Form.Group className="mb-3 d-flex" controlId="password">
            <Form.Control
              type={isPassword ? "password" : "text"}
              className="fm-2 rounded-0 rounded-start border-end-0"
              placeholder="Password"
            />
            <Button
              variant="light"
              className="bg-white border border-start-0 rounded-0 rounded-end"
              onClick={handleEyePassword}
            >
              <i className={isPassword ? "ri-eye-off-line" : "ri-eye-line"}></i>
            </Button>
          </Form.Group>
          <Form.Group className="mb-3 d-flex" controlId="confirmPassword">
            <Form.Control
              type={isConfirmPassword ? "password" : "text"}
              className="fm-2 rounded-0 rounded-start border-end-0"
              placeholder="Confirm Password"
            />
            <Button
              variant="light"
              className="bg-white border border-start-0 rounded-0 rounded-end"
              onClick={handleEyeConfirmPassword}
            >
              <i
                className={
                  isConfirmPassword ? "ri-eye-off-line" : "ri-eye-line"
                }
              ></i>
            </Button>
          </Form.Group>
          <Form.Group className="mb-4 fm-3 text-center">
            <Button variant="success" className="px-5 fw-semibold w-100">
              Register
            </Button>
          </Form.Group>
          <Form.Group
            className="fm-2 fs-7 text-center d-flex justify-content-center gap-1 align-items-center"
            controlId="toLogin"
          >
            <p className="m-0 text-keep">Have an account?</p>
            <Button
              variant="link"
              size="sm"
              className="p-0 fs-7"
              onClick={toggleCard}
            >
              Login
            </Button>
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
};

RegisterForm.propTypes = {
  toggleCard: PropTypes.func.isRequired,
};

export default RegisterForm;
