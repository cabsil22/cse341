const {
  get_contact,
  get_all_contacts,
  update_contact,
  delete_contact,
  create_contact,
} = require("../models/contacts");

async function getAllContacts(req, res) {
  allContacts = await get_all_contacts();
  res.send(allContacts);
}

async function getContact(req, res) {
  contactQuery = req.params.id;
  contact = await get_contact(contactQuery);
  res.send(contact);
}

async function updateContact(req, res) {
  id = req.params.id;

  data = req.body;
  success = await update_contact(id, data);
  if (success) {
    res.status(200).json({ message: "Resource updated successfully" });
  } else {
    res.send("fail");
  }
}

async function deleteContact(req, res) {
  id = req.params.id;
  success = await delete_contact(id);
  if (success) {
    res.status(204).json({ message: "Resource deleted successfully" });
  } else {
    res.status(409).json({ message: "Resource not deleted. Maybe it doesn't exist?" });
  }
}

async function createContact(req, res) {
  data = req.body;
  success = await create_contact(data);
  if (success) {
    res.status(201).json({ message: "Resource created successfully" });
  } else {
    res.send("failure");
  }
}

module.exports = {
  getAllContacts,
  getContact,
  updateContact,
  deleteContact,
  createContact,
};
