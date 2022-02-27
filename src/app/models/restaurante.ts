export class Restaurante{
    constructor (
    public _id: string,
    public nombre: string,
    public ubicacion:string,
    public tipo:string,
    public likes:number,
    public descripcion:string,
    public comentarios:string[],
    public foto:string
    ){}
}