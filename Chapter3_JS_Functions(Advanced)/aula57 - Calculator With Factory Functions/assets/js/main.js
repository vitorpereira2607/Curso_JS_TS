// Factory Functions -> used to return objects
function createCalculator() {
    return {

        display: document.querySelector('.display'),
        history: document.querySelector('.history'),
        lastResult: null,

        start() {
            this.onClickButtons();
            this.pressEnter();
        },

        pressEnter() {
            document.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.showResult();
                }
            })
        },

        showResult() {
            let expression = this.display.value;

            try {
                res = eval(expression);

                if (res === undefined || res === null) {
                    alert('Invalid Result');
                    this.clearDisplay();
                } else{
                    this.display.value = String(res);
                    this.lastResult = {expression, res};
                }

            } catch (err) {
                alert('Invalid Result');
                this.clearDisplay();
            }
        },

        showResultHistory() {
            
            if(this.lastResult){
                //console.log(this.lastResult);
                const {expression, res} = this.lastResult;
                const p = document.createElement('p');
                //console.log(`${expression} = ${res}`);
                p.innerText += `${expression} = ${res}`;
                this.history.appendChild(p);
            }
        },

        clearDisplay() {
            this.display.value = '';
        },

        deleteOneValue() {
            this.display.value = this.display.value.slice(0, -1);
        },

        onClickButtons() {
            document.addEventListener('click', (e) => {
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.btnForDisplay(el.innerText);
                }

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-del')) {
                    this.deleteOneValue();
                }

                if (el.classList.contains('btn-eq')) {
                    this.showResult();
                    this.showResultHistory();
                }
            });
        },

        btnForDisplay(value) {
            if(this.lastResult){
                //console.log(this.lastResult)
                this.clearDisplay();
                this.lastResult = null;
            }

            this.display.value += value;
        },
    };
}

const calculator = createCalculator();

calculator.start();
