import * as config from "./Config";
import * as jwt from "jsonwebtoken";
export default class Utilities{
    public static generateToken(usr: any){
        let conf = config.getServerConfig();
        let secretKey = process.env.JWT || conf.jwtSecret;
        
        return jwt.sign({ 
            id: usr.get("staff_id") ,
            firstName: usr.get("first_name"),
            active: usr.get("active")
        }, secretKey, { algorithm: 'HS256', expiresIn: conf.jwtExpiration });
        //return jwt.sign({ _id: usr._id, userName: usr.userName, fullName: usr.fullName, isAdmin: usr.isAdmin }, secretKey, { algorithm: 'HS256', expiresIn: '5s' });
    }
}