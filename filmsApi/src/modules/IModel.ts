export default interface IModel<T>{
    fetchAll(usr?:any) : Promise<any>;
    save(model : T) : Promise<any>;
    update(model : T) : Promise<any>;
    deleteById( id: string,usr?:any) : Promise<any>;
    findById(id: string,usr?:any) : Promise<any>;
}