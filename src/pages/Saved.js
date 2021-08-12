import React from "react";
import { Component } from "react";
import { Jumbotron, Card, Footer } from "react-bootstrap";
import Book from "../components/Book";
import API from "../utils/API";
import { Col, Row, Container, List } from "react-bootstrap";

class Saved extends Component {
    state = {
        books: []
    };

    componentDidMount() {
        this.getSavedBooks();
    }

    getSavedBooks = () => {
        API.getSavedBooks()
            .then(res =>
                this.setState({
                    books: res.data
                })
            )
            .catch(err => console.log(err))
    };

    handleBooksDelete = id => {
        API.deleteBook(id).then(res => this.getSavedBooks());
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1 className="text-center">
                                <strong>(React) Google Books Search</strong>
                            </h1>
                            <h2 className="text-center">Search for and Save Books of Interest.</h2>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <Card title="Saved Books" icon="download">
                            {this.state.books.length ? (
                                <List>
                                    {this.state.books.map(book => (
                                        <Book
                                            key={book.id}
                                            title={book.title}
                                            subtitle={book.subtitle}
                                            link={book.link}
                                            authors={book.authors.join(", ")}
                                            description={book.description}
                                            image={book.image}
                                            Button={() => (
                                                <button
                                                    onClick={() => this.handleBooksDelete(book._id)}
                                                    className="btn btn-danger m1-2"
                                                >
                                                    Delete
                                                </button>
                                            )}
                                        />
                                    ))}
                                </List>
                            ) : (
                                <h2 className="text-center">No Saved Books</h2>
                            )}
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}