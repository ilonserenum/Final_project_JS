// A simple Node.js server with a testimonials endpoint to get, post, delete, and update

const express = require("express");
const testimonials = require("./testimonials");

const app = express();
const port = 3000;

// Add headers before the routes are defined
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});
app.use(express.json());

app.get("/testimonials", (req, res) => {
  res.json(testimonials);
});

app.post("/testimonials", (req, res) => {
  const id =
    testimonials.length > 0 ? testimonials[testimonials.length - 1].id + 1 : 0;
  const testimonial = {
    id: id,
    name: req.body.name,
    job: `${req.body.position}, ${req.body.company}`,
    testimonial: req.body.message,
  };
  testimonials.push(testimonial);
  res.json(testimonials);
});

app.delete("/testimonials", (req, res) => {
  testimonials.splice(
    testimonials.findIndex((t) => t.id == req.body.id),
    1
  );
  res.json(testimonials);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
