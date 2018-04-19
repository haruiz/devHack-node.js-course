import * as nconf from "nconf";
import * as path from "path";

const configProvider = new nconf.Provider(<nconf.IOptions>{
    env: true,
    argv: true,
    store:{
        type: "file",
        file: path.join(__dirname,`./../config/config.${process.env.NODE_ENV || "dev"}.json`)
    }
});

export interface IServerConfig{
    port: number;
    host: string;
}

export interface IDatabaseConfig{
}


export function getServerConfig(): IServerConfig { return configProvider.get("server");}

export function getDatabaseConfig(): IDatabaseConfig { return configProvider.get("database");}