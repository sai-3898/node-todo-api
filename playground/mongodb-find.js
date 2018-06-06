// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID,} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
    if (err){
     return   console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to MongoDB server');
 
    // db.collection('Users').find({
    //     _id : new ObjectID('5b176b87871baf2074f53724')
    // }).toArray().then((docs) =>{
    // console.log('Users');
    // console.log(JSON.stringify(docs,undefined,2));
    // },(err) =>{
    //     console.log('Unable to fetch todos',err);
    // });

    // db.collection('Users').find().count().then((count) =>{
    // console.log(`Users count : ${count}`);

    // },(err) =>{
    //     console.log('Unable to fetch todos',err);
    // });

     db.collection('Users').find({Name:'Saiteja'}).toArray().then((docs) =>{
         console.log(JSON.stringify(docs,undefined,2));
     });
    // db.close();
} );