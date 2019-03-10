const mongoose = require("mongoose");

let channelSchema = mongoose.Schema({
  Name: String,
  Grade: String,
  Rank: String,
  Subscribers: String,
  Uploads: String,
  Views: String
});

let Channel = (module.exports = mongoose.model(
  "youtube-aggregator",
  channelSchema
));
