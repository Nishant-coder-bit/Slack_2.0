const express = require("express")
const app = express();

app.get("/", function(req, res) {
    res.send("Running");
})

app.listen(3000, () => {console.log("Running on Port 3000");
});