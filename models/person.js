const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator')
const url = process.env.MONGODB_URI;

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 3,
        unique: true
    },
    number: {
        type: Number,
        min: 8,
    }
});

personSchema.plugin(uniqueValidator);

personSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })

mongoose
    .connect(url, { useNewUrlParser: true })
    .then(result => console.log("Connected to MongoDB"))
    .catch(error => console.log("Error connecting to MongoDB", error.message));

module.exports = mongoose.model("Person", personSchema);
