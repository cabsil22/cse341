const { get_client, test_connection } = require('../config/database')

let _db;

const initDb = () => {
  if (_db) {
    return _db
  }
  const client = get_client();
  _db = client.db('CSE341');
  return _db;
}

module.exports = {
  initDb
}