const mongoose = require('mongoose');
const validator = require('validator');

// Set up default mongoose connection
const mongoDBUrl = 'mongodb://localhost:27017/your-database-name'; // Replace with your actual database name
mongoose.connect(mongoDBUrl, {

  useUnifiedTopology: true,
 
});

// Get the default connection
const db = mongoose.connection;

// Event handlers for successful connection and error
db.on('connected', () => {
  console.log('Connected to MongoDB');
});

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

// Define the schema for the "Student" collection
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (value) => validator.isEmail(value),
      message: 'Invalid email format',
    },
  },
  phone: {
    type: Number,
    min: 1000000000,
    max: 9999999999,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: true,
  },
});

// Create the "Student" model
const Student = mongoose.model('Student', studentSchema);

// Example: Create a new student
const newStudent = new Student({
  name: 'John Doe',
  email: 'john@example.com',
  phone: 1234567890,
  address: '123 Main St',
});

newStudent.save()
  .then((savedStudent) => {
    console.log('Student saved:', savedStudent);
  })
  .catch((error) => {
    console.error('Error saving student:', error);
  });
