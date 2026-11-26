const http = require("http");
const fs = require("fs");
const path = require("path");

const port = 3000;
const dataFile = path.join(__dirname, "enp.json");

function sendJson(response, statusCode, data) {
    response.writeHead(statusCode, { "Content-Type": "application/json" });
    response.end(JSON.stringify(data));
}

const server = http.createServer((request, response) => {
    if (request.method === "GET" && request.url === "/api/employees") {
        const employees = JSON.parse(fs.readFileSync(dataFile, "utf8"));
        sendJson(response, 200, employees);
        return;
    }

    if (request.method === "POST" && request.url === "/api/employees") {
        let body = "";

        request.on("data", chunk => {
            body += chunk;
        });

        request.on("end", () => {
            try {
                const employee = JSON.parse(body);
                const employees = JSON.parse(fs.readFileSync(dataFile, "utf8"));

                employees.push(employee);
                fs.writeFileSync(dataFile, `${JSON.stringify(employees, null, 4)}\n`);
                sendJson(response, 201, employees);
            } catch (error) {
                sendJson(response, 400, { error: "Invalid employee data" });
            }
        });
        return;
    }

    const requestedFile = request.url === "/" ? "text.html" : request.url.slice(1);
    const filePath = path.join(__dirname, requestedFile);

    if (filePath !== path.join(__dirname, "text.html") && filePath !== dataFile) {
        response.writeHead(404);
        response.end("Not found");
        return;
    }

    const contentType = filePath.endsWith(".json") ? "application/json" : "text/html";
    response.writeHead(200, { "Content-Type": contentType });
    fs.createReadStream(filePath).pipe(response);
});

server.listen(port, () => {
    console.log(`Employee app running at http://localhost:${port}`);
});
