"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const hapi_decorators_1 = require("hapi-decorators");
const boom = require("boom");
const joi = require("joi");
const models_1 = require("./../../models");
const status = require("hapi-status");
let FilmController = class FilmController {
    fetchById(request, reply) {
        new models_1.Film({ film_id: request.params["id"] })
            .fetch()
            .then((model) => reply(model ? model.toJSON() : status.noContent(reply, "Film not found")))
            .catch(err => reply(boom.notFound(err.message)));
    }
    save(request, reply) {
        new models_1.Country(request.payload)
            .save()
            .then((model) => reply(model ? model.toJSON() : boom.notFound()))
            .catch(err => reply(boom.notFound(err.message)));
    }
    deleteById(request, reply) {
        new models_1.Country({ id: request.params["id"] })
            .destroy()
            .then((model) => reply(model ? model.toJSON() : boom.notFound()))
            .catch(err => reply(boom.notFound(err.message)));
    }
    fetchAll(request, reply) {
        let userAuthenticated = request.auth.credentials;
        console.log(userAuthenticated);
        if (userAuthenticated.active == 1) {
            models_1.Film
                .fetchAll()
                .then((result) => reply(result.toArray()));
        }
        else {
            return reply(boom.methodNotAllowed("user inactive"));
        }
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
__decorate([
    hapi_decorators_1.config({
        tags: ["api", "films"],
        description: "Use this method to save a film",
        notes: "this method return the film just recorded",
        validate: {
            payload: joi.object({
                country: joi.string().required(),
                file: joi.any()
                    .meta({ swaggerType: 'file' })
                    .description('json file')
            }).label("payload")
        },
        plugins: {
            'hapi-swagger': {
                payloadType: 'form'
            }
        }
    }),
    hapi_decorators_1.post("/")
], FilmController.prototype, "save", null);
__decorate([
    hapi_decorators_1.config({
        tags: ["api", "films"],
        description: "Use this method to delete a film",
        notes: "this method return the film just deleted",
        validate: {
            params: {
                id: joi.number().integer().required(),
            }
        },
        plugins: {
            'hapi-swagger': {
                payloadType: 'form'
            }
        }
    }),
    hapi_decorators_1.route("delete", "/{id}")
], FilmController.prototype, "deleteById", null);
__decorate([
    hapi_decorators_1.config({
        tags: ["api", "films"],
        description: "Use this method to fetch all the films",
        notes: "this method return the list of films"
    }),
    hapi_decorators_1.get("/")
], FilmController.prototype, "fetchAll", null);
FilmController = __decorate([
    hapi_decorators_1.controller("/api/films")
], FilmController);
exports.default = FilmController;
//# sourceMappingURL=controller.js.map