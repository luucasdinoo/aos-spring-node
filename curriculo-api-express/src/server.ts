import { AppDataSource } from "@database/data-source";
import "dotenv/config";
import "@shared/container";
import express from "express";
import { routes } from "routes";

const app = express();

app.use(express.json());

app.use(routes);

const PORT = process.env.PORT || 8080;

AppDataSource.initialize()
    .then(async () => {
        console.log("DATABASE OK!!");
        app.listen(PORT, () => console.log(`System running in port ${PORT}`));
    }
);

