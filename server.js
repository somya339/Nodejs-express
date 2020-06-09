const express = require("express");
const app = express();
const adminroutes = require("./routes/admin");
const parser = require("body-parser");
const shop_router = require("./routes/shop");
const path = require("path");
const express_hbs = require("express-handlebars");
const err_controller = require("./public/controllers/error")

/* what ever be the templating engine the way of calling and parameter remains the same */

// codes for using different templating are written below 
// this will tell express that we are using a templating engine

// for express-handlebars
/* app.engine('hbs',express_hbs()); */ /* here hbs is the name assigned by the user not a default name */
// app.set('view engine', 'hbs');
// this will tell express where to look for the template
// app.set('views', 'public/HTML/hbs_handlebars');

/* important:pug is an engine which is recognised by express 
 so we don't have to use the app.engine */

// for pug
// app.set('view engine', 'pug');
// app.set('views', 'public/HTML/pug');


// for ejs
app.set("view engine","ejs");
app.set("views" , "public/html/ejs")


app.use("/",shop_router);
app.use(parser.urlencoded({
    extended: true
}));
app.use("/admin", adminroutes);
console.log("this message is from the server");
app.use(express.static(path.join(__dirname)))
app.use((req, res, next) => {

    // res.status(404).sendFile(path.join(__dirname, 'public/HTML', '404.html'));

    res.status(404).render("404", err_controller.error);
})
app.listen(1234);