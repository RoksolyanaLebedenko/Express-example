import fs from "fs/promises";


const db = fs.readFile("/db.json","utf8")
    .then(file => JSON.parse(file))
.catch(err => console.log(err));

export default db;