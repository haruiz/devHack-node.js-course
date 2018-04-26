import bookshelf from "./../Database";

export class Film  extends bookshelf.Model<any>{
    idAttribute  = "film_id";
   get tableName(){ return "film"; }
   actors=()=> {
    return this.belongsToMany(Actor).through(Staff,"film_id","film_id");
   }
}

export class Actor  extends bookshelf.Model<any>{
    idAttribute  = "actor_id";
    get tableName(){ return "actor"; }
    films=()=> {
        return this.belongsToMany(Film).through(Staff,"actor_id","actor_id");
    }
 }

 export class Staff  extends bookshelf.Model<any>{
    get tableName(){ return "film_actor"; }
 }

 export class Country  extends bookshelf.Model<any>{
     idAttribute  = "country_id";
    get tableName(){ return "country"; }
 }
 

 export class User  extends bookshelf.Model<any>{
   get tableName(){ return "staff"; }
}
