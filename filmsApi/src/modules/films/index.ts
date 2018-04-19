import * as hapi from "hapi";
import {IServerConfig} from "./../../Config";
import FilmController from "./controller";

export function init(server : hapi.Server, config: IServerConfig){
    server.route(new FilmController().routes());
}