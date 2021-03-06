import React from "react";
import Skeleton from "react-loading-skeleton";
import { Row, Col, Container } from "react-bootstrap";

function SkeletonNew() {
  return (
    <div>
      <section>
        <Container className="p-0  px-sm-3 py-4 h-75">
          <Row className="cards-row ">
            <Col xs={12} md={4} sm={12}>
              <Skeleton height={180} />
            </Col>
            <Col xs={12} md={4} sm={12}>
              <Skeleton height={180} />
            </Col>
            <Col xs={12} md={4} sm={12}>
              <Skeleton height={180} />
            </Col>
          </Row>

          <br></br>
          <br></br>
          <Row>
            <Col xs={12} md={4} sm={12}>
              <h4 className="card-title">
                <Skeleton height={36} />
              </h4>
            </Col>

            <Col
              xs={12}
              md={6}
              sm={12}
              style={{ justifyContent: "space-between" }}
            >
              <h4 className="card-title">
                <Skeleton height={36} />
              </h4>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={12} sm={12}>
              <h4 className="card-title">
                <Skeleton height={46} />
              </h4>
            </Col>

            <Col xs={12} md={12} sm={12}>
              <h4 className="card-title">
                <Skeleton height={46} />
              </h4>
            </Col>
            <Col xs={12} md={12} sm={12}>
              <h4 className="card-title">
                <Skeleton height={46} />
              </h4>
            </Col>
            <Col xs={12} md={12} sm={12}>
              <h4 className="card-title">
                <Skeleton height={46} />
              </h4>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default SkeletonNew;
