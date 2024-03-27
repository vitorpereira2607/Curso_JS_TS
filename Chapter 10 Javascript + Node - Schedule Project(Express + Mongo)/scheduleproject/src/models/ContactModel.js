const mongoose = require('mongoose');
const validator = require('validator');

const ContactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    surname: { type: String, required: false, default: '' },
    email: { type: String, required: true },
    phonenumber: { type: String, required: true},
    registered_on: { type: Date, default: Date.now }
});

const ContactModel = mongoose.model('Contact', ContactSchema);

class Contact {
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.contato = [];
    }

    async create() {
        this.validate();
        if (this.errors.length > 0) return;

        await this.contactExists();

        this.contato = ContactModel.create(this.body);
    }

    static async getContacts() {
        try {
            return ContactModel.find();
        } catch (error) {
            console.log('Error fetching contacts', error);
        }
    }

    async delete(){
        try {
            const deletedContact = ContactModel.findByIdAndDelete(this.body.id)
            if(!deletedContact) throw new Error('Contact not found');

            return deletedContact;
            
        } catch (error) {
            console.log('Error deleting contact:', error);
        }
    }

    async contactExists(){
        const existingEmailContact = await ContactModel.findOne({ email: this.body.email})
        
        if(existingEmailContact) {
            this.errors.push('Este email já existe');
            return;
        }

        const existingPhoneContact = await ContactModel.findOne({ phonenumber: this.body.phonenumber})
        
        if(existingPhoneContact) {
            this.errors.push('Este número de telemóvel já existe');
            return;
        }
    }

    validate() {
        this.cleanUp();

        const { name, surname, email, phonenumber} = this.body;

        if (!name && !surname && !email && !phonenumber) {
            this.errors.push('Por favor, preencha todos os campos para criar um contato.');
            return;
        }

        if (!validator.isEmail(email)) this.errors.push('Email inválido!');

        // const phoneRegExp = /^\+(?:[0-9] ?){6,14}[0-9]$/;
        // if (!phoneRegExp.test(phonenumber)) this.errors.push('Número de telemóvel inválido');
    }

    cleanUp() {
        for (const key in this.body) {
            if (typeof this.body[key] !== 'string') {
                this.body[key] = '';
            }
        }
    }
    
}

module.exports = Contact;
