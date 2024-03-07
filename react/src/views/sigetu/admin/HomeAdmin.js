import React, { useState, useEffect } from "react";
import { useLocation, } from "react-router-dom";
import {
  Card,
  CardHeader,
  Table,
  Container,
  Row,
  Col,
  CardBody,
  CardTitle,
} from "reactstrap";

const HomeAdmin = (props) => {
  const mainContent = React.useRef(null);
  const location = useLocation();

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []); 

  const tick = () => {
    setTime(new Date());
  };

  return (
    <>
      <div className="main-content" ref={mainContent}>
        <Container fluid>
          
        </Container>
      </div>
    </>
  );
};

export default HomeAdmin;
