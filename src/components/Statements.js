import React from "react";
import {Container, Row, Col} from "react-bootstrap";

export default function Statements() {
    return (
        <Container className="statementContainer">
            <Row>
                <Col className="statementText">
                    <h3>Mission Statement</h3>
                    <hr className="underline"></hr>
                    <p>blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah</p>
                    <p className="author">Author: Fondle your bitch Mitch</p>
                </Col>
                <Col className="statementText">
                    <h3>Vision Statement</h3>
                    <hr className="underline"></hr>
                    <p>blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah</p>
                    <p className="author">Author: Fondle your bitch Mitch</p>
                </Col>
            </Row>
        </Container>
    );
}

/*
<div className="statementContainer">
            <div className="statements">
                <div className="statementText">
                    <h3>Mission Statement</h3>
                    <hr className="underline"></hr>
                    <p>blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah</p>
                    <p className="author">Author: Fondle your bitch Mitch</p>
                </div>
                <div className="statementText">
                    <h3>Vision Statement</h3>
                    <hr className="underline"></hr>
                    <p>blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah</p>
                    <p className="author">Author: Fondle your bitch Mitch</p>
                </div>
            </div>
        </div> */