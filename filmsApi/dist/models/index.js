"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Database_1 = require("./../Database");
class Film extends Database_1.default.Model {
    constructor() {
        super(...arguments);
        this.idAttribute = "film_id";
        this.actors = () => {
            return this.belongsToMany(Actor).through(Staff, "film_id", "film_id");
        };
    }
    get tableName() { return "film"; }
}
exports.Film = Film;
class Actor extends Database_1.default.Model {
    constructor() {
        super(...arguments);
        this.idAttribute = "actor_id";
        this.films = () => {
            return this.belongsToMany(Film).through(Staff, "actor_id", "actor_id");
        };
    }
    get tableName() { return "actor"; }
}
exports.Actor = Actor;
class Staff extends Database_1.default.Model {
    get tableName() { return "film_actor"; }
}
exports.Staff = Staff;
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