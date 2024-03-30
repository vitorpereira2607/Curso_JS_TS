import validator from "validator";

export default class Login {
    constructor(formClass) {
        this.form = document.querySelector(formClass)
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

        // Clear error messages on input change
        const inputs = this.form.querySelectorAll('input');
        inputs.forEach(input => {
            input.addEventListener('input', () => {
                this.clearError(input);
            });
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const checkFields = this.validate(e);
        
        if(checkFields){
            this.form.submit();
        }
    }

    validate(e) {
        const el = e.target;
        
        const emailInput = el.querySelector('input[name="email"]');
        const passwordInput = el.querySelector('input[name="password"]');
        let error = false;
    
        console.log("Email input value:", emailInput.value);
        console.log("Password input value:", passwordInput.value);
    
        if (!validator.isEmail(emailInput.value)) {
            this.createError(emailInput, 'Email inválido!');
            error = true;
        }
    
        if (passwordInput.value.length < 3 || passwordInput.value.length > 50) {
            this.createError(passwordInput, 'A password deve conter entre 3 a 50 caracteres.');
            error = true;
        }

        return error; 
    }
    

    createError(field, msg){

        this.clearError(field);
        
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('invalid-feedback');
        field.insertAdjacentElement('afterend', div);
    }

    clearError(field) {
        const errorDiv = field.nextElementSibling;
        if (errorDiv && errorDiv.classList.contains('invalid-feedback')) {
            errorDiv.remove();
        }
    }
}
