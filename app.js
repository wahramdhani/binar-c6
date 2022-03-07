const express = require("express");
const app = express();
const port = 5000
const userRouter = require('./router/userRoute')

app.use('/', function (req, res, next) {
    console.log("Time: ", Date());
    console.log("Request URL: ", req.originalUrl);
    console.log("Request Type: ", req.method);
    next ();
});

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true
    })
);

app.set("view engine", "ejs");

app.use('/', userRouter)

app.listen(port, () => console.log(`Example app listening on port ${port}!`));