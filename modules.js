// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require("./names");
const sayHi = require("./utilities");
const data = require("./alternatives");

require("./my-grenade");

sayHi("Susan");
sayHi(names.john);
sayHi(names.peter);
