"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = require("./Config");
const jwt = require("jsonwebtoken");
class Utilities {
    static generateToken(usr) {
        let conf = config.getServerConfig();
        let secretKey = process.env.JWT || conf.jwtSecret;
        return jwt.sign({ staff_id: usr.staff_id }, secretKey, { algorithm: 'HS256', expiresIn: conf.jwtExpiration });
        //return jwt.sign({ _id: usr._id, userName: usr.userName, fullName: usr.fullName, isAdmin: usr.isAdmin }, secretKey, { algorithm: 'HS256', expiresIn: '5s' });
    }
}
exports.default = Utilities;
//# sourceMappingURL=Util.js.map