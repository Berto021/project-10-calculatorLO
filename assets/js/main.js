function createCalculator() {
  return {
    display: document.querySelector('.display'),
    buttonClear: document.querySelector('.btn-clear'),

    doExpression() {
      let conta = this.display.value;
      try {
        conta = eval(conta);

        if (!conta) {
          alert('Conta Inválida');
          this.clear();
          return;
        }
        this.display.value = String(conta);
      } catch (element) {
        alert('Conta Inválida');
        this.clear();
      }
    },

    clear() {
      this.display.value = ' ';
    },
    eraseOne() {
      this.display.value = this.display.value.slice(0, -1);
    },

    start() {
      this.clickButtons();
      this.pressEnter();
      this.pressDel();
      this.numberPad()
    },
    pressEnter() {
      this.display.addEventListener('keyup', (event) => {
        if (event.keyCode === 13 && this.display.value == ' ') {
          return alert('Digite algo antes de apertar enter :)');
        } else if (event.keyCode === 13) {
          this.doExpression();
        }
      });
    },
    pressDel() {
      this.display.addEventListener('keydown', event => {
        if (event.keyCode === 8) {
          event.preventDefault();
          this.eraseOne();
        }
      });
    },
    numberPad(){
      document.addEventListener('keypress',evento =>{
        if(evento.keyCode === 48){
          this.display.value += 0
        }else if(evento.keyCode === 49){
          this.display.value += 1
        }else if(evento.keyCode === 50){
          this.display.value += 2
        }else if(evento.keyCode === 51){
          this.display.value += 3
        }else if(evento.keyCode === 52){
          this.display.value += 4
        }else if(evento.keyCode === 53){
          this.display.value += 5
        }else if(evento.keyCode === 54){
          this.display.value += 6
        }else if(evento.keyCode === 55){
          this.display.value += 7
        }else if(evento.keyCode === 56){
          this.display.value += 8
        }else if(evento.keyCode === 57){
          this.display.value += 9
        }else if(evento.keyCode === 43){
          this.display.value += '+'
        }else if(evento.keyCode === 45){
          this.display.value += '-'
        }else if(evento.keyCode === 42){
          this.display.value += '*'
        }else if(evento.keyCode === 13){
          this.doExpression()
        }else if(evento.keyCode === 47){
          this.display.value += '/'
        }else if(evento.keyCode === 46){
          this.display.value += '.'
        }else if(evento.keyCode === 44){
          this.display.value += '.'
        }
      })
    },

    clickButtons() {
      document.addEventListener('click', (event) => {
        const element = event.target;

        if (element.classList.contains('btn-num')) {
          this.btnStopDisplay(element.innerText);
        }
        if (element.classList.contains('btn-clear')) {
          this.clear();
        }
        if (element.classList.contains('btn-delete')) {
          this.eraseOne();
        }
        if (
          element.classList.contains('btn-equal') &&
          this.display.value == ' '
        ) {
          return alert('Não clique aqui sem digitar nada :)');
        } else if (element.classList.contains('btn-equal')) {
          this.doExpression();
        }
      });
      
      document.addEventListener('keydown',(evento)=>{
        if(evento.keyCode === 8) this.eraseOne()

      })
      
    },
    btnStopDisplay(valor) {
      this.display.value += valor;
    },
    checkEmpty() {
      if (this.display.value === ' ') {
        return alert('Não clique aqui sem digitar nada :)');
      }
    },
  };
}
const calculator = createCalculator();
calculator.start();
