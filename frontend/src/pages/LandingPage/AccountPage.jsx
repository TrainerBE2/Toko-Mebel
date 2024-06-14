import "../../styles/index.css";
import { Container } from "react-bootstrap";
import LoginForm from "../../common/Account/LoginForm.jsx";
import RegisterForm from "../../common/Account/RegisterForm.jsx";

import { useState } from "react";

const AccountPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleCard = () => {
    setIsLogin(!isLogin);
  };
  return (
    <section id="login" className="bg-dark-green">
      
      <Container className="py-5">
        <div className="card__container mx-auto">
          {isLogin ? (
            <LoginForm toggleCard={toggleCard} />
          ) : (
            <RegisterForm toggleCard={toggleCard} />
          )}
        </div>
      </Container>
    </section>
  );
};

export default AccountPage;
