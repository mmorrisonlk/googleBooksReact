import React from "react";
import { Col, Row, Container, Jumbotron } from "react-bootstrap";

function NoMatch() {
    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <Jumbotron>
                        <h1 className="text-center">404 Page Not Found</h1>
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    )
}

export default NoMatch;