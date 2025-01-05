const http = require("node:http");
const url = require("node:url");

const { handleGetRequest } = require("./requestHandlers");

const PORT = 5000;

// const CONTENT_TYPE_HTML = { "Content-Type": "text/html" };

const server = http.createServer((incomingRequest, serverResponse) => {
  const parsedUrl = url.parse(incomingRequest.url, true); // the 'true' means the URL's query string is automatically parsed into a decoded JS object. Otherwise it is an unparsed unencoded string

  // parsedUrl includes hostname, href/path, auth, port, query/search strings (key value pair after the ? in the URL),
  console.log(
    `Incoming ${incomingRequest.method} HTTP request: ${parsedUrl.path}`
  );

  if (incomingRequest.method == "GET") {
    // //  get tasks
    // // get task

    handleGetRequest(incomingRequest, serverResponse, parsedUrl);
  } else if (incomingRequest.method == "POST") {
    // handlePostRequest(parsedUrl, data)
    // post task
    let body = "";
    incomingRequest.on("data", (dataChunk) => {
      console.log(`datachunk: ${dataChunk.toString()}`);
      body += dataChunk.toString();
    });
    // this happens first, then the 'data' event is emitted
    console.log(`Body: ${body}`);
  } else if (incomingRequest.method == "PUT") {
    // handlePutRequest(parsedUrl, data)
    // update task
  } else if (incomingRequest.method == "DELETE") {
    // handleDeleteRequest(parsedUrl)
    // delete task
  } else {
    // handleInvalidRequest(parsedUrl)
    serverResponse.writeHead(404, "Invalid API request", CONTENT_TYPE_JSON);
    serverResponse.end(JSON.stringify({ errorOMG: "omg its an error" }));
  }
});

server.listen(PORT || 4000, () => {
  console.log(`Server running on ${PORT}`);
});
