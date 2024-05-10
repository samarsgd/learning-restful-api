const express = require('express');
require('./db/conn');
const Student = require('./models/students');
const studentRouter = require('./routers/student');
const router = require('./routers/student');
const app = express();

const port = process.env.PORT || 3000;


// routing
// app.get('/', (req, res)=> {
//     res.send('index');
// })
app.use(express.json());

app.use(studentRouter);

// app.post('/students', async (req, res) => {

//     try {
//         const user = new Student(req.body);
//         const createUser = await user.save();
//         res.status(201).send(createUser);

//     } catch (e) {
//         res.status(400).send(e);
//     }
// });

// {
//     "name": "vinod",
//     "email": "thapa@gmail.com",
//     "phone" : "1231231234",
//     "address": "pune"
// }

// app.get('/students', async (req, res) => {
//     try {
//         const studentsData = await Student.find();
//         res.send(studentsData);
//     } catch (e) {
//         res.send(e);
//     }
// })

// app.get('/students/:id', async (req, res) => {
//     try {
//         const _id = req.params.id;
//         //  res.send(req.params.id);
//         const studentsData = await Student.findById({ _id });
//         console.log(studentsData)
//         if (!studentsData) {
//             return res.status(404).send();
//         } else {
//             res.send(studentsData)
//         }

//     } catch (e) {
//         res.status(500).send(e);
//     }
// })

// app.patch('/students/:id', async (req, res) => {
//     try {
//         const _id = req.params.id;

//         const updateStudent = await Student.findByIdAndUpdate(_id, req.body, {
//             new: true
//         });
//         // console.log()
//         res.send(updateStudent);
//         // if (!studentsData) {
//         //     return res.status(404).send();
//         // }     
//     } catch (e) {
//         res.status(404).send(e);
//     }
// })

// app.delete('/students/:id', async (req, res) => {
//     try {
//         const _id = req.params.id;
//         const deleteStudent = await Student.findByIdAndDelete(_id)
//         if (!_id) {
//             return res.status(404).send();
//         }
//          res.send(deleteStudent);
//     } catch (e) {
//         res.status(500).send(e);
//     }
// })

app.listen(port, () => {
    console.log(`listen at ${port}`);
});