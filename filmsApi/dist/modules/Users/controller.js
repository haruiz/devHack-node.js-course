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
const Util_1 = require("./../../Util");
let UserController = class UserController {
    auth(request, reply) {
        new models_1.User(request.payload)
            .fetch()
            .then((usr) => reply(usr ? Util_1.default.generateToken(usr) : boom.forbidden()))
            .catch(err => reply(boom.expectationFailed(err.message)));
    }
};
__decorate([
    hapi_decorators_1.config({
        auth: false,
        tags: ["api", "users"],
        description: "Use this method to save a film",
        notes: "this method return the film just recorded",
        validate: {
            payload: joi.object({
                userName: joi.string().required(),
                password: joi.string().required(),
            }).label("payload")
        },
        plugins: {
            'hapi-swagger': {
                payloadType: 'form'
            }
        }
    }),
    hapi_decorators_1.post("/auth")
], UserController.prototype, "auth", null);
UserController = __decorate([
    hapi_decorators_1.controller("/api/users")
], UserController);
exports.default = UserController;
//# sourceMappingURL=controller.js.map