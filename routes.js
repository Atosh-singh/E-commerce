const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }

  res.setHeader("content-type", "text/html");

  res.write("<html>");

  res.write("<head><title>E-commerce project</title></head>");
  res.write("<body><h1>Welcome to my Project</h1></body>");

  res.write("</html>");
  res.end();
};

//1. method to export
//modele.export = requestHandler

//2. method to export

module.exports = {
  handler: requestHandler,
  someText: "Some hard coded text",
};

// module.exports.handler = requestHandler;
// module.exports.someText = "Some hard coded Text";
