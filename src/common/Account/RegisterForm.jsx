import "../../styles/index.css";
import { Form, Button, Card } from "react-bootstrap";
import PropTypes from "prop-types"
import { useState } from "react";

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
    <Card className="p-3 mx-auto text-bg-dark border-0 w-100">
      <Card.Title className="fm-1 text-center fw-bold">
        Create your account
      </Card.Title>
      <Card.Body>
        <Form>
          <Form.Group className="mb-3" controlId="completedName">
            <Form.Control
              type="text"
              className="fm-2"
              placeholder="Enter Complete Name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Control
              type="email"
              className="fm-2"
              placeholder="Enter email/no. telp"
            />
          </Form.Group>
          <Form.Group className="mb-3 d-flex" controlId="password">
            <Form.Control
              type={isPassword ? "password" : "text"}
              className="fm-2 rounded-0 rounded-start"
              placeholder="Password"
            />
            <Button
              variant="warning"
              className="rounded-0 rounded-end"
              onClick={handleEyePassword}
            >
              <i className={isPassword ? "ri-eye-off-line" : "ri-eye-line"}></i>
            </Button>
          </Form.Group>
          <Form.Group className="mb-3 d-flex" controlId="confirmPassword">
            <Form.Control
              type={isConfirmPassword ? "password" : "text"}
              className="fm-2 rounded-0 rounded-start"
              placeholder="Confirm Password"
            />
            <Button
              variant="warning"
              className="rounded-0 rounded-end"
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
            <p className="m-0">Have an account?</p>
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
