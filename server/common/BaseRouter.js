import express from "express";
class BaseRouter {
    constructor(controller) {
        this.ctrl = controller;
        this.router = express.Router();
    }
    initializeRoutesCRUD() {
        this.router.get('/all',this.ctrl.getAllRecords);
        this.router.get('/:id',this.ctrl.getRecordById);
        this.router.post('/create', this.ctrl.createRecord);
        this.router.put('/:id',this.ctrl.updateRecord);
        this.router.delete('/:id',this.ctrl.deleteRecordById);
    }
    routers() {
        return this.router;
    }
}
export  default  BaseRouter;
