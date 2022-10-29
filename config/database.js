const { MongoClient } = require('mongodb');

module.exports = {
    const database = "mongodb+srv://javicl00:javicl00@fullstackcluster.jvg2mlo.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
        const collection = client.db("test").collection("devices");
        // perform actions on the collection object
        client.close();
    }),

//     database: 'mongodb+srv://javicl00:javicl00@fullstackcluster.jvg2mlo.mongodb.net/?retryWrites=true&w=majority',
    secret: 'yoursecret'
  }
  
