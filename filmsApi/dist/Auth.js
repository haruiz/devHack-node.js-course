"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("./models");
function validate(decoded, request, cb) {
    new models_1.User({
        staff_id: decoded.staff_id
    })
        .fetch()
        .then((usr) => {
        return cb(null, usr != null);
    });
}
exports.default = validate;
//# sourceMappingURL=Auth.js.map