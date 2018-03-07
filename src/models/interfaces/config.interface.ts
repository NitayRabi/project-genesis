import { IConnection } from './connection.interface';
import { ConnectionOptions } from 'typeorm/connection/ConnectionOptions';

export interface IAppConfig {
    connection: IConnection;
    db: ConnectionOptions;
}