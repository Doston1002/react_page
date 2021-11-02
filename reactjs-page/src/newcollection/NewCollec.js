import React from 'react';
import { Card, CardBody, CardFooter, Col, Container, Row } from 'reactstrap';
import sneaker1 from '../images/img4.png';
import sneaker2 from '../images/img1.png';
import sneaker3 from '../images/img3.png';

const NewCollec = () => {
    return (
        <div className="newcollec">
            <Container>
                <Row>
                    <Col md="12" className="pageTitles text-center">
                        <p>Straight From Nike</p>
                        <h4>New Collection</h4>
                    </Col>
                    <Col className="cardsArea" lg="6" md="12">
                        <Row>
                            <Col className="cards" lg="6" md="6">
                                <Card>
                                    <CardBody>
                                        <img src={sneaker1} alt="sneaker image" />
                                    </CardBody>
                                    <CardFooter>
                                        <div className="texts">
                                            <p>Nike Air Force</p>
                                            <span>$99</span>
                                        </div>
                                    </CardFooter>
                                </Card>
                            </Col>
                            <Col className="cards" lg="6" md="6">
                                <Card>
                                    <CardBody>
                                        <img src={sneaker2} alt="sneaker image" />
                                    </CardBody>
                                    <CardFooter>
                                        <div className="texts">
                                            <p>Nike Air Force</p>
                                            <span>$99</span>
                                        </div>
                                    </CardFooter>
                                </Card>
                            </Col>
                            <Col className="cards" lg="6" md="6">
                                <Card>
                                    <CardBody>
                                        <img src={sneaker1} alt="sneaker image" />
                                    </CardBody>
                                    <CardFooter>
                                        <div className="texts">
                                            <p>Nike Air Force</p>
                                            <span>$99</span>
                                        </div>
                                    </CardFooter>
                                </Card>
                            </Col>
                            <Col className="cards" lg="6" md="6">
                                <Card>
                                    <CardBody>
                                        <img src={sneaker2} alt="sneaker image" />
                                    </CardBody>
                                    <CardFooter>
                                        <div className="texts">
                                            <p>Nike Air Force</p>
                                            <span>$99</span>
                                        </div>
                                    </CardFooter>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg="6" md="12">
                        <Card>
                            <CardBody>
                                <div className="productPrice">
                                    <span>SALE -50%</span>
                                    <span>$99</span>
                                </div>
                                <img src={sneaker3} alt="sneaker" />
                            </CardBody>
                            <CardFooter className="leftCardFoot">
                                <h4 className="productName">Nike Air Force 1 Shadow</h4>
                                <p className="productBrand">Brand: Nike</p>
                            </CardFooter>
                        </Card>
                    </Col>
                    <Col md="12" className="buttonArea text-center">
                        <a href="#" className="exploreButton">Explore Other Products</a>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default NewCollec;