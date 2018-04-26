import * as hapi from "hapi";
import { Controller, 
    controller, 
    get,
    patch,
    put,
    config,     
    post,
    route } from "hapi-decorators";
import * as boom from "boom";
import * as joi from "joi";
import {User, Country} from "./../../models";
import {Model } from "bookshelf";
import status =  require("hapi-status");
import { method } from "bluebird";
import  Utilities from "./../../Util";
@controller("/api/users")
export default class UserController implements Controller{
    baseUrl: string;
    routes: ()=> hapi.IRouteConfiguration[];


    
    @config({
        auth: false,
        tags: ["api","users"],
        description: "Use this method to generate a token",
        notes: "this method return un token",
        validate:{
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
    })
    @post("/auth")
    auth(request: hapi.Request, reply: hapi.IReply){
        new User(request.payload)
            .fetch()
            .then((usr : Model<any>) => reply(usr ? Utilities.generateToken(usr): boom.forbidden()))
            .catch(err=> reply(boom.expectationFailed(err.message)))
    }
   


}