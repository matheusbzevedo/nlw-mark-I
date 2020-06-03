import express from 'express';
import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router(),
    pointsController = new PointsController(),
    itemsController = new ItemsController();

routes
.get('/items', itemsController.index)
.post('/points', pointsController.create)
.get('/points', pointsController.index)
.get('/points/:id', pointsController.show);

export default routes;