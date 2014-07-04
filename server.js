"use strict";

var Hapi = require("hapi"),
    server = new Hapi.Server('0.0.0.0', 80);

server.route({
    path: "/",
    method: "GET",
    handler: function (req, reply) {
        reply("Hello World");
    }
});
server.start();