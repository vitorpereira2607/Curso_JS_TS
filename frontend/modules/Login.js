import validator from "validator";
import { createError } from "./FormValidation";

export default class Login {
    constructor(formClass) {
        this.form = document.querySelector(formClass);
        this.events();
    }

    init() {
        this.events();
    }

    events() {
        if (!this.form) return;
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.handleSubmit(e);
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const checkFields = this.validate(e);

        if (checkFields) {
            this.form.submit();
        }
    }

    validate(e) {
        const el = e.target;

        const userInput = el.querySelector('input[name="username"]');
        const emailInput = el.querySelector('input[name="email"]');
        const passwordInput = el.querySelector('input[name="password"]');
        let error = false;

        const errorFields = this.form.querySelectorAll('.invalid-feedback');

        for (let errorField of errorFields) {
            errorField.remove();
        }

        const invalidInputs = this.form.querySelectorAll('.is-invalid');

        for (let invalidInput of invalidInputs) {
            invalidInput.classList.remove('is-invalid');
        }

        if (userInput) {
            if (userInput.value.length < 5 || userInput.value.length > 15) {
                createError(userInput, 'Utilizador deve conter entre 5 e 15 caracteres.')
                error = true;
            }
        }

        if (!validator.isEmail(emailInput.value)) {
            createError(emailInput, 'Email inválido!');
            error = true;
        }

        if (passwordInput.value.length < 3 || passwordInput.value.length > 50) {
            createError(passwordInput, 'A password deve conter entre 3 a 50 caracteres.');
            error = true;
        }

        return !error;
    }
}
