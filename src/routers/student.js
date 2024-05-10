const express = require('express');
const router = new express.Router();
const Student = require('../models/students');

module.exports = router;



router.post('/students', async (req, res) => {

    try {
        const user = new Student(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);

    } catch (e) {
        res.status(400).send(e);
    }
});

// {
//     "name": "vinod",
//     "email": "thapa@gmail.com",
//     "phone" : "1231231234",
//     "address": "pune"
// }

router.get('/students', async (req, res) => {
    try {
        const studentsData = await Student.find();
        res.send(studentsData);
    } catch (e) {
        res.send(e);
    }
})

router.get('/students/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        //  res.send(req.params.id);
        const studentsData = await Student.findById({ _id });
        console.log(studentsData)
        if (!studentsData) {
            return res.status(404).send();
        } else {
            res.send(studentsData)
        }

    } catch (e) {
        res.status(500).send(e);
    }
})

router.patch('/students/:id', async (req, res) => {
    try {
        const _id = req.params.id;

        const updateStudent = await Student.findByIdAndUpdate(_id, req.body, {
            new: true
        });
        // console.log()
        res.send(updateStudent);
        // if (!studentsData) {
        //     return res.status(404).send();
        // }     
    } catch (e) {
        res.status(404).send(e);
    }
})

router.delete('/students/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const deleteStudent = await Student.findByIdAndDelete(_id)
        if (!_id) {
            return res.status(404).send();
        }
         res.send(deleteStudent);
    } catch (e) {
        res.status(500).send(e);
    }
})

