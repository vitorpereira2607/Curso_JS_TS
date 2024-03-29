const Contact = require('../models/ContactModel');

exports.contactIndex = async (req, res) => {

    try {
        const contacts = await Contact.getContacts();

        res.render('contact/index', {contacts})

    } catch (error) {
        console.log(error);
        res.status(500);
    }
}

exports.createContactIndex = (req, res) => {
    res.render('contact/create-contact')
}

exports.createContact = async (req, res) => {

    try {
        const contact = new Contact(req.body);

        await contact.create();

        if (contact.errors.length > 0) {
            req.flash('errors', contact.errors);
            return req.session.save(() => {
                res.redirect('/contact/create-contact')
            })
        }
        req.flash('success', 'Contato criado com sucesso.');
        res.redirect('/contact/index')

    } catch (error) {
        console.log(error);
        res.render('error');
    }
}

exports.deleteContact = async (req, res) => {
    try {
        const contact = await Contact.delete()

    } catch (error) {
        console.log(error)
        res.render('error');
    }
}