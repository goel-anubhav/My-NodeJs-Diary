//connecting one database (JUST AN INTRO, IT IS A TIME CONSUMING METHOD)

const {MongoClient} = require('mongodb');
// const MongoClient = require('mongodb').MongoClient     //Another Method to use MongoDb
const database='e-com'
const url = 'mongodb://localhost:27017'
const client= new MongoClient(url);

async function dbconnect()
{
    let result = await client.connect();
    let db= result.db(database);
    return db.collection('products');
    // let response = await collection.find({}).toArray();
    // console.log(response);
}

dbconnect().then((resp)=>{
    (resp.find().toArray().then((data)=>{
        console.warn(data)
    }))
})

// console.warn(getData())