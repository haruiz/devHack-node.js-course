import * as hapi from "hapi";
import { Controller, 
    controller, 
    get,
    config,     
    post,
    route } from "hapi-decorators";
import * as boom from "boom";
import * as joi from "joi";

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
        return reply(request.params["id"]);
    }

}