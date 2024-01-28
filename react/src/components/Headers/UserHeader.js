
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

const UserHeader = () => {
  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-5 d-flex align-items-center"
        style={{
          minHeight: "300px",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        {/* fondo del header*/}
        <span className="mask bg-gradient-info opacity-10" />
        {/* contenedor del header */}
        <Container className="d-flex align-items-center" fluid>
        </Container>
      </div>
    </>
  );
};

export default UserHeader;
