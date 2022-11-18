import { ApolloServer } from "npm:@apollo/server@^4.1";
import { startStandaloneServer } from "npm:@apollo/server@^4.1/standalone";
import { graphql } from "npm:graphql@^16.6";


type Car = {
    plate: string,
    brand: string,
    seats?: number
}

let cars: Car[] = [{
    plate: "1234DHL",
    brand: "Seat",
    seats: 4
}, {
    plate: "321DLH", brand: "Renault", seats: 4
},
];

// definimos el schema de graphql

// type Query define las funciones que nos devuelven cosas

// getCars siempre devuelve un array, y en ese array siempre son coches (o vacío)

const typeDefs = `
    type Car {
        plate: String!
        brand: String!
        seats: Int
    }

    type Query {
        test: String!
        getCar(plate: String!): Car
        getCars (seats: Int): [Car!]!
    }

    type Mutation {
        addCar(brand: String!, plate: String!, seats: Int): Car!
        deleteCar(plate: String!): Car!
    }
`

// llama a las funciones de typeDefs
const resolvers = {
    Query: {
        test: (): string => "Funciona",
        getCars: (_:unknown, args: {seats?: number}): Car[] => {
            if(args.seats) {
                return cars.filter(car => car.seats! >= args.seats!) 
            } else {
                return cars;
            }
        },
        getCar: (_:unknown, args: {plate: string}): Car|undefined => {
            const car = cars.find(car => car.plate === args.plate);
            return car;
        }
    },

    Mutation: {

    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const { url } = await startStandaloneServer(server, {
    listen: { port: 8000 },
});

console.log(`Server running on: ${url}`);