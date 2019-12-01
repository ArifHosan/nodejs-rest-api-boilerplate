const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    req.crudApiRouter.list(req,res,next);
});
router.get('/filter',  (req, res, next) => {
    req.crudApiRouter.filter(req,res,next);
});
router.get('/:id',  (req, res, next) => {
    req.crudApiRouter.get(req,res,next);
});
router.post('/',  (req, res, next) => {
    req.crudApiRouter.post(req,res,next);
});
router.delete('/:id',  (req, res, next) => {
    req.crudApiRouter.delete(req,res,next);
});
router.patch('/:id',  (req, res, next) => {
    req.crudApiRouter.patch(req,res,next);
});

module.exports = router;