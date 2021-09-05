const path = require("path");
const express = require('express');
const ejs = require("ejs");

const app = express();

const port = process.env.PORT || 3000;

const staticpath = path.join(__dirname, "../");

app.set("view engine", "ejs");

app.use(express.static(staticpath));

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.get("/", (req, res) => {
    res.render("index");
});

app.listen(port, () => {
    console.log(`Connected to port - ${port}`);
});