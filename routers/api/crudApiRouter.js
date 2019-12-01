const express = require('express');
const router = express.Router();

module.exports = (model) => {
    return {
        list: (req, res, next) => {
            model.findAll().then((data) => {
                res.status(200).json(data);
            }).catch((err) => {
                console.log(err);
                res.status(500).json({message: "unable to list data"});
            });
        },
        get: (req, res, next) => {
            model.findByPk(req.params.id).then((data) => {
                res.status(200).json(data);
            }).catch((err) => {
                console.log(err);
                res.status(500).json({message: "unable to get data"});
            })
        },
        post: (req, res, next) => {
            model.create(req.body).then((response)=> {
                model.findByPk(response.id).then((data) => {
                    res.status(201).json(data);
                }).catch((err)=> {
                    console.log(err);
                    res.status(500).json({message: "unable to get data"});
                });
            }).catch((err) => {
                console.log(err);
                res.status(500).json({message: "unable to create data"});
            })
        },
        delete: (req, res, next) => {
            model.destroy({
                where: {id: req.params.id}
            }).then((data) => {
                if(data > 0)
                    res.status(200).send(data +` entry deleted`);
                else res.status(200).send(`No entry Found`);
            }).catch((err)=> {
                console.log(err);
                res.status(500).json({message: "unable to delete data"});
            })
        },
        patch: (req, res, next) => {
            model.update(req.body, {where: {id: req.params.id}}).then((resp) => {
                if(resp && resp[0] > 0) {
                    model.findByPk(req.params.id).then((data) => {
                        res.status(201).json(data);
                    }).catch((err)=> {
                        console.log(err);
                        res.status(500).json({message: "unable to get data"});
                    })
                }
                else {
                    res.status(404).send("Not Found");
                }
            }).catch((err)=> {
                console.log(err);
                res.status(500).json({message: "unable to update data"});
            });
        },
        filter: (req, res, next) => {
            model.findAll({
                where: req.query
            }).then((data) => {
                res.status(200).json(data);
            }).catch((err) => {
                console.log(err);
                res.status(500).json({message: "unable to filter data"});
            });
        }
    }
};