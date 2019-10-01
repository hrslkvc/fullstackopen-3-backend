require("dotenv").config();

const express = require("express");
const app = express();

const mongoose = require("mongoose");

const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");

const Person = require("./models/person");

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
    Person.find({}).then(persons => {
        res.send(
            `
                <p>The phonebook contains info for ${persons.length} people<p>
                <p>${Date()}</p>
            `
        );
    });
});

app.get("/api/persons", (req, res, next) => {
    Person.find({}).then(persons => res.json(persons));
});

app.get("/api/persons/:id", (req, res, next) => {
    Person.findById(req.params.id)
        .then(person => {
            if (person) {
                res.json(person);
            } else {
                res.status(404).end();
            }
        })
        .catch(error => next(error));
});

app.post("/api/persons", (req, res, next) => {
    const person = req.body;

    if (!person.name) {
        return res.status(400).json("Name is required");
    }

    if (!person.number) {
        return res.status(400).json("Number is required");
    }

    const newPerson = new Person({
        name: person.name,
        number: person.number
    });

    newPerson
        .save()
        .then(savedperson => {
            res.json(savedperson);
        })
        .catch(error => next(error));
});

app.put("/api/persons/:id", (req, res, next) => {
    const person = req.body;

    Person.findByIdAndUpdate(req.params.id, person, { new: true })
        .then(updatedPerson => {
            res.json(updatedPerson);
        })
        .catch(error => next(error));
});

app.delete("/api/persons/:id", (req, res, next) => {
    Person.findByIdAndRemove(req.params.id)
        .then(result => {
            res.status(204).end();
        })
        .catch(error => next(error));
});

const errorHandler = (error, req, res, next) => {
    console.error(error.message);

    if (error.name === "CastError" && error.kind === "ObjectId") {
        return res.status(400).send({ error: "malformatted id" });
    } else if (error.name === "ValidationError") {
        return res.status(400).json({ error: error.message });
    }

    next(error);
};

app.use(errorHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
