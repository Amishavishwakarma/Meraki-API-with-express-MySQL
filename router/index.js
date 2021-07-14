const express = require("express")
const router = new express.Router()
const serve = require("../controller/index")

router.get("/api", serve.get)

router.post("/post", serve.post)

router.put("/put/:id", serve.put)

router.delete("/delete/:id", serve.delete)



module.exports = router