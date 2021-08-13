import axios from "axios";

export default {
    getSavedBooks: function() {
        return axios.get("/api/books/");
    },
    getBooks: function(query) {
        console.log("Axios Get Books")
        console.log(query)
        return axios.get("/api/google/")
    }
}