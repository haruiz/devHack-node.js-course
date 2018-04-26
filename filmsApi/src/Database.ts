import { IDatabaseConfig, getDatabaseConfig } from "./Config";
import * as Knex from "knex";
import  * as Bookshelf from "bookshelf";

let config : IDatabaseConfig = getDatabaseConfig();
let knex : Knex = Knex({
        client : config.provider,
        connection: {
            host: config.host,
            user: config.user,
            password: config.password,
            database: config.db,
    charset: config.charset
}
});

let orm = Bookshelf(knex); export default orm;//export bookshelf instance

