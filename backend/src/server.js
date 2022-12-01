const express = require('express')
const authController = require("./controller/AuthController");
const AdminController = require("./controller/AdminController");

const authenticateMiddleware = require ("./middleware/authenticate");

const app = express();

app.use(express.json()); ///comando que aparece as informações no terminal


app.use("/auth", authController);
app.use("/admin", authenticateMiddleware, AdminController);

app.listen(3001, () => {
    console.log('Server is running');
});