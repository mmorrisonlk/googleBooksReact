const axios = require("axios");
const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        console.log("google Controller")
        console.log(req.query)
        console.log(req)
        // const { query: params } = req;
        axios
            .get("https://www.googleapis.com/books/v1/volumes", {
                params: req.query
            })
            .then(results =>
                results.data.items.filter(
                    result =>
                        result.volumeInfo.title &&
                        result.volumeInfo.infoLink &&
                        result.volumeInfo.authors &&
                        result.volumeInfo.description &&
                        result.volumeInfo.imageLinks &&
                        result.volumeInfo.imageLinks.thumbnail
                )
            )
            .then(apiBooks =>
                db.apiBooks.find().then(dbBooks =>
                    apiBooks.filter(apiBook =>
                        dbBooks.every(dbBook => dbBook.googleId.toString() !== apiBook.id)))
                )
            .then(books => res.json(books))
            .catch(err => res.status(422).json(err));
    }
};