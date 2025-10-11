const { get_client, test_connection } = require('../config/database')

async function get_contact(id) {
    const client = get_client();
    const database = client.db('CSE341');
    const collection = database.collection('Contacts') ;
    const query = { '_id': id};
    const document = await collection.findOne(query)
    try {
      if (document) {
        return document;
      }
      else {
        return false}
     
    } finally {
      await client.close()    
    }

}


async function get_all_contacts(){
    const client = get_client();
    const database = client.db('CSE341');
    const collection = database.collection('Contacts') ;
    const documents = await collection.find({}).toArray()
    try {
      if (documents) {return documents}
      else {return false}
     
    } finally {
      await client.close()    
    }
}

module.exports = { get_contact, get_all_contacts }