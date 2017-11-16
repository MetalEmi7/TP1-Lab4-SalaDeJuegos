export class Juego
{ 
    public jugador:string;
    public nombreJuego:string = "_Juego";
    public descripcion:string = "_Un juego para jugar";
    public mensaje:string = "Esperando...";
    public resultado:boolean = false;
    public puntajeTotal:number;

    //las siguientes variables deben ser modificadas en el componente que instancia esta clase.
    public juega:boolean = false;
    public FechaYHora:Date = new Date();

    
    constructor(jug: string, nomJuego: string, desc:string, mens:string)
    {
        this.jugador = jug;
        this.nombreJuego = nomJuego;
        this.descripcion = desc;
        this.mensaje = mens;
        this.juega = false;
    }  
    

    toString()
    {
        return "[Juego]: "+this.nombreJuego+" [Jugador]: "+ this.jugador +" - "+ this.FechaYHora.toLocaleDateString() +" - "+ this.FechaYHora.toLocaleTimeString() +" - "+ this.resultado+ " - "+ this.puntajeTotal;
    }
}