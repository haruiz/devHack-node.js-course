"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Database_1 = require("./../Database");
class Film extends Database_1.default.Model {
    get tableName() { return "film"; }
}
exports.Film = Film;
class Actor extends Database_1.default.Model {
    get tableName() { return "actor"; }
}
exports.Actor = Actor;
class Country extends Database_1.default.Model {
    constructor() {
        super(...arguments);
        this.idAttribute = "country_id";
    }
    get tableName() { return "country"; }
}
exports.Country = Country;
class User extends Database_1.default.Model {
    get tableName() { return "staff"; }
}
exports.User = User;
//# sourceMappingURL=index.js.map