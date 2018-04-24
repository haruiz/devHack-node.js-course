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
    jwtSecret: string;
    jwtExpiration: string;
}

export interface IDatabaseConfig{
    port: number;
    db: string;
    host: string;
    provider: string;
    user: string;
    password: string;
    charset: string;
}


export function getServerConfig(): IServerConfig { return configProvider.get("server");}

export function getDatabaseConfig(): IDatabaseConfig { return configProvider.get("database");}