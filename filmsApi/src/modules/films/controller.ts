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
import {Film, Country} from "./../../models";
import {Model } from "bookshelf";
import status =  require("hapi-status");
import { method } from "bluebird";
@controller("/api/films")
export default class FilmController implements Controller{
    baseUrl: string;
    routes: ()=> hapi.IRouteConfiguration[];

    @config({
        tags: ["api","films"],
        description: "Use this method to find a film by id",
        notes: "this method return a film json object",
        validate:{
            params:{
                id : joi.number()
                        .integer()
                            .required()
                            .description("if of the film")
                                .example("12")
            }
        }
    })
    @get("/{id}")
    fetchById(request: hapi.Request, reply: hapi.IReply){
        new Film({ film_id: request.params["id"] })
        .fetch()
        .then((model : Model<any>) => reply(model ? model.toJSON() : status.noContent(reply, "Film not found")))
        .catch(err => reply(boom.notFound(err.message)));
    }

    @config({
        tags: ["api","films"],
        description: "Use this method to save a film",
        notes: "this method return the film just recorded",
        validate:{
            payload: joi.object({
               country: joi.string().required(),

            }).label("payload")
        },
        plugins: {
            'hapi-swagger': {
                payloadType: 'form'
            }
        }
    })
    @post("/")
    save(request: hapi.Request, reply: hapi.IReply){
        new Country(request.payload)
        .save()
        .then((model : Model<any>) => reply(model ? model.toJSON() : boom.notFound()))
        .catch(err => reply(boom.notFound(err.message)));
    }

    @config({
        tags: ["api","films"],
        description: "Use this method to delete a film",
        notes: "this method return the film just deleted",
        validate:{
            params: {
                id: joi.number().integer().required(),
            }
        },
        plugins: {
            'hapi-swagger': {
                payloadType: 'form'
            }
        }
    })
    @route("delete","/{id}")
    deleteById(request: hapi.Request, reply: hapi.IReply){

        new Country({ id: request.params["id"]})
        .destroy()
        .then((model : Model<any>) => reply(model ? model.toJSON() : boom.notFound()))
        .catch(err => reply(boom.notFound(err.message)));
    }

    @config({
        tags: ["api","films"],
        description: "Use this method to fetch all the films",
        notes: "this method return the list of films"
    })
    @get("/")
    fetchAll(request: hapi.Request, reply: hapi.IReply){
        Film.fetchAll()
            .then((result)=> reply(result.toArray()));  
        
    }



}