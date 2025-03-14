
const express = require('express')
const route = express.Router()
const costumerController = require("../controller/controller")
route.post("/register", costumerController.costumerRegistration)
route.post("/login", costumerController.costumerLogin)






module.exports = route