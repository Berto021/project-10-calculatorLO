function createCalculator(){
    return{
        display: document.querySelector('.display'), //pegando a classe do display e colocando no objeto display
        buttonClear: document.querySelector('.btn-clear'),
        
        
        doExpression(){
            let conta = this.display.value;
            try{
                conta = eval(conta);

                if(!conta){
                    alert('Conta Inválida')
                    this.clear()
                    return;
                }
                this.display.value = String(conta.toFixed(2))
            }catch(element){
                alert('Conta Inválida')
                this.clear()
            }

        }, 
        
        clear(){
            this.display.value = ' '

        },
        eraseOne(){
            this.display.value = this.display.value.slice(0,-1)
        },
        
        start(){
            this.clickButtons()
            this.pressEnter()
            this.pressDel()
        },
        pressEnter(){
            this.display.addEventListener('keyup', event =>{
                if(event.keyCode ===13){
                    this.doExpression()
                }

            })
        },
        pressDel(){
            this.display.addEventListener('keyup',event => {
                if(event.keyCode === 8){
                    this.eraseOne()
                }
            })
        },


        clickButtons(){
            document.addEventListener('click', event =>{
                const element = event.target;

                if(element.classList.contains('btn-num')){
                   this.btnStopDisplay(element.innerText); 
                }
                if(element.classList.contains('btn-clear')){
                    this.clear()
                }
                if(element.classList.contains('btn-delete')){
                    this.eraseOne()
                }
                if(element.classList.contains('btn-equal')){
                    this.doExpression()
                }
            });
        },
        btnStopDisplay(valor){
            this.display.value += valor
        },
        



    };
}
const calculator = createCalculator()
calculator.start()