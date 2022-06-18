import React from 'react';
import { Card, ThemeProvider, Container, Row, Col, ListGroup } from 'react-bootstrap';

export default function Skills() {
    return (
        <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}>
            <Container>
                <Row sm={1} md={2}>
                    <Col>
                        <Card style={{width: '18rem'}}>
                            <Card.Title>Technical Skills</Card.Title>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Javascript</ListGroup.Item>
                                <ListGroup.Item>React</ListGroup.Item>
                                <ListGroup.Item>Node</ListGroup.Item>
                                <ListGroup.Item>Express</ListGroup.Item>
                                <ListGroup.Item>Git</ListGroup.Item>
                                <ListGroup.Item>HTML</ListGroup.Item>
                                <ListGroup.Item>CSS</ListGroup.Item>
                                <ListGroup.Item>Responsive Web Design</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{width: '18rem'}}>
                            <Card.Title>Professional Skills</Card.Title>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Creative</ListGroup.Item>
                                <ListGroup.Item>Skilled and Experienced Writer</ListGroup.Item>
                                <ListGroup.Item>Excellent Communication Skills</ListGroup.Item>
                                <ListGroup.Item>Professional</ListGroup.Item>
                                <ListGroup.Item>Organized</ListGroup.Item>
                                <ListGroup.Item>Motivated</ListGroup.Item>
                                <ListGroup.Item>Team Player</ListGroup.Item>
                                <ListGroup.Item>Fast Learner</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </ThemeProvider>
            
    )
}