import {User} from "./models";
import { Model } from "bookshelf";

export default function validate(decoded, request, cb ){
    new User({
        staff_id: decoded.staff_id
    })
    .fetch()
    .then((usr: Model<any>) =>{
        return cb(null, usr != null );
    })
}