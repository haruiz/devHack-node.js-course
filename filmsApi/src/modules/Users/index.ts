import * as hapi from "hapi";
import {IServerConfig} from "./../../Config";
import UserController from "./controller";

export function init(server : hapi.Server, config: IServerConfig){
    server.route(new UserController().routes());
}