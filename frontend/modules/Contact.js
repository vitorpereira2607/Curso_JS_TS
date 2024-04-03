import validator from "validator";
import { createError } from "./FormValidation";

export default class Contact {
    constructor(formClass) {
        this.form = document.querySelector(formClass);
        this.events();
    }

    init() {
        this.events();
    }

    events() {
        if (!this.form) return;

        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleSubmit(e)
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

        const nameInput = el.querySelector('input[name="name"]');
        const emailInput = el.querySelector('input[name="email"]');
        let error = false;

        const errorFields = this.form.querySelectorAll('.invalid-feedback');

        for (let errorField of errorFields) {
            errorField.remove();
        }

        const invalidInputs = this.form.querySelectorAll('.is-invalid');

        for (let invalidInput of invalidInputs) {
            invalidInput.classList.remove('is-invalid');
        }

        if (!nameInput.value) {
            createError(nameInput, 'Nome é um campo obrigatório.');
            error = true;
        }

        if (emailInput.value) {
            if (!validator.isEmail(emailInput.value)){
                createError(emailInput, 'Email Inválido');
                error = true;
            }   
        }

        return !error;
    }

}
