const mongoose = require("mongoose");
const password = process.argv[2];
const url = `mongodb+srv://haris:${password}@cluster0-0n3t6.mongodb.net/phonebook?retryWrites=true&w=majority`;

mongoose.connect(url, { useNewUrlParser: true });

const personSchema = new mongoose.Schema({
    name: String,
    number: String
});

const Person = mongoose.model("Person", personSchema);

if (process.argv.length === 3) {
    Person.find({}).then(result => {
        result.forEach(person => console.log(person.name, person.number));
        mongoose.connection.close();
    });
} else {
    const name = process.argv[3];
    const number = process.argv[4];
    const person = new Person({
        name,
        number
    });

    person.save().then(response => {
        console.log(`Added ${name} number ${number} to phonebook`);
        mongoose.connection.close();
    });
}
