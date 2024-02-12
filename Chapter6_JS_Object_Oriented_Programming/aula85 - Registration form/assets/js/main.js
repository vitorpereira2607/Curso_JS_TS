class ValidateForm {
    constructor() {
        this.form = document.querySelector('.form')
        this.events();
    }

    events() {
        this.form.addEventListener('submit', e => {
            this.handleSubmit(e);
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const checkFields = this.checkFields();
        const validatePasswords = this.validatePassword();

        if (checkFields && validatePasswords) {
            this.form.submit();
        }
    }

    validatePassword() {
        let valid = true;
        const password = this.form.querySelector('.password');
        const repeatPassword = this.form.querySelector('.repeat-password');

        if (password.value !== repeatPassword.value) {
            valid = false;
            this.createError(password, 'Password and Repeat Password must be equal.');
            this.createError(repeatPassword, 'Password and Repeat Password must be equal.');
        }

        if (password.value.length < 6 || password.value.length > 12) {
            valid = false;
            this.createError(password, 'Password needs to have between 6 and 12 characters.');
        }
        return valid;
    }

    checkFields() {
        let valid = true;
        const validateFields = this.form.querySelectorAll('.validate');
        const errorFields = this.form.querySelectorAll('.error-txt');

        for (let errorField of errorFields) {
            errorField.remove();
        }

        for (let field of validateFields) {
            const label = field.previousElementSibling.innerText;
            if (!field.value) {
                this.createError(field, `Field <strong>"${label}"</strong> cannot be empty!`);
                valid = false;
            }

            if (field.classList.contains('cpf')) {
                if (!this.isValidCPF(field)) valid = false;
            }

            if (field.classList.contains('user')) {
                if (!this.validateUser(field)) valid = false;
            }
        }

        return valid;
    }

    isValidCPF(field) {
        const cpf = new ValidateCPF(field.value);

        if (!cpf.validateCPF()) {
            this.createError(field, 'Invalid CPF');
            return false;
        }

        return true;
    }

    validateUser(field) {
        const user = field.value;
        let valid = true;

        if (user.length < 3 || user.length > 12) {
            this.createError(field, 'User must have between 3 and 12 characters');
            valid = false;
        }

        if (!user.match(/^[a-zA-Z0-9]+$/g)) {
            this.createError(field, 'User can only contain letters and/or numbers');
            valid = false;
        }

        return true;
    }

    createError(field, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-txt');
        field.insertAdjacentElement('afterend', div);
    }
}

const validator = new ValidateForm();
