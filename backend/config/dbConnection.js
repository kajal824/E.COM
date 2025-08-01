import mongoose from "mongoose";

/**
 * Connecting The Database 
 */
const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName : "project_backend"
    }).then(()=> {
        console.log(`Connected To Database`);
    }).catch((err)=> {
        console.log(err);
    })
}

export default dbConnection;