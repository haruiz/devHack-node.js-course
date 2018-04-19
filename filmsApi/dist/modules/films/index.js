"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = require("./controller");
function init(server, config) {
    server.route(new controller_1.default().routes());
}
exports.init = init;
//# sourceMappingURL=index.js.map