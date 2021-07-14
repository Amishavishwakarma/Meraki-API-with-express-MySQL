const express = require("express")
const Router = require("../API_MYSQL/router/index")
const parse_data = require("../API_MYSQL/model/mysql-connection")
const app = express()
app.use(express.json())
app.use(Router)

app.listen(3000, () => {
    console.log("listning")
})
