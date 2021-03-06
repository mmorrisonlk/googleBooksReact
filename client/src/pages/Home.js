import React from "react";
import { Component } from "react";
import { Jumbotron, Card/*, Grid*/, Container, Row, Col,/* Collapse, CardColumns,*/ ListGroup } from "react-bootstrap";
import Form from "../components/Form";
import Book from "../components/Book";
import API from "../utils/API";

class Home extends Component {
    state = {
        books: [],
        q: "",
        message: "Search For A Book To Begin!"
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    getBooks = () => {
        console.log("Get Books")
        console.log(this.state.q)
        API.getBooks(this.state.q)
            .then(res => {
                console.log(res)
                this.setState({
                    books: res.data
                })}
            )
            .catch(() =>
                this.setState({
                    books: [],
                    message: "No New Books Found, Try a Different Query"
                })
            );
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.getBooks();
    };

    handleBookSave = id => {
        const book = this.state.books.find(book => book.id === id);

        API.saveBook({
            googleId: book.id,
            title: book.volumeInfo.title,
            subtitle: book.volumeInfo.subtitle,
            link: book.volumeInfo.infoLink,
            authors: book.volumeInfo.authors,
            description: book.volumeInfo.description,
            image: book.volumeInfo.imageLinks.thumbnail
        }).then(() => this.getBooks());
    };

    render() {
        return (
            <Container>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1 className="text-center">
                                <strong>(React) Google Books Search</strong>
                            </h1>
                            <h2 className="text-center">Search for and Save Books of Interest</h2>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <Card title="Book Search" icon="far fa-book">
                            <Form
                                handleInputChange={this.handleInputChange}
                                handleFormSubmit={this.handleFormSubmit}
                                q={this.state.q}
                            />
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <Card title="Results">
                            {this.state.books.length ? (
                                <ListGroup>
                                    {this.state.books.map(book => (
                                        <Book
                                            key={book.id}
                                            title={book.volumeInfo.title}
                                            subtitle={book.volumeInfo.subtitle}
                                            link={book.volumeInfo.infoLink}
                                            authors={book.volumeInfo.authors.join(", ")}
                                            description={book.volumeInfo.description}
                                            image={book.volumeInfo.imageLinks.thumbnail}
                                            Button={() => (
                                                <button
                                                    onClick={() => this.handleBookSave(book.id)}
                                                    className="btn btn-primary ml-2"
                                                >
                                                    Save
                                                </button>
                                            )}
                                        />
                                    ))}
                                </ListGroup>
                            ) : (
                                <h2 className="text-center">{this.state.message}</h2>
                            )}
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Home;