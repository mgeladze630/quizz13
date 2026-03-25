const books = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: 10 },
    { id: 2, title: "1984", author: "George Orwell", price: 15 },
    { id: 3, title: "To Kill a Mockingbird", author: "HarperLee", price: 12 },
    { id: 4, title: "Moby Dick", author: "Herman Melville", price: 20 },
    { id: 5, title: "Pride and Prejudice", author: "Jane Austen", price: 8 }
];
const express = require("express");
const app = express();
const PORT = 3000;


app.listen(PORT, () => {
    console.log(`Server started on port http://localhost:3000 ${PORT}`);
})

app.get("/", (req, res) => {
    res.send("მოგესალმებით წიგნების მაღაზიაში!");
})

app.get("/api/books", (req, res) => {
    res.json(books);
});

app.get("/api/books/:id", (req, res) => {
    const bookId= parseInt(req.params.id);
    const book = books.find(book => book.id === bookId);
    if (book) {
        res.json(book);
    }else {
        res.status(404).json("Book not found!");
    }

})

app.get("/api/books", (req, res) => {
    const maxPrice = req.query.maxPrice;
    if (maxPrice) {
        const filteredBooks = books.filter(book => book.price <= parseFloat(maxPrice));
        res.json(filteredBooks);
    }else {
        res.json(books);
    }
})


