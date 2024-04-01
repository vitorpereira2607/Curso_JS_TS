const mongoose = require('mongoose');
const validator = require('validator');
const bcryptjs = require('bcryptjs');

const LoginSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    username: { type: String, required: true }

});

const LoginModel = mongoose.model('Login', LoginSchema);

class Login {
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.user = null;
    }

    async login() {
        this.validate(true);
        if (this.errors.length > 0) return;
        this.user = await LoginModel.findOne({ email: this.body.email });

        if (!this.user) {
            this.errors.push('Esta conta não existe');
        }

        if (!bcryptjs.compareSync(this.body.password, this.user.password)) {
            this.errors.push('Password inválida.');
            this.user = null;
            return;
        }

    }

    async register() {
        this.validate(false);
        if (this.errors.length > 0) return;

        await this.userExists();

        const salt = bcryptjs.genSaltSync();
        this.body.password = bcryptjs.hashSync(this.body.password, salt);

        this.users = await LoginModel.create(this.body);
    }

    async userExists() {
        this.user = await LoginModel.findOne({ email: this.body.email });
        if (this.user) this.errors.push('Esta conta já existe.');
    }

    validate(isLogin) {
        this.cleanUp()

        const { username, email, password } = this.body;

        if (!username && !email === '' && !password) {
            this.errors.push('Por favor, preencha os campos abaixo');
            return;
        }

        
        if (!validator.isEmail(email)) this.errors.push('Email inválido!');

        if (!isLogin) {
            if (username < 5 || username > 15) this.errors.push('Utilizador deve conter entre 5 e 15 caractares.');
            if (password.length < 3 || password.length > 50) this.errors.push('A password deve conter entre 3 a 50 caracteres.');
        }


    }

    cleanUp() {
        for (const key in this.body) {
            if (typeof this.body[key] !== 'string') {
                this.body[key] = '';
            }
        }
    }


}

module.exports = Login;