import axios from "axios";

export default {
    getSavedBooks: function() {
        return axios.get("/api/books/");
    },
    getBooks: function(entry) {
        console.log("Axios Get Books")
        // console.log(params)
        return axios.get("/api/google/", { params: { q: entry } })
    }
}