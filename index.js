var express = require('express'),
    PORT = process.env.PORT || 3000,
    IP  = process.env.IP,
    app = express();

    app.use(express.static("views"));
    app.set("view engine", "ejs");

    app.get("/", function(req,res) {
        res.render("index", {title: "index"});
    });

    app.get("*", function(req,res) {
        res.render("index", {title: "index"});
    });

    app.listen(PORT, IP, function() {
        console.log('listening on port ' + PORT);
    });
