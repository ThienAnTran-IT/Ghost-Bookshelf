import React, {useState} from 'react';
import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap';

import './Home.css';
import '../AddBookModal/AddBookModal.css';
import Books from '../Books/Books';
import AddBookModal from '../AddBookModal/AddBookModal';


const Home = () => {
    const [isAddBookModalOpen, setIsAddBookModalOpen] = useState(false);

    const openAddBookModal = () => setIsAddBookModalOpen(true);

    const closeAddBookModal = () => setIsAddBookModalOpen(false);

    const addNewBook = (bookInfo) => {
        console.log("add new book");
        setIsAddBookModalOpen(false);
    }

    return (
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
                    <Button className="home-books-add-button" variant="primary" color="#DCD6F7" onClick={openAddBookModal}>Add</Button>{' '}
                    <Books />

                    <Modal show={isAddBookModalOpen} onHide={closeAddBookModal}>
                        <Modal.Header className="add-modal-header" closeButton>
                            <Modal.Title className="add-modal-title">Add a new Book</Modal.Title>
                        </Modal.Header>

                        <Modal.Body className="add-modal-body">
                            <Form className="add-book-form">
                                <Form.Group className="mb-3 add-form-group" controlId="add-book-form-title">
                                    <Form.Label className="add-form-label">Title</Form.Label>
                                    <Form.Control type="text" className="add-form-text" placeholder="Enter email" required />
                                </Form.Group>

                                <Form.Group className="mb-3 add-form-group" controlId="add-book-form-author">
                                    <Form.Label className="add-form-label">Author</Form.Label>
                                    <Form.Control type="text" className="add-form-text" placeholder="Enter author" required />
                                </Form.Group>

                                <Form.Group className="mb-3 add-form-group" controlId="add-book-form-bookshelf">
                                    <Form.Label className="add-form-label">Bookshelf</Form.Label>
                                    <Form.Select>
                                        <option className="add-form-shelf-option">Read</option>
                                        <option className="add-form-shelf-option">Currently Reading</option>
                                        <option className="add-form-shelf-option">Want To Read</option>
                                    </Form.Select>
                                </Form.Group>

                                <Modal.Footer className="add-modal-footer">
                                    <Button className="add-button" variant="primary" onClick={addNewBook}>ADD</Button>
                                </Modal.Footer>
                            </Form>
                        </Modal.Body>
                        
                    </Modal>
                </Col>
            </Row>
        </Container>
    )
}

export default Home;
