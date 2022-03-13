const express = require("express");
//const https = require("https"); use this to try to access doctor's name and address for booking form

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
// app.use('/css', express.static(__dirname + 'public/css'))
// app.use('/js', express.static(__dirname + 'public/js'))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});


app.post("/ ", (req, res) => {
    let fullname = req.body.fullname;
    let email = req.body.email;
    let date = req.body.date;
    let time = req.body.time;

    let booked = ("Thank you " + fullname + "<br>" +
        "for your booking on the " + date + "at " + time);

    res.send(booked);
});

app.listen(3000);