const session = require("express-session");
const MongoStore = require("connect-mongo");

const configs = JSON.parse(process.env.CONFIGS);

// VkCAVriXGpPzWpc3

const Session = session({
  store: MongoStore.create({
    mongoUrl: process.env.MONGO_URL,
  }),
  secret: "mongoSecret",
  resave: false,
  saveUninitialized: false,
  rolling: true,
  cookie: {
    maxAge: 600000,
  },
});

module.exports = { Session };
