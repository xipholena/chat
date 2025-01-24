import { CreateMessagesEntity1737717235560 } from "src/migrations/1737717235560-CreateMessagesEntity";
import { DataSource } from "typeorm";

export default new DataSource({ 
    type: 'postgres', 
    host: 'localhost', 
    port: 5432, 
    username: 'admin', 
    password: '123456', 
    database: 'nest', 
    entities: [], 
    migrations: [
        CreateMessagesEntity1737717235560
    ], 
});
    