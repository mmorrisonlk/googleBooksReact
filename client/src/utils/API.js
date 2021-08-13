import axios from "axios";

export default {
    getSavedBooks: function() {
        return axios.get("/api/books/");
    },
    getBooks: function(entry) {
        console.log("Axios Get Books")
        // console.log(params)
        return axios.get("/api/google/", { params: { q: entry } })
    },
    saveBook: function(book) {
        console.log("Axios Save")
        console.log(book)
        return axios.post("/api/books/", book)
    },
    deleteBook: function(id) {
        console.log("Axios Delete")
        console.log(id)
        return axios.delete("/api/books/"+ id)
    }
}