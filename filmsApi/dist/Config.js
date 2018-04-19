"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nconf = require("nconf");
const path = require("path");
const configProvider = new nconf.Provider({
    env: true,
    argv: true,
    store: {
        type: "file",
        file: path.join(__dirname, `./../config/config.${process.env.NODE_ENV || "dev"}.json`)
    }
});
function getServerConfig() { return configProvider.get("server"); }
exports.getServerConfig = getServerConfig;
function getDatabaseConfig() { return configProvider.get("database"); }
exports.getDatabaseConfig = getDatabaseConfig;
//# sourceMappingURL=Config.js.map