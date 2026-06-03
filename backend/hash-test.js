const bcrypt = require("bcryptjs");
const hash = bcrypt.hashSync("Priya@1234", 10);
console.log(hash);