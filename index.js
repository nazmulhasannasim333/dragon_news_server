const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 4500;
const categories = require("./data/categories.json");
const news = require("./data/news.json");

app.use(cors());
app.get("/", (req, res) => {
  res.send("Dragon News");
});

app.get("/categories", (req, res) => {
  res.send(categories);
});

app.get("/news", (req, res) => {
  res.send(news);
});

app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  const selectedNews = news.find((n) => n._id === id);
  res.send(selectedNews);
});

app.get("/categories/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (id === 0) {
    res.send(news);
  } else {
    const categoryNews = news.filter((n) => parseInt(n.category_id) === id);
    res.send(categoryNews);
  }
});

app.listen(port, () => {
  console.log(`Dragon API is running on port ${port}`);
});
