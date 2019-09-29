const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");

let persons = [
    {
        name: "Arto Hellas",
        number: "040-123456",
        id: 1
    },
    {
        name: "Ada Lovelace",
        number: "39-44-5323523",
        id: 2
    },
    {
        name: "Dan Abramov",
        number: "12-43-234345",
        id: 3
    },
    {
        name: "Mary Poppendieck",
        number: "39-23-6423122",
        id: 4
    }
];

app.use(express.static("build"));
app.use(bodyParser.json());
app.use(cors());

morgan.token("body", function(req, res) {
    return JSON.stringify(req.body);
});

app.use(
    morgan(
        ":method :url :status :res[content-length] - :response-time ms :body"
    )
);

app.get("/info", (req, res) => {
    res.send(
        `
            <p>The phonebook contains info for ${persons.length} people<p>
            <p>${Date()}</p>
        `
    );
});

app.get("/api/persons", (req, res) => {
    res.json(persons);
});

app.get("/api/persons/:id", (req, res) => {
    const id = Number(req.params.id);
    const person = persons.find(p => id === p.id);

    if (person) {
        res.json(person);
    } else {
        res.status(404).end();
    }
});

app.post("/api/persons", (req, res) => {
    const person = req.body;

    if (!person.name) {
        return res.status(400).json("Name is required");
    }

    if (!person.number) {
        return res.status(400).json("Number is required");
    }

    const exists = persons.filter(
        p => p.name.toLowerCase() === person.name.toLowerCase()
    );

    if (exists.length) {
        return res.status(400).json("Name must be unique");
    }

    const id = Math.floor(Math.random() * 200);

    person.id = id;
    persons = persons.concat(person);
    res.json(person);
});

app.delete("/api/persons/:id", (req, res) => {
    const id = Number(req.params.id);
    persons = persons.filter(p => id !== p.id);
    res.status(204).end();
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
