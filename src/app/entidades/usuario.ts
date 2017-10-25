export class Usuario
{ 
    public nombre:string;
    public password:string = "_123456";
    public mail:string;

    public fechaDeIngreso:Date;
    // public mensaje:string = "_Soy el mas perron aqui.";
    public historial:Array<any>;        //any o juego, o historial.
    
    constructor()
    {
        this.fechaDeIngreso = new Date();


    }      

    toString()
    {}
}