"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const hapi_decorators_1 = require("hapi-decorators");
const joi = require("joi");
let FilmController = class FilmController {
    fetchById(request, reply) {
        return reply(request.params["id"]);
    }
};
__decorate([
    hapi_decorators_1.config({
        tags: ["api", "films"],
        description: "Use this method to find a film by id",
        notes: "this method return a film json object",
        validate: {
            params: {
                id: joi.number()
                    .integer()
                    .required()
                    .description("if of the film")
                    .example("12")
            }
        }
    }),
    hapi_decorators_1.get("/{id}")
], FilmController.prototype, "fetchById", null);
FilmController = __decorate([
    hapi_decorators_1.controller("/api/films")
], FilmController);
exports.default = FilmController;
//# sourceMappingURL=controller.js.map