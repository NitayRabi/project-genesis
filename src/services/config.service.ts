import * as config from 'config';
//
import { IAppConfig } from '../models/interfaces';

class ConfigService {
    get config(): IAppConfig {
        return config.get('config');
    }
}

export const configService = new ConfigService();