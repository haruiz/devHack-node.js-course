import bookshelf from "./../Database";

export class Film  extends bookshelf.Model<any>{
   get tableName(){ return "film"; }
}

export class Actor  extends bookshelf.Model<any>{
    get tableName(){ return "actor"; }
 }

 export class Country  extends bookshelf.Model<any>{
     idAttribute  = "country_id";
    get tableName(){ return "country"; }
 }
 

 export class User  extends bookshelf.Model<any>{
   get tableName(){ return "staff"; }
}
