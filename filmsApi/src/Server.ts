import * as hapi from "hapi";
import * as path from "path";
import * as moment from "moment";
import { promisify, format } from "util";
import { IDatabaseConfig, IServerConfig } from "./Config";
import Swagger from "./Swagger";
import * as fs from "fs";
import validateFunc from "./Auth";
const readDirAsync = promisify(fs.readdir);

export async function init(config: IServerConfig) : Promise<hapi.Server>{
    
    let server = new hapi.Server();
    server.connection({ port: config.port, host: config.host });    
    
    await server.register([
        require("inert"),
        require("vision"),
        require("blipp"),
        require("hapi-auth-jwt2"),
        {
       register: require("hapi-swagger"),
       options: Swagger
    }]);

    server.auth.strategy("jwt", "jwt", {
        key: config.jwtSecret,
        validateFunc:validateFunc,
        verifyOptions:{
            algorithms: ['HS256'] 
        }
    });

    server.auth.default("jwt");

    server.route(<hapi.IRouteConfiguration>{
                config:{
                tags: ["api","home"],
                description: "This is just a test",
                notes: "return a hello world message",
                plugins:{
                    "hapi-swagger":{
                        responseMessages: [
                            { code: 404, message: "Resource not found"}
                        ]
                    }
                }
            },
            path: "/api/test",
            method: "GET",
            handler: (request: hapi.Request, reply: hapi.IReply)=>{
                return reply("hello world");
            }
    });

    let modulesPath : string = path.join(__dirname, "modules");
    await readDirAsync(modulesPath).then((files: string[])=>{
       files.forEach((value : string, index: number )=>{
           let currentFile = path.join(modulesPath, value); 
           if(fs.statSync(currentFile).isDirectory()){
               require(currentFile).init(server, config);
           }
       })
    });

    

    await server.start();
    return server;      
} 