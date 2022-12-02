import { Partido, Equipo, Jugador } from "../src/types.ts";
import { ObjectId } from "https://deno.land/x/mongo@v0.31.1/mod.ts";

export type PartidoSchema = Omit<Partido, "id" | "cambios" | "eq1" | "eq2" | "titularesEq1" | "titularesEq2"> & {
    _id: ObjectId;
    eq1: ObjectId;
    eq2: ObjectId;
    titularesEq1: ObjectId[];
    titularesEq2: ObjectId[];
    cambios: Array<{
        in: ObjectId;
        out: ObjectId;
        minuto: ObjectId;
    }>;
};
export type EquipoSchema = Omit<Equipo, "id" | "golesFavor" | "golesContra" | "puntos" | "partidos" | "jugadores"> & {
    _id: ObjectId;
};

export type JugadorSchema = Omit<Jugador, "id"| "equipo"> & {
    _id: ObjectId;
    equipo: ObjectId;
};