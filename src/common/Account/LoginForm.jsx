import "../../styles/index.css";
import { Form, Button, Card } from "react-bootstrap";
import PropTypes from "prop-types"
import {useState} from "react"

const LoginForm = ({ toggleCard }) => {

  const [isProtect, setIsProtect] = useState(true)
  const handleEye = () => {
    setIsProtect(!isProtect)
  };
  return (
    <Card className="p-3 mx-auto text-bg-dark border-0 w-100">
      <Card.Title className="fm-1 text-center fw-bold">
        Sign to your account
      </Card.Title>
      <Card.Body>
        <Form>
          <Form.Group className="mb-3" controlId="email">
            <Form.Control
              type="email"
              className="fm-2"
              placeholder="Enter email/no. telp"
            />
          </Form.Group>
          <Form.Group className="mb-3 d-flex" controlId="password">
            <Form.Control
              type={isProtect ? "password" : "text"}
              className="fm-2 rounded-0 rounded-start"
              placeholder="Password"
            />
            <Button
              variant="warning"
              className="rounded-0 rounded-end"
              onClick={handleEye}
            >
              <i className={isProtect ? "ri-eye-off-line" : "ri-eye-line"}></i>
            </Button>
          </Form.Group>
          <Form.Group
            className="mb-3 d-flex justify-content-between"
            controlId="keepSaveContainer"
          >
            <Form.Check
              type="checkbox"
              id="keepSave"
              label="Keep Save Login"
              className="fm-2 fs-7"
            />
            <a href="" className="fm-2 fs-7">
              Forgot password?
            </a>
          </Form.Group>
          <Form.Group
            className="mb-4 fm-3 text-center"
          >
            <Button variant="success" className="px-5 fw-semibold w-100">
              Login
            </Button>
          </Form.Group>
          <Form.Group
            className="fm-2 fs-7 text-center d-flex justify-content-center gap-1 align-items-center"
            controlId="toRegister"
          >
            <p className="m-0">Dont have an account?</p>
            <Button
              variant="link"
              size="sm"
              className="p-0 fs-7"
              onClick={toggleCard}
            >
              Register
            </Button>
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
}

LoginForm.propTypes = {
  toggleCard: PropTypes.func.isRequired,
}

export default LoginForm