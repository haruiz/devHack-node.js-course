"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const hapi = require("hapi");
const path = require("path");
const util_1 = require("util");
const Swagger_1 = require("./Swagger");
const fs = require("fs");
const Auth_1 = require("./Auth");
const readDirAsync = util_1.promisify(fs.readdir);
function init(config) {
    return __awaiter(this, void 0, void 0, function* () {
        let server = new hapi.Server();
        server.connection({ port: config.port, host: config.host });
        yield server.register([
            require("inert"),
            require("vision"),
            require("blipp"),
            require("hapi-auth-jwt2"),
            {
                register: require("hapi-swagger"),
                options: Swagger_1.default
            }
        ]);
        server.auth.strategy("jwt", "jwt", {
            key: config.jwtSecret,
            validateFunc: Auth_1.default,
            verifyOptions: {
                algorithms: ['HS256']
            }
        });
        server.auth.default("jwt");
        server.route({
            config: {
                tags: ["api", "home"],
                description: "This is just a test",
                notes: "return a hello world message",
                plugins: {
                    "hapi-swagger": {
                        responseMessages: [
                            { code: 404, message: "Resource not found" }
                        ]
                    }
                }
            },
            path: "/api/test",
            method: "GET",
            handler: (request, reply) => {
                return reply("hello world");
            }
        });
        let modulesPath = path.join(__dirname, "modules");
        yield readDirAsync(modulesPath).then((files) => {
            files.forEach((value, index) => {
                let currentFile = path.join(modulesPath, value);
                if (fs.statSync(currentFile).isDirectory()) {
                    require(currentFile).init(server, config);
                }
            });
        });
        yield server.start();
        return server;
    });
}
exports.init = init;
//# sourceMappingURL=Server.js.map