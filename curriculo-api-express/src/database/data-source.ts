import { Education } from "@modules/curriculum/entities/Education";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "docker",
    password: "docker",
    database: "curriculo_db",
    synchronize: true,
    logging: true,
    entities: [Education, ],
    //subscribers: [],
    migrations: ["./src/database/migrations/*ts"],
});