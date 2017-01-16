const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connecto MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // findOneAndUpdate
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('587d304dab80ec0cfda6ed4e')
    },
    {
        $set: {
            name: 'Erik'
        },
        $inc: {
            age: 1
        }
    },{
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    //db.close();
});
