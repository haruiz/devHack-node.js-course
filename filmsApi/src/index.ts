import * as Config from "./Config";
import * as Server from "./Server";
import notifier = require("node-notifier");
(async function(){
 const server = await Server.init(Config.getServerConfig());
 notifier.notify(`the server is running at port ${server.info.port}`);
})();