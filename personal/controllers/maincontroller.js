const { get_person } = require('../services/database')


const home = (req, res) => {
    res.send('Tom Kester');
};

const lookup = (req, res) => {
    get_person('test');
    res.send('Tom Kester');
}

module.exports = {
    home,
    lookup,
}