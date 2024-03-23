const http = require("http");
const fs = require("fs");
const url = require("url");
const processHtmlTemplate = require("./modules/process-html-template");

let html;
let productsData = JSON.parse(fs.readFileSync("./data/products.json", "utf-8"));
let productsListTemplateHtml = fs.readFileSync("./template/products-lists.html", "utf-8");
let productDetailsTemplateHtml = fs.readFileSync("./template/product-details.html", "utf-8")

const app = http.createServer();

app.on("request", (req, res) => {

 var { query, pathname: path } = url.parse(req.url, true)
 if (path.toLocaleLowerCase() == "/" || path == "/home") {

  html = fs.readFileSync("./template/index.html", "utf-8");

  html = html.replaceAll("{{$TITLE$}}", "Home");
  html = html.replaceAll("{{$CONTENT$}}", "You'r in Home page");
  res.writeHead(200, {
   "Content-Type": "text/html"
  })
  res.end(html)

 } else if (path.toLocaleLowerCase() == "/about") {

  html = fs.readFileSync("./template/index.html", "utf-8");

  html = html.replaceAll("{{$TITLE$}}", "About");
  html = html.replaceAll("{{$CONTENT$}}", "You'r in About page");
  res.writeHead(200, {
   "Content-Type": "text/html"
  });
  res.end(html);

 } else if (path.toLocaleLowerCase() == "/contact") {

  html = fs.readFileSync("./template/index.html", "utf-8")

  html = html.replaceAll("{{$TITLE$}}", "Contact");
  html = html.replaceAll("{{$CONTENT$}}", "You'r in Contact page");
  res.writeHead(200, {
   "Content-Type": "text/html"
  });
  res.end(html);

 } else if (path.toLocaleLowerCase() == "/products") {

  html = fs.readFileSync("./template/index.html", "utf-8")

  if (!query.id) {

   var productsListHtml = productsData.map((prodData) => {
    return processHtmlTemplate(productsListTemplateHtml, prodData)
   }).join(",");

   html = html.replaceAll("{{$TITLE$}}", "Products");
   html = html.replaceAll("{{$CONTENT$}}", productsListHtml)

   res.writeHead(200, {
    "Content-Type": "text/html"
   });

   res.end(html)
  } else {

   var productData = productsData.filter(prod=> prod.id == query.id)[0];
   var productDetailsHtml = processHtmlTemplate(productDetailsTemplateHtml, productData);

   html = html.replaceAll("{{$TITLE$}}", "Products");
   html = html.replaceAll("{{$CONTENT$}}", productDetailsHtml)


   res.writeHead(200, {
    "Content-Type": "text/html"
   });
   res.end(html)
  }


 } else {

  html = fs.readFileSync("./template/index.html", "utf-8")

  html = html.replaceAll("{{$TITLE$}}", "Error 404");
  html = html.replaceAll("{{$CONTENT$}}", "Error 404 Page not found!");
  res.writeHead(404, {
   "Content-Type": "text/html"
  })
  res.end(html);
 }

})


app.listen(5000, "127.0.0.1", () => {
 console.log(`Server is running at http://127.0.0.1:5000`);
})