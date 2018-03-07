import { NextFunction, Response } from 'express';
import { BaseEntity } from 'typeorm';
import { ICustomRequest } from '../interfaces';

/**
 * This controller is the general abstract to be used with an TypeOrm Model
 */
export abstract class CrudController {

    constructor(private model: typeof BaseEntity){}

    /**
     * Get all `models`'s DB instances
     * @param {ICustomRequest} req
     * @param {e.Response} res
     * @param {e.NextFunction} next
     * @returns {Promise<void>}
     */
    getAll = async (req: ICustomRequest, res: Response, next: NextFunction) => {
        try {
            const data = await this.model.find();
            next(data);
        } catch (err) {
            next(err);
        }
    };

    /**
     * This route relays on params or query(id) or body id
     * @param {ICustomRequest} req
     * @param {e.Response} res
     * @param {e.NextFunction} next
     * @returns {Promise<void>}
     */
    getById = async (req: ICustomRequest, res: Response, next: NextFunction) => {
        try {
            const pk = req.custom ? req.custom.pk || 'id': 'id';
            const id = req.params[pk] || req.query[pk] || req.body[pk];
            const data = await this.model.findOneById(id);
            next(data);
        } catch (err) {
            next(err);
        }
    };

    /**
     * Query DB
     * @param {ICustomRequest} req
     * @param {e.Response} res
     * @param {e.NextFunction} next
     * @returns {Promise<void>}
     */
    query = async (req: ICustomRequest, res: Response, next: NextFunction) => {
        try {
            const query = req.body || req.params;
            const data = await this.model.find(query);
            next(data);
        } catch (err) {
            next(err);
        }
    };

    /**
     * Create a new entity - uses request body.
     * @param {ICustomRequest} req
     * @param {e.Response} res
     * @param {e.NextFunction} next
     * @returns {Promise<void>}
     */
    create = async (req: ICustomRequest, res: Response, next: NextFunction) => {
        try {
            const entity = req.body;
            const data = await this.model.create(entity).save();
            next(data);
        } catch (err) {
            next(err);
        }
    };

    /**
     * Update an entity (based on PUT and request.body)
     * @param {ICustomRequest} req
     * @param {e.Response} res
     * @param {e.NextFunction} next
     * @returns {Promise<void>}
     */
    update = async (req: ICustomRequest, res: Response, next: NextFunction) => {
        try {
            const pk = req.custom ? req.custom.pk || 'id': 'id';
            const entity = req.body;
            const id = entity[pk];
            const data = await this.model.updateById(id, entity);
            next(data || {});
        } catch (err) {
            next(err);
        }
    };

    /**
     * Delete an entity by it's given id
     * This route relays on params or query(id) or body id
     * @param {ICustomRequest} req
     * @param {e.Response} res
     * @param {e.NextFunction} next
     * @returns {Promise<void>}
     */
    deleteById = async (req: ICustomRequest, res: Response, next: NextFunction) => {
        try {
            const pk = req.custom ? req.custom.pk || 'id': 'id';
            const id = req.params[pk] || req.query[pk] || req.body[pk];
            const data = await this.model.removeById(id);
            next(data || {});
        } catch (err) {
            next(err);
        }
    };
}