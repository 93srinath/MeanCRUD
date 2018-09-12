const express = require('express')
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Employee } = require('../model/employee');

// retrive data from the db
// localhost:3000/employees/
router.get('/',
    (req, res) => {        // request and response
        Employee.find((err, docs) => {   //get all the records from the employee collection to docs
            if (!err) {
                res.send(docs);     //send the retrived data as docs
            } else {
                console.log('Error in retriving Employee details' + JSON.stringify(err, undefined, 2))
            }
        });
    }
);

// retrive specific data from the db
// localhost:3000/employees/:id
router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).send('No record with the given Id ${req.params.id}');
    }

    Employee.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            console.log("Error in Retriving the Employee Details :/n" + JSON.stringify(err, undefined, 2))
        }
    });
}
);

// insert data into the db
// localhost:3000/employees/
router.post('/', (req, res) => {
    var emp = new Employee({
        email: req.body.email,
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary,
    });
    emp.save((err, doc) => {
        if (!err) {
            res.send(doc);
            console.log(doc);
        } else {
            console.log("Operation Failed : " + JSON.stringify(err, undefined, 2));
        }
    })
});


// update a specific data
// localhost:3000/employees/:id
router.put('/:id', (req, res) => {
    /*   if (!ObjectId.isValid(req.body.id)) {
           return res.status(400).send('No record with the given Id ${req.params.id}');
       }*/

    var emp = {
        email: req.body.email,
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        //salary : req.body.salary,
    };

    Employee.findByIdAndUpdate(req.params.id, { $set: emp }, (err, docs) => {
        if (!err) {
            res.send(docs);
            console.log(docs);
        } else {
            console.log('Error in Updating the Employee details' + JSON.stringify(err, undefined, 2))
        }
    });
});


// delete a specific data
// localhost:3000/employees/:id
router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).send('No record with the given Id ${req.params.id}');
    }

    Employee.findByIdAndRemove(req.params.id, (err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            console.log('Error in Deleting the Employee details' + JSON.stringify(err, undefined, 2))
        }
    });
});
module.exports = router;