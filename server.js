const express = require("express");
const session = require("express-session");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const morgan = require("morgan");
const passport = require("passport");
const apiRoutes = require("./routes/api/index")
// Middleware
app.use(express.json({ extended: false }));

let database = "mongodb://localhost/orchestrate";

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  database = process.env.MONGODB_URI || process.env.PROD_DB;
}

//sessions
app.use(
    session({
        secret: "fraggle-rock", //pick a random string to make the hash that is generated secure
        resave: false, //required
        saveUninitialized: false //required
    })
);

app.use((req, res, next) => {
    console.log("req.session", req.session);
    return next();
});
// MORGAN HTTP LOGGER
morgan("tiny");

// MongoDB
mongoose.connect(database, {
    useNewUrlParser: true
});

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
    console.log("Connected");
});

// Routes
const routes = require("./routes");
app.use(routes);

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.post("/user", (req, res) => {
    console.log("user signup");
    req.session.username = req.body.username;
    res.end();
});

// Passport
app.use(passport.initialize());
app.use(passport.session()); // calls serializeUser and deserializeUser

app.listen(PORT, function() {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});
