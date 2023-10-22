const { MongoClient } = require('mongodb');
const dotenv = require("dotenv");

const dbConnection = async () => {
    try {
        const client = await new MongoClient('https://magenta-rose-frog-suit.cyclic.app').connect();
        const db = client.db('week-17');
        
        const booksCollection = db.collection('Books');
        const usersCollection = db.collection('Users'); 
        
        return { db, booksCollection, usersCollection };
    } catch (error) {
        console.log(error, "<=================== error ==================");
        throw new Error("Database connection error");
    }
}

module.exports = dbConnection;