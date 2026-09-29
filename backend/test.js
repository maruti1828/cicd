const http = require("http");
const { spawn } = require("child_process");

const server = spawn("node", ["server.js"], {
  env: { ...process.env, PORT: "5050" }
});

setTimeout(() => {
  http.get("http://localhost:5050/api/health", (res) => {
    let data = "";
    res.on("data", chunk => data += chunk);
    res.on("end", () => {
      const result = JSON.parse(data);
      if (res.statusCode === 200 && result.status === "healthy") {
        console.log("Health check test passed");
        server.kill();
        process.exit(0);
      } else {
        console.error("Health check test failed");
        server.kill();
        process.exit(1);
      }
    });
  }).on("error", (err) => {
    console.error(err.message);
    server.kill();
    process.exit(1);
  });
}, 1000);