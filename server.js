var Vertx = require("vertx-js/vertx");
var Router = require("vertx-apex-js/router");
var StaticHandler = require("vertx-apex-js/static_handler");

var React = require("./webroot/libs/react");
var HelloWorld = require("./webroot/hello-world");

var vertx = Vertx.vertx();
var router = Router.router(vertx);
var server = vertx.createHttpServer();


router.route("/assets/*").handler(StaticHandler.create().handle);

router.get("/index").handler(function (context) {
	context.response().sendFile("index.html");
	console.log(React.renderToStaticMarkup(HelloWorld));
});

server.requestHandler(router.accept).listen(9000);
