import GenerateCPF from './modules/GenerateCPF';
import './assets/css/style.css';

(function() {
    const generate = new GenerateCPF();
    const cpfGenerated = document.querySelector('.generated-cpf');

    cpfGenerated.innerHTML = generate.generateNewCPF()

})();