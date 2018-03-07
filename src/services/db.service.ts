import { createConnection } from 'typeorm';
//
import { configService } from './config.service';
import { Schema } from '../entity';

class DbService {
    connection;
    config = configService.config.db;
    async connect(): Promise<void> {
        const connectionconfig = {
            ...this.config,
            entities: Schema
        };
        this.connection = await createConnection(connectionconfig);
    }
}

export const dbService = new DbService();