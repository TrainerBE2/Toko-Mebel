import "../../styles/index.css";
import { Form, Button, Card } from "react-bootstrap";
import PropTypes from "prop-types"
import {useState} from "react"
import imglogin from "../../assets/Image/login-img.svg"

const LoginForm = ({ toggleCard }) => {

  const [isProtect, setIsProtect] = useState(true)
  const handleEye = () => {
    setIsProtect(!isProtect)
  };
  return (
    <Card className="bg-light p-3 mx-auto text-bg-dark border-0 w-100" data-aos='zoom-in'>
      <Card.Img 
      className="d-block mx-auto my-3"
      style={{width: '300px'}}
      src={imglogin}
      />
      <Card.Title className="fm-1 text-center fw-bold text-dark-dark">
        Sign to your account
      </Card.Title>
      <Card.Body>
        <Form >
          <Form.Group className="mb-3 " controlId="email">
            <Form.Control
              type="email"
              className="fm-2 border-1 bg-white "
              placeholder="Enter email/no. telp"
            />
          </Form.Group>
          <Form.Group className="mb-3 d-flex" controlId="password">
            <Form.Control
              type={isProtect ? "password" : "text"}
              className="fm-2 bg-white border-end-0  rounded-0 rounded-start "
              placeholder="Password"
            />
            <Button
              variant="light"
              className="bg-white border border-start-0 rounded-0 rounded-end"
              onClick={handleEye}
            >
              <i className={isProtect ? "ri-eye-off-line " : "ri-eye-line"}></i>
            </Button>
          </Form.Group>
          <Form.Group
            className="mb-3 d-flex justify-content-between text-keep"
            controlId="keepSaveContainer"
          >
            <Form.Check
              type="checkbox"
              id="keepSave"
              label="Keep Save Login"
              className="fm-2 fs-7 "
            />
            <a href="" className="fm-2 fs-7 text-link fw-medium  btn-link">
              Forgot password?
            </a>
          </Form.Group>
          <Form.Group
            className="mb-4 fm-3 text-center "
          >
            <Button variant="success" className="border-0 px-5 fw-semibold w-100  btn__login">
              Login
            </Button>
          </Form.Group>
          <Form.Group
            className="fm-2 fs-7 text-center d-flex justify-content-center gap-1 align-items-center"
            controlId="toRegister"
          >
            <p className="m-0 text-keep">Dont have an account?</p>
            <Button
              variant="link"
              size="sm"
              className="p-0 fs-7 text-link fw-medium  btn-link"
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