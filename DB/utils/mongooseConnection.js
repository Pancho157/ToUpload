const mongoose = require("mongoose");

function connectToMongo() {
  mongoose.connect(
    process.env.MONGO_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    () => {
      console.log("Connected to mongo successfully");
    }
  );
}

module.exports = { connectToMongo };
