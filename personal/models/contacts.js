const { initDb } = require("../services/database");
const { ObjectId } = require('mongodb');

async function get_contact(id) {
  const collection = initDb().collection("Contacts");
  const query = { "_id": new ObjectId(id) };
  const document = await collection.findOne(query);
  try {
    if (document) {
      return document;
    } else {
      return false;
    }
  } finally {
  }
}

async function get_all_contacts() {
  const collection = initDb().collection("Contacts");
  const documents = await collection.find({}).toArray();
  try {
    if (documents) {
      return documents;
    } else {
      return false;
    }
  } finally {
  }
}

async function create_contact(data) {
  const collection = initDb().collection("Contacts");
  console.log("Contacts model create: ", data)
  const newDocument = collection.insertOne(data);
  if (newDocument){
    return true
  }
  return false
}

async function update_contact(id, data) {
  const collection = initDb().collection("Contacts");
  try {
    document = await collection.updateOne({"_id": new ObjectId(id)}, {$set: data})
    if (document.matchedCount < 1){
      throw 'Did not find the resourse to update.'
    }
    return true
  } catch (error) {
    console.log(error)
    return false
  }

}

async function delete_contact(id) {
  const collection = initDb().collection("Contacts");
  try {
    document = await collection.deleteOne({"_id": new ObjectId(id)})
    if (document.deletedCount < 1){
      throw 'Item not deleted, most likely it was not found.'
    }
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}

module.exports = { get_contact, get_all_contacts, create_contact, update_contact, delete_contact};
