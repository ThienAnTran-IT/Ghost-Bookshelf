import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import './index.css';
import Books from '../Books';


const Home = () => {
    return (
        // <h1>Home</h1>
        <Container className='home-container'>
            <Row className='home-container-row'>
                <Col className='home-bookshelf-menu' xs={6} md={2}>
                    <h2 className="home-menu-title">My Books</h2>
                    <ul className="home-menu-container">
                        <li className="home-menu-all">All</li>
                        <li className="home-menu-read">Read</li>
                        <li className="home-menu-currently-reading">Currently reading</li>
                        <li className="home-menu-to-read">Want to read</li>
                    </ul>
                </Col>

                <Col className='home-books-main' xs={12} md={10}>
                    <Button className="home-books-add-button" variant="primary" color="#DCD6F7">Add</Button>{' '}
                    <Books />
                </Col>
            </Row>
        </Container>
    )
}

export default Home;
