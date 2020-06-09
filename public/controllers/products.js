const Products = require("../model/product")
let i=0;
exports.getAddproducts =  (req, res, next) => {
    // this is how to serve static files and content

    // res.sendFile(path.join(__dirname, "../","public/HTML", "add-product.html"));

   // this is to tell express that we want to serve dynamic content
   // the render function is used for this purpose
   
   res.render("add-product",{title:"admin's router",path:"admin/add-product"}); /* no need to specify file type as we already tell express using app.set() */
   console.log("this message is from admin's controller");
};
exports.postAddproducts =  (req, res, next) => {
    const products = new Products(req.body.title);
    products.save();
    res.redirect("/");
    console.log("this message is from admin's controller");
}
exports.getproduct = (req, res, next) => {
    const product = Products.fetchAll(); 
    console.log("shop controller " + product);
    // this is how to serve static files and content 
    //  res.sendFile(path.join(__dirname,"../","HTML","shop.html")); 
    // this is to tell express that we want to serve dynamic content 
    // the render function is used for this purpose 
    let bool = (product.length > 0)
    console.log(bool);
    res.render("shop", {
        prods: product,
        title: "shop-router",
        path: "/",
        length: bool
    }); /* no need to specify file type as we already tell express using app.set() */
    
};