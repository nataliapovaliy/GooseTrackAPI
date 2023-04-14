const Contacts = require('./schemas/contacts');

const listContacts = async ({owner}, skip, limit) => {
  return Contacts.find({owner}, "", {skip, limit: Number(limit)})  
}

const getContactById = async (contactId) => {
  return Contacts.findOne({_id: contactId});
}

const removeContact = async (contactId) => {
  return Contacts.findByIdAndRemove({ _id: contactId });
}

const addContact = async ({ name, email, phone, owner }) => {
  return Contacts.create({ name, email, phone, owner });
}

const updateContact = async (contactId, fields) => {
  return Contacts.findByIdAndUpdate({ _id: contactId }, fields, { new: true });
}

const updateStatusContact = async (contactId, { favorite }) => {
  return Contacts.findByIdAndUpdate({ _id: contactId }, { favorite }, { new: true });
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
  updateStatusContact,
}
