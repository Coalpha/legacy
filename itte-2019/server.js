const koa        = require("koa");
const koa_static = require("koa-static");
const koa_logger = require("koa-logger");

const app = new koa;

const root_static = koa_static(".");
const logger      = koa_logger();
app.use(root_static);
app.use(logger);

const port        = 8080;
const http_server = app.listen(port);
console.log(`Up and running on port ${port}`)

if (require("is-wsl")) {
   // fix for https://github.com/microsoft/WSL/issues/4340
   http_server.keepAliveTimeout = 0;
   console.log("Applying fix for WSL2's TCP keep alive issue");
}
