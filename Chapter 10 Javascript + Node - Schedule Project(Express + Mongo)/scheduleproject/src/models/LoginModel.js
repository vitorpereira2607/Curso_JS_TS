const mongoose = require('mongoose');
const validator = require('validator');
const bcryptjs = require('bcryptjs');

const LoginSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },

});

const LoginModel = mongoose.model('Login', LoginSchema);

class Login {
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.user = null;
    }

    async register() {
        this.validate();
        if (this.errors.length > 0) return;

        await this.userExists();

        const salt = bcryptjs.genSaltSync();
        this.body.password = bcryptjs.hashSync(this.body.password, salt);

        try {
            this.users = await LoginModel.create(this.body);
        } catch (error) {
            console.error(error);
        }

    }

    async userExists(){
        const user = await LoginModel.findOne({email: this.body.email});

        if(user) this.errors.push('Esta conta já existe.');
  
    }

    validate() {
        this.cleanUp()

        if (!validator.isEmail(this.body.email)) this.errors.push('Email inválido!');
        if (this.body.password.length < 3 || this.body.password.length > 50) this.errors.push('A password tem que conter pelo menos 3 a 50 caracteres.');

    }

    cleanUp() {
        for (const key in this.body) {
            if (typeof this.body[key] !== 'string') {
                this.body[key] = '';
            }
        }

        this.body = {
            email: this.body.email,
            password: this.body.password
        }
    }


}

module.exports = Login;