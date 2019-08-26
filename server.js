const hbs = require("hbs");
const express = require("express");
const app = express();
const path = require("path");

// Note that the root route is now set to your public dir, so all static files you load will be considering public as root.
app.use(express.static(__dirname + "/public"));
// define the template engine you will be using
// So, when the request comes from the client, it will go to the
// router and then router redirect to one of the pages inside the views folder,
// and then that page will be rendered.
app.set("views", path.join(__dirname, "views"));
app.set("view enginge", "hbs");

// register the partials you want to have in your basic layout
// to start this will be a nav and a footer bar
app.registerPartials(path.join(__dirname + "/views/partials"));

app.get("/", (req, res) => {
  data = {};
  res = app.render("index", data);
});

app.get("/page2", (req, res) => {
  data = {};
  res = app.render("page2", data);
});

app.get("/page3", (req, res) => {
  data = {};
  res = app.render("page3", data);
});

app.listen(4000, () => {
  console.log("port 4000 is listening");
});
