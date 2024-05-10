const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/studentsApi', {

}).then(()=>{
    console.log('success');
}).catch((e)=>{
    console.log('no connection');
}); 
