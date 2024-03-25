const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema({
    name: {type: String, required: true},
    surname: String
});

const HomeModel = mongoose.model('Home', HomeSchema);

class Home {

}

module.exports = Home;