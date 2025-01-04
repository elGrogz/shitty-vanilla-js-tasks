const http = require("node:http");
const url = require("node:url");

let testTasks = [
  {
    id: 1,
    name: "task 1",
    description: "task 1 desc",
  },
  {
    id: 2,
    name: "task 2",
    description: "task 2 desc",
  },
];

const PORT = 5000;
const CONTENT_TYPE_JSON = { "Content-Type": "application/json" };
// const CONTENT_TYPE_HTML = { "Content-Type": "text/html" };

//  create server

const server = http.createServer((incomingRequest, serverResponse) => {
  const parsedUrl = url.parse(incomingRequest.url, true); // the 'true' means the URL's query string is automatically parsed into a decoded JS object. Otherwise it is an unparsed unencoded string

  // parsedUrl includes hostname, href/path, auth, port, query/search strings (key value pair after the ? in the URL),
  console.log(
    `Incoming ${incomingRequest.method} HTTP request: ${parsedUrl.path}`
  );

  if (incomingRequest.method == "GET") {
    serverResponse.writeHead(200, "GET stuff", CONTENT_TYPE_JSON);
    serverResponse.end(JSON.stringify({ data: testTasks }));
    //  get tasks
    // get task
  } else if (incomingRequest.method == "POST") {
    // post task
    let body = "";
    incomingRequest.on("data", (dataChunk) => {
      console.log(`datachunk: ${dataChunk.toString()}`);
      body += dataChunk.toString();
    });
    // this happens first, then the 'data' event is emitted
    console.log(`Body: ${body}`);
  } else if (incomingRequest.method == "PUT") {
    // update task
  } else if (incomingRequest.method == "DELETE") {
    // delete task
  } else {
    serverResponse.writeHead(404, "Invalid API request", CONTENT_TYPE_JSON);
    serverResponse.end(JSON.stringify({ errorOMG: "omg its an error" }));
  }
});

server.listen(PORT || 4000, () => {
  console.log(`Server running on ${PORT}`);
});
