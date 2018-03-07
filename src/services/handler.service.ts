import { Request, Response, NextFunction } from 'express';
import { GenericResponse, ForbiddenError } from '../models/';

class HandlerService {

    genericResponseHandler = (data: any, req: Request, res: Response, next: NextFunction) => {
        if (!data) {
            return res.status(204).send(new GenericResponse('Empty response'));
        }
        const statusCode = data instanceof Error ? this.getErrorCode(data) : 200;
        return res.status(statusCode).send(new GenericResponse(data));
    };

    private getErrorCode(err: Error): number {
        switch (true) {
            case err instanceof ForbiddenError:
                return 403;
            default:
                return 500;
        }
    }
}

export const handlerService = new HandlerService();