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

const CONTENT_TYPE_JSON = { "Content-Type": "application/json" };

module.exports = {
  handleGetRequest: (incomingRequest, serverResponse, parsedUrl) => {
    serverResponse.writeHead(
      200,
      "successful get all tasks request",
      CONTENT_TYPE_JSON
    );
    serverResponse.end(JSON.stringify({ taskData: testTasks }));
  },
};
