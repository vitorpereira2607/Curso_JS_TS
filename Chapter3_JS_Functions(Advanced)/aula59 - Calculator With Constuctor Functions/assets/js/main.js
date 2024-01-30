function Calculator() {
    this.display = document.querySelector('.display');
    this.history = document.querySelector('.history');
    this.lastResult = null;

    this.start = () => {
        this.onClickButtons();
        this.pressEnter();
    }

    this.clear = () => this.display.value = '';
    this.deleteOneNumber = () => this.display.value = this.display.value.slice(0, -1);

    this.pressEnter = () => {
        document.addEventListener('keypress', e => {
            if (e.key === 'Enter') {
                this.showResult();
                this.showResultHistory();
            }
        })

    }

    this.addNumDisplay = el => {
        if (this.lastResult) {
            this.clear();
            this.lastResult = null;
        }

        this.display.value += el.innerText;
    }

    this.onClickButtons = () => {
        document.addEventListener('click', e => {
            const el = e.target;

            if (el.classList.contains('btn-num')) this.addNumDisplay(el);
            if (el.classList.contains('btn-clear')) this.clear();
            if (el.classList.contains('btn-del')) this.deleteOneNumber();
            if (el.classList.contains('btn-eq')) {
                this.showResult()
                this.showResultHistory();
            }
        })
    };

    this.createPEl = () => {
        const p = document.createElement('p');
        return p;
    }

    this.showResult = () => {

        let expression = this.display.value;

        try {
            result = eval(expression);

            if (result === undefined || result === null) {
                alert('Invalid Result');
                this.clear();
            } else {
                this.display.value = String(result);
                this.lastResult = { expression, result };
            }
        } catch (error) {
            alert('Invalid Result');
            this.clear();
        }
    }

    this.showResultHistory = () => {
        if (this.lastResult) {
            const p = this.createPEl();
            const { expression, result } = this.lastResult;
            p.innerText += `${expression} = ${result}`;
            this.history.appendChild(p);
        }
    }
}

const calculator = new Calculator();
calculator.start();

