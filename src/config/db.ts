import 'dotenv/config';
import { DataSource } from 'typeorm';
import { User } from '../database/entities/User';

export const connect = new DataSource({
    type: 'postgres',
    url: process.env.DATABASE_URL,
    entities: [User],
});
