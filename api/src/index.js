import app from "./app.js"
import {sequelize} from "./database/db.js"
import './models/form.js'

async function main(){
    try {
        await sequelize.sync({force: true});
        console.log('Connection has been established successfully.');
        app.listen(3001)
        console.log("server listen on port 3001")
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

main();