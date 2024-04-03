const Contact = require('../models/ContactModel');

exports.contactIndex = async (req, res) => {

    try {
        const contacts = await Contact.getContacts();

        res.render('contact/index', { contacts })

    } catch (error) {
        console.log(error);
        res.status(500).send('Internal server error');;
    }
}

exports.createContactIndex = (req, res) => {
    res.render('contact/create-contact');
}

exports.editContactIndex = async (req, res) => {
    try {
        if (!req.params.id) return res.render('error');

        const contactInstance = new Contact(req.body);

        const contact = await contactInstance.contactById(req.params.id);

        if(!contact) return res.render('error');
        

        res.render('contact/edit-contact', { contact });

    } catch (error) {
        console.log(error);
        res.status(500).send('Internal server error');
    }
};

exports.updateContact = async (req, res) => {
    try {
        if (!req.params.id) {
            return res.render('error');
        }

        const contactData = { _id: req.params.id, ...req.body }
        const contact = new Contact(contactData);

        await contact.updateContactById(req.params.id);

        if (!contact) return res.render('error');

        if (contact.errors.length > 0) {
            req.flash('errors', contact.errors);
            return req.session.save(() => {
                res.redirect(`/contact/edit-contact/${contact.body._id}`);
            })     
        }

        req.flash('success', 'Contato editado com sucesso.');
        return req.session.save(() => {
            res.redirect(`/contact/edit-contact/${contact.body._id}`);
        })    
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal server error');
    }
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
        res.redirect(`/contact/edit-contact/${contact.contact._id}`);
        return;

    } catch (error) {
        console.log(error);
        res.render('error');
    }
}

// Controller
exports.deleteContact = async (req, res) => {
    try {
        const contactInstance = new Contact(req.body);

        const contact = await contactInstance.delete(req.params.id);

        if (!contact) return res.render('error');

        req.flash('success', 'Contato eliminado com sucesso.');
        req.session.save(() => {
            return res.redirect('/contact/index');
        });

    } catch (error) {
        console.log(error);
        req.flash('error', 'Erro ao eliminar contato.');
        req.session.save(() => {
            return res.redirect('/contact/index');
        });
    }
};
