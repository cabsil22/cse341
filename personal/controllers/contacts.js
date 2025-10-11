const { get_contact, get_all_contacts } = require('../services/database')


async function all(req, res) {
    allContacts = await get_all_contacts();
    res.send(allContacts);
};

async function person(req, res){
    contactQuery = req.params.id
    contact = await get_contact(contactQuery);
    res.send(contact);
    
}

module.exports = {
    all,
    person,
}