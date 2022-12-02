import { gql } from 'https://deno.land/x/graphql_tag@0.0.1/mod.ts';


export const typeDefs = gql `
type Cambio {
    in: Jugador!
    out: Jugador!
    equipo: Equipo!
    minuto: Int!
}

type Jugador {
    id: ID,
    nombre: String!
    equipo: Equipo!
    dorsal: Int!
}

type Equipo {
    id: ID!
    name: String!
    jugadores: [Jugador!]!
    golesFavor: Int!
    golesContra: Int!
    puntos: Int!
    eliminado: Boolean!
    partidos: [Partido!]!
}

type Partido {
    id: ID!,
    equipo1: Equipo!
    equipo2: Equipo!
    golesEq1: Int!
    golesEq2: Int!
    status: Status!
    minuto: Int
    titularesEq1: [Jugador!]
    titularesEq2: [Jugador!]
    cambios: [Cambio!]!
}

enum Status {
    NOT_STARTED
    PLAYING
    FINISHED
}

type Query {
    getPartido(id:ID!):Partido!
    getPartidos(status: Status, equipo: ID!): [Partido!]!
    getJugador(id: ID!): Jugador!
    getEquipo(id: ID!): Equipo!
    getEquipos(eliminado: Boolean, puntos: Int): [Equipo!]!
}
`