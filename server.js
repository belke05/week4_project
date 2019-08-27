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
app.set("view engine", "hbs");

// register the partials you want to have in your basic layout
// to start this will be a nav and a footer bar
hbs.registerPartials(path.join(__dirname + "/views/partials"));
// receives current context as this context
hbs.registerHelper("print_person", function() {
  return this.first_name + " " + this.last_name;
});

app.get("/", (req, res) => {
  data = dataPage1;
  res.render("index", data);
});

app.get("/characters", (req, res) => {
  data = dataPage2;
  res.render("characters", data);
});

app.get("/locations", (req, res) => {
  data = dataPage3;
  res.render("locations", data);
});

app.listen(4000, () => {
  console.log("port 4000 is listening");
});

// objects to use

let dataPage1 = {
  title: "a song of ice and fire",
  characters: [
    { first_name: "John", last_name: "Snow" },
    { first_name: "Tyrion", last_name: "Lannister" },
    { first_name: "tywin", last_name: "Lannister" }
  ],
  houses: [
    "stark",
    "lannister",
    "tyrell",
    "Greyjoy",
    "Baratheon",
    "Targaryen",
    "Greyjoy",
    "Tully",
    "Arryn",
    "Martel",
    "Frey"
  ],
  locations: [
    { name: "The North", cities: { capital: "Winterfel", population: 20000 } },
    {
      name: "Stormlands",
      cities: { capital: "Kings Landing", population: 1000000 }
    }
  ],
  testParagraph: "<p>" + "some text" + "</p>"
};

let dataPage2 = {};

let dataPage3 = {};
