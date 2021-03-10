const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});


app.post("/booking_form", (req, res) => {
    let fullname = req.body.fullname;
    let email = req.body.email;
    let date = req.body.date;
    let time = req.body.time;

    let booked = ("Thank you " + fullname + "<br>" +
        "for your booking on the " + date + "at " + time);

    res.send(booked);
});

app.listen(3000);