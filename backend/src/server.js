const express = require('express')
const authController = require("./controller/AuthController");
const AdminController = require("./controller/AdminController");

const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require("swagger-jsdoc");

const swaggerDOC = require("./swagger.json");

const authenticateMiddleware = require("./middleware/authenticate");

const app = express();

app.use(express.json()); ///comando que aparece as informações no terminal

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDOC));

app.use("/auth", authenticateMiddleware, authController);
app.use("/admin", AdminController);

app.listen(3001, () => {
    console.log('Server is running');
});