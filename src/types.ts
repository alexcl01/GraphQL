export type Cambio = {
    in: Jugador,
    out: Jugador,
    equipo: Equipo,
    minuto: number
};
  
export type Jugador = {
    id: string,
    nombre: string,
    equipo: Equipo,
    dorsal: number
}; 

export type Equipo = {
    id: string,
    name: string
    jugadores: Jugador[],
    golesFavor: number,
    golesContra: number,
    puntos: number,
    eliminado: boolean,
    partidos: Partido[]
}; 

export type Partido = {
    id: string,
    equipo1: Equipo,
    equipo2: Equipo,
    golesEq1: number,
    golesEq2: number,
    status: Status,
    minuto: number,
    titularesEq1: Jugador[],
    titularesEq2: Jugador[],
    cambios: Cambio[]
}; 

export enum Status {
    NOT_STARTED = "NOT_STARTED",
    PLAYING = "PLAYING",
    FINISHED = "FINISHED",
}