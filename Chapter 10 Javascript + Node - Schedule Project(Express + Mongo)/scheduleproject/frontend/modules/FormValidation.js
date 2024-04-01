export function createError(field, msg) {
    const div = document.createElement('div');
    div.innerHTML = msg;
    div.classList.add('invalid-feedback');
    div.style.marginBottom = '10px';
    field.classList.add('is-invalid'); 
    field.parentNode.appendChild(div); 
}