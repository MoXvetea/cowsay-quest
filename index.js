const importInfo = require('./information')
let cowsays = require("cowsay");

console.log(cowsays.say({
    text: (`${importInfo.firstName}, ${importInfo.campus}`),
}));