const mongoose = require("mongoose");

function connectToMongo() {
  mongoose.connect(process.env.MONGO_URL, () => {
    console.log("Connected");
  });
}

module.exports = { connectToMongo };
