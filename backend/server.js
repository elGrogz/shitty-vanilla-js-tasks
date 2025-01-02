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

const PORT = 4000;

//  create server

const server = http.createServer((incomingRequest, serverResponse) => {
  //  get tasks
  // get task
  // post task
  // update task
  // delete task
});
