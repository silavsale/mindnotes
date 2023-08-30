import { DataSource } from 'typeorm';
import dotenv from 'dotenv';
dotenv.config();
console.log('process.env.POSTGRES_URL', process.env.POSTGRES_URL);
export default new DataSource({
    type: 'postgres',
    url: process.env.POSTGRES_URL,
});
