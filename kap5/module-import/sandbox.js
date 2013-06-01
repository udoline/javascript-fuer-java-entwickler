"use strict";

var eu = {};
eu.zeigermann = {};
eu.zeigermann.person = {};
(function (person) {
    // Constructor
    function Person(name) {
        this.name = name;
    }

    // Factory
    function Create(name) {
        return new Person(name);
    }

    // Export der Factory-Methode
    person.CreatePerson = Create;
})(eu.zeigermann.person);

eu.zeigermann.main = {};
(function (main, person) {
    var olli = person.CreatePerson("Olli");
    console.log(olli.name); // => "Olli"

    console.log(person.Person); // => undefined
})(eu.zeigermann.main, eu.zeigermann.person);
