const express = require("express");
const app = express();
const mongoose = require("mongoose");

const Channel = require("./models/Channel");

//connect to db
mongoose.connect(
  "mongodb://rahul:password123@ds163835.mlab.com:63835/youtube-aggregators",
  {
    useNewUrlParser: true
  }
);
var db = mongoose.connection;

app.get("/", (req, res) => {
  Channel.find({}, (err, channels) => {
    if (err) {
      console.log(err);
      res.send({ err: err.message });
    } else {
      res.send({ response: channels });
    }
  });
});

app.listen(5000, function() {
  console.log("Server is running");
});
