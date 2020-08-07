// const express = require('express'); /* um dia vou usar esse estilo */
require('express')()
.get("/", (req, res) => {
    return res.send("Hello from NLW")
})
.listen(5500)

