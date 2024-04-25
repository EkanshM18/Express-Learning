const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const PORT = 3000

app.listen(PORT, () => {
    console.log("Sever running at 3000")
})

app.get("/ekansh", (res, req) => {
    req.json({
        "Message": "Hello Ekansh"
    })
})



