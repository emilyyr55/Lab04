const { MongoClient, ObjectId } = require('mongodb');
const debug = require('debug')('app:utilController');

exports.setupDB = async function () {
  const url = "mongodb+srv://emilyyr55:Maksim@cluster0.ynqrqro.mongodb.net/?retryWrites=true&w=majority";
  debug(`attempting to connect to database at ${url}`);
  const dbName = 'blogs';
  try {
    const client = await MongoClient.connect(url, { useNewUrlParser: true });
    const db = client.db(dbName);
    const collection = await db.collection('blogs');
    return ({ client: client, collection: collection })
  }

  catch (err) {
    debug(err);
  }
};