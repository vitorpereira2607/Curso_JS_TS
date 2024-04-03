const mongoose = require('mongoose');
const validator = require('validator');

const ContactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    surname: { type: String, required: false, default: '' },
    email: { type: String, required: false, default:'' },
    phonenumber: { type: String, required: false, default:'' },
    registered_on: { type: Date, default: Date.now }
});

const ContactModel = mongoose.model('Contact', ContactSchema);

class Contact {
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.contact = [];
    }

    async create() {
        try {
            this.validate();
            await this.contactExists();

            if (this.errors.length > 0) return;


            this.contact = await ContactModel.create(this.body);
        } catch (error) {
            console.log('Error creating contact: ', error);
        }

    }

    async updateContactById(id) {
        try {
            if (typeof id !== 'string') return;

            this.validate();

            if (this.errors.length > 0) return;

            this.contact = await ContactModel.findByIdAndUpdate(id, this.body, { new: true });
            return this.contact;
        } catch (error) {
            console.log('Error updating contact: ', error);
        }
    }

    static async getContacts() {
        try {
            return ContactModel.find()
                .sort({ registered_on: -1});
        } catch (error) {
            console.log('Error fetching contacts: ', error);
        }
    }

    async contactById(id) {
        try {
            if (typeof id !== 'string') return;

            return await ContactModel.findById(id);

        } catch (error) {
            console.log('Error fetching contact: ', error);
            throw error;
        }
    }

    async delete(id) {
        try {
            if (!id) return; 
    
            const deletedContact = await ContactModel.findByIdAndDelete(id);
            if (!deletedContact) throw new Error('Contact not found');
    
            return deletedContact;
    
        } catch (error) {
            console.log('Error deleting contact: ', error);
            throw error;
        }
    }
    

    async contactExists() {

        try {

            if(this.body.email !== ""){
                const existingEmailContact = await ContactModel.findOne({ email: this.body.email });
            
                if (existingEmailContact) {
                    this.errors.push('Este email já existe');
                    return;
                }
            }

            if(this.body.phonenumber !== ""){
                const existingPhoneContact = await ContactModel.findOne({ phonenumber: this.body.phonenumber });
                if (existingPhoneContact) {
                    this.errors.push('Este número de telemóvel já existe');
                    return;
                }
            }
        } catch (error) {
            console.log('Error fetching existence contacts', error);
        }
    }

    validate() {
        this.cleanUp();

        const { name, surname, email, phonenumber } = this.body;

        if (!name && !surname && !email && !phonenumber) {
            this.errors.push('Por favor, preencha os campos necessários para criar um contato.');
            return;
        }

        if(!email && !phonenumber){
            this.errors.push('Pelo menos um contato precisa ser enviado: e-mail ou telefone.');
            return;
        }

        if(email){
            if (!validator.isEmail(email)) this.errors.push('Email inválido!');
        }
        

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
