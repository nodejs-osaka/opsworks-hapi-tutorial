"use strict";

var Hapi = require("hapi"),
    server = new Hapi.Server('0.0.0.0', 80),
    caterpillar = require("caterpillar"),
    logger = new caterpillar.Logger(),
    mkdirp = require("mkdirp"),
    fs = require("fs");

mkdirp.sync("./log");
logger.pipe(fs.createWriteStream("./log/server.log", {flags: "a"}));

server.ext('onRequest', function (req, next) {
    logger.log(new Date().toString(), req.path);
    next();
});

server.route({
    path: "/",
    method: "GET",
    handler: function (req, reply) {
        reply("Hello World");
    }
});
server.route({
    path: "/env",
    method: "GET",
    handler: function (req, reply) {
        reply(process.env);
    }
});
server.route({
    path: "/host",
    method: "GET",
    handler: function (req, reply) {
        reply(process.env.HOST_NAME);
    }
});
server.start();