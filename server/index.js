const express = require("express");
const bodyParser = require("body-parser");
const morgan = require('morgan')
const helmet = require("helmet");
const chalk = require('chalk');
const mongoose = require("mongoose");

const app = express();

const ServiceRouter = require("./routes/Service.routes");
const UserRouter = require("./routes/User.routes");
const errorHandler = require("./middlewares/errorHandler");
const sendMail = require("./utility/sendEmail");

const port = 4000 || process.env.PORT;

require("dotenv").config();
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(morgan('tiny'))
app.use(helmet())

mongoose.set('strictQuery', false);
// database connection
mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(chalk.green("Database connection successful!")))
  .catch((err) => console.log(chalk.red(err)));


// all routes
app.use("/api/user", UserRouter);
app.use("/api/service", ServiceRouter);

app.get("/", (req, res) => {
  res.send("Hello World")
})

app.get("/mail", sendMail)

app.use(errorHandler)


app.listen(port, () => {
  console.log()
  console.log(chalk.yellow('/'))
  console.log(chalk.yellow('/mail'))
  console.log(chalk.yellow('/api/service'))
  console.log(chalk.yellow('/api/user'))
  console.log()
  console.log(`Server is running on http://localhost:${port}`);
  console.log()
});
