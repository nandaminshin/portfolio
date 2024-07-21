const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");
const mainRoutes = require('./routes/mainRoutes');

app.set("layout", "layouts/default");
app.set("views", "./views");
app.set("view engine", "ejs");
app.use(expressLayouts);
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

const mongodbUrl =
  "mongodb+srv://nandaminshin2024:Abc70707@cluster0.ri84pnu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongodbUrl).then(() => {
  console.log("Connected to database!");
  app.listen(3000, () => {
    console.log("Hello");
  });
})
  .catch((e) => {
    console.log(e);
  });

app.use(mainRoutes);





