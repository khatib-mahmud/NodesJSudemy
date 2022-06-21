const http = require("http");

const PORT = 5000;

const server = http.createServer();

const Firends = [
  {
    id: 0,
    name: "Tom Tom",
  },
  {
    id: 1,
    name: "ben ten",
  },
  {
    id: 2,
    name: "chakkumama",
  },
];

server.on("request", (req, res) => {
  const items = req.url.split("/");

  if (items[1] === "friend") {
    console.log(items);
    // res.writeHead(200, {
    //   "Content-Type": "application/json",
    // });
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    if (items.length === 3) {
      const index = Number(items[2]);
      console.log(index, "THIS IS INDEX");
      res.end(JSON.stringify(Firends[index]));
    } else {
      res.end(JSON.stringify(Firends));
    }
    res.end(
      JSON.stringify({
        id: 1,
        name: "Hello! what the hell!",
      })
    );
  } else if (items[1] === "messages") {
    console.log(items);
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<body>");
    res.write("<ul>");
    res.write("<li>Hello Isaac! </li>");
    res.write("<li>What are ur thought about astronomy </li>");
    res.write("</ul>");
    res.write("</body>");
    res.write("</html>");
  } else {
    res.statusCode = 404;
    res
      .end
      //   JSON.stringify({
      //     data: "WHAT IS THIS. TRY CORRECT URL",
      //   }
      //   )
      ();
  }
});

server.listen(PORT, () => {
  console.log("LIstening on " + PORT);
});
